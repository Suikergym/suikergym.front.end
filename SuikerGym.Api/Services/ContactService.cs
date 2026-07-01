using Microsoft.Extensions.Options;
using SuikerGym.Api.Configuration;
using SuikerGym.Api.Models;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace SuikerGym.Api.Services;

public interface IContactService
{
	Task<ContactResponse> SubmitContactFormAsync(ContactRequest request);
}

public class ContactService : IContactService
{
	private readonly ILogger<ContactService> _logger;
	private readonly MailerSendSettings _mailerSendSettings;
	private readonly HttpClient _httpClient;

	public ContactService(
			ILogger<ContactService> logger,
			IOptions<MailerSendSettings> mailerSendSettings,
			HttpClient httpClient)
	{
		_logger = logger;
		_mailerSendSettings = mailerSendSettings.Value;
		_httpClient = httpClient;

		_httpClient.BaseAddress = new Uri("https://api.mailersend.com/v1/");
		_httpClient.DefaultRequestHeaders.Authorization =
				new AuthenticationHeaderValue("Bearer", _mailerSendSettings.ApiKey);
		_httpClient.DefaultRequestHeaders.Accept.Add(
				new MediaTypeWithQualityHeaderValue("application/json"));
	}

	public async Task<ContactResponse> SubmitContactFormAsync(ContactRequest request)
	{
		try
		{
			_logger.LogInformation(
					"New contact request received - Name: {FirstName} {LastName}, Email: {Email}, Goal: {Goal}",
					request.FirstName,
					request.LastName,
					request.Email,
					request.Goal
			);

			var emailSent = await SendNotificationEmailAsync(request);

			if (emailSent)
			{
				return new ContactResponse
				{
					Success = true,
					Message = "We nemen snel contact op!"
				};
			}
			else
			{
				return new ContactResponse
				{
					Success = false,
					Message = "Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw."
				};
			}
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

	private async Task<bool> SendNotificationEmailAsync(ContactRequest request)
	{
		try
		{
			var emailData = new
			{
				from = new
				{
					email = _mailerSendSettings.FromEmail,
					name = _mailerSendSettings.FromName
				},
				to = new[]
					{
										new
										{
												email = _mailerSendSettings.NotificationEmail,
												name = "Suikergym"
										}
								},
				reply_to = new
				{
					email = request.Email,
					name = $"{request.FirstName} {request.LastName}"
				},
				subject = $"Nieuwe contactaanvraag - {request.FirstName} {request.LastName}",
				html = BuildNotificationEmailHtml(request),
				text = BuildNotificationEmailText(request)
			};

			var content = new StringContent(
					JsonSerializer.Serialize(emailData),
					Encoding.UTF8,
					"application/json"
			);

			var response = await _httpClient.PostAsync("email", content);

			if (response.IsSuccessStatusCode)
			{
				_logger.LogInformation(
						"Contact notification email sent for {FirstName} {LastName} ({Email})",
						request.FirstName,
						request.LastName,
						request.Email
				);
				return true;
			}
			else
			{
				var errorContent = await response.Content.ReadAsStringAsync();
				_logger.LogError(
						"Failed to send contact notification email. Status: {StatusCode}, Error: {Error}",
						response.StatusCode,
						errorContent
				);
				return false;
			}
		}
		catch (Exception ex)
		{
			_logger.LogError(ex, "Exception sending contact notification email");
			return false;
		}
	}

	private string BuildNotificationEmailHtml(ContactRequest request)
	{
		return $@"
<!DOCTYPE html>
<html>
<head>
		<meta charset=""utf-8"">
		<style>
				body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #334155; }}
				.container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
				.header {{ background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
				.content {{ background: white; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px; }}
				.data-table {{ width: 100%; border-collapse: collapse; margin: 20px 0; }}
				.data-table td {{ padding: 12px; border-bottom: 1px solid #e2e8f0; vertical-align: top; }}
				.data-table td:first-child {{ font-weight: 600; color: #1e293b; width: 30%; }}
				.message-box {{ background: #f8fafc; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 0 5px 5px 0; white-space: pre-wrap; }}
				.alert {{ background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 5px; }}
		</style>
</head>
<body>
		<div class=""container"">
				<div class=""header"">
						<h1>📬 Nieuwe Contactaanvraag</h1>
				</div>
				<div class=""content"">
						<div class=""alert"">
								<strong>Er is een nieuwe contactaanvraag ontvangen via de website.</strong>
						</div>
						<h3>Contact Informatie</h3>
						<table class=""data-table"">
								<tr><td>Naam:</td><td>{request.FirstName} {request.LastName}</td></tr>
								<tr><td>Email:</td><td><a href=""mailto:{request.Email}"">{request.Email}</a></td></tr>
								<tr><td>Telefoon:</td><td><a href=""tel:{request.Phone}"">{request.Phone}</a></td></tr>
								<tr><td>Programma:</td><td>{request.Goal}</td></tr>
								<tr><td>Ontvangen op:</td><td>{DateTime.Now:dd-MM-yyyy HH:mm:ss}</td></tr>
						</table>
						<h3>Bericht</h3>
						<div class=""message-box"">{request.Message}</div>
						<p><strong>Actie:</strong> Beantwoord via reply op deze email of bel direct.</p>
				</div>
		</div>
</body>
</html>";
	}

	private string BuildNotificationEmailText(ContactRequest request)
	{
		return $@"NIEUWE CONTACTAANVRAAG

Naam: {request.FirstName} {request.LastName}
Email: {request.Email}
Telefoon: {request.Phone}
Programma: {request.Goal}
Ontvangen op: {DateTime.Now:dd-MM-yyyy HH:mm:ss}

BERICHT:
{request.Message}

Beantwoord via reply op deze email of bel direct.
";
	}
}
