using SuikerGym.Api.Models;

namespace SuikerGym.Api.Services;

/// <summary>
/// Email service interface for sending notifications
/// Implement this interface using your preferred email provider:
/// - SMTP (using MailKit)
/// - SendGrid
/// - Azure Communication Services
/// - etc.
/// </summary>
public interface IEmailService
{
		Task<bool> SendContactFormNotificationAsync(ContactRequest request);
		Task<bool> SendWelcomeEmailAsync(string email, string firstName);
}

/// <summary>
/// Example email service implementation
/// TODO: Replace with actual email sending logic
/// </summary>
public class EmailService : IEmailService
{
		private readonly ILogger<EmailService> _logger;
		private readonly IConfiguration _configuration;

		public EmailService(ILogger<EmailService> logger, IConfiguration configuration)
		{
				_logger = logger;
				_configuration = configuration;
		}

		public async Task<bool> SendContactFormNotificationAsync(ContactRequest request)
		{
				try
				{
						// TODO: Implement actual email sending
						// Example with SendGrid:
						// var apiKey = _configuration["SendGrid:ApiKey"];
						// var client = new SendGridClient(apiKey);
						// var msg = new SendGridMessage()
						// {
						//     From = new EmailAddress("noreply@suikergym.nl", "Suikergym"),
						//     Subject = $"Nieuwe aanvraag: {request.Goal}",
						//     PlainTextContent = BuildEmailContent(request)
						// };
						// msg.AddTo(new EmailAddress(_configuration["ApiSettings:ContactEmail"]));
						// var response = await client.SendEmailAsync(msg);
						// return response.IsSuccessStatusCode;

						// For now, just log the email content
						_logger.LogInformation(
								"Email notification (not sent - implementation needed): New contact from {FirstName} {LastName} ({Email})",
								request.FirstName,
								request.LastName,
								request.Email
						);

						await Task.CompletedTask;
						return true;
				}
				catch (Exception ex)
				{
						_logger.LogError(ex, "Failed to send email notification");
						return false;
				}
		}

		public async Task<bool> SendWelcomeEmailAsync(string email, string firstName)
		{
				try
				{
						// TODO: Implement welcome email
						_logger.LogInformation("Welcome email (not sent - implementation needed) to {Email}", email);
						await Task.CompletedTask;
						return true;
				}
				catch (Exception ex)
				{
						_logger.LogError(ex, "Failed to send welcome email");
						return false;
				}
		}

		private string BuildEmailContent(ContactRequest request)
		{
				return $@"
Nieuwe contact aanvraag van Suikergym website:

Naam: {request.FirstName} {request.LastName}
Email: {request.Email}
Telefoon: {request.Phone}
Programma: {request.Goal}

Bericht:
{request.Message}

---
Ontvangen op: {DateTime.Now:dd-MM-yyyy HH:mm:ss}
";
		}
}

// To use this service:
// 1. Uncomment the registration in Program.cs:
//    builder.Services.AddScoped<IEmailService, EmailService>();
//
// 2. Inject into ContactService:
//    private readonly IEmailService _emailService;
//    public ContactService(..., IEmailService emailService)
//
// 3. Call in SubmitContactFormAsync:
//    await _emailService.SendContactFormNotificationAsync(request);
//
// 4. Add NuGet packages for your email provider:
//    dotnet add package SendGrid
//    or
//    dotnet add package MailKit
