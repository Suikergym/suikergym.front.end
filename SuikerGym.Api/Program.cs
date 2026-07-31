using SuikerGym.Api.Services;
using SuikerGym.Api.Configuration;
using Microsoft.AspNetCore.SpaServices.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Load appsettings.Local.json if it exists (for local secrets)
builder.Configuration.AddJsonFile("appsettings.Local.json", optional: true, reloadOnChange: true);

// Add services to the container.
builder.Services.AddControllers();

// Configure settings
builder.Services.Configure<MailerSendSettings>(
    builder.Configuration.GetSection(MailerSendSettings.SectionName));

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

// Register HttpClient for MailerSend services
builder.Services.AddHttpClient<IBreakfastClubService, BreakfastClubService>();
builder.Services.AddHttpClient<IContactService, ContactService>();

// Register services
builder.Services.AddScoped<IProgramService, ProgramService>();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Add SPA static files
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/build";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseDeveloperExceptionPage();
}

// Static files first
app.UseStaticFiles();
if (!app.Environment.IsDevelopment())
{
    app.UseSpaStaticFiles();
}

app.UseCors("AllowReactApp");

app.UseRouting();
app.UseAuthorization();

// Map API controllers
app.MapControllers();

// Configure SPA - this catches all non-API routes last
app.MapWhen(context => !context.Request.Path.StartsWithSegments("/api"), appBuilder =>
{
    appBuilder.UseSpa(spa =>
    {
        spa.Options.SourcePath = "ClientApp";

        if (app.Environment.IsDevelopment())
        {
            spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
        }
    });
});

app.Run();
