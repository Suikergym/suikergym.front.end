using SuikerGym.Api.Services;
using Microsoft.AspNetCore.SpaServices.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

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

// Register services
builder.Services.AddScoped<IContactService, ContactService>();
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
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseDeveloperExceptionPage();
    app.UseHttpsRedirection();
}

app.UseStaticFiles();
app.UseSpaStaticFiles();

app.UseCors("AllowReactApp");

app.UseRouting();
app.UseAuthorization();

app.MapControllers();

// Configure SPA
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";

    if (app.Environment.IsDevelopment())
    {
        spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
    }
});

app.Run();
