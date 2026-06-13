using SuikerGym.Api.Models;

namespace SuikerGym.Api.Services;

public interface IContactService
{
		Task<ContactResponse> SubmitContactFormAsync(ContactRequest request);
}

public class ContactService : IContactService
{
		private readonly ILogger<ContactService> _logger;
		private readonly IConfiguration _configuration;

		public ContactService(ILogger<ContactService> logger, IConfiguration configuration)
		{
				_logger = logger;
				_configuration = configuration;
		}

		public async Task<ContactResponse> SubmitContactFormAsync(ContactRequest request)
		{
				try
				{
						// Log the contact request
						_logger.LogInformation(
								"New contact request received - Name: {FirstName} {LastName}, Email: {Email}, Goal: {Goal}",
								request.FirstName,
								request.LastName,
								request.Email,
								request.Goal
						);

						// Here you can add logic to:
						// 1. Send email notification
						// 2. Store in database
						// 3. Send to CRM system
						// 4. Forward to external service if needed

						// For now, we'll just return success
						// In production, you might want to use services like SendGrid, MailKit, etc.

						await Task.CompletedTask; // Placeholder for async operations

						return new ContactResponse
						{
								Success = true,
								Message = "We nemen snel contact op!"
						};
				}
				catch (Exception ex)
				{
						_logger.LogError(ex, "Error processing contact form submission");
						return new ContactResponse
						{
								Success = false,
								Message = "Er is een fout opgetreden. Probeer het later opnieuw."
						};
				}
		}
}
