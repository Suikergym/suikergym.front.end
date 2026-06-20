using Microsoft.Extensions.Options;
using SuikerGym.Api.Configuration;
using SuikerGym.Api.Models;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace SuikerGym.Api.Services;

public interface IBreakfastClubService
{
	Task<BreakfastClubResponse> RegisterInterestAsync(BreakfastClubRequest request);
}

public class BreakfastClubService : IBreakfastClubService
{
	private readonly ILogger<BreakfastClubService> _logger;
	private readonly MailerSendSettings _mailerSendSettings;
	private readonly HttpClient _httpClient;

	public BreakfastClubService(
			ILogger<BreakfastClubService> logger,
			IOptions<MailerSendSettings> mailerSendSettings,
			HttpClient httpClient)
	{
		_logger = logger;
		_mailerSendSettings = mailerSendSettings.Value;
		_httpClient = httpClient;

		// Configure HttpClient for MailerSend
		_httpClient.BaseAddress = new Uri("https://api.mailersend.com/v1/");
		_httpClient.DefaultRequestHeaders.Authorization =
				new AuthenticationHeaderValue("Bearer", _mailerSendSettings.ApiKey);
		_httpClient.DefaultRequestHeaders.Accept.Add(
				new MediaTypeWithQualityHeaderValue("application/json"));
	}

	public async Task<BreakfastClubResponse> RegisterInterestAsync(BreakfastClubRequest request)
	{
		try
		{
			// Validate request
			if (string.IsNullOrWhiteSpace(request.Name) ||
					string.IsNullOrWhiteSpace(request.Email) ||
					string.IsNullOrWhiteSpace(request.Phone))
			{
				return new BreakfastClubResponse
				{
					Success = false,
					Message = "Alle velden zijn verplicht."
				};
			}

			// Send confirmation email to the user
			var confirmationSent = await SendConfirmationEmailAsync(request);

			// Send notification email to admin
			var notificationSent = await SendNotificationEmailAsync(request);

			if (confirmationSent && notificationSent)
			{
				_logger.LogInformation(
						"Breakfast Club registration successful for {Name} ({Email})",
						request.Name,
						request.Email
				);

				return new BreakfastClubResponse
				{
					Success = true,
					Message = "Bedankt voor je interesse! Je ontvangt een bevestiging per email."
				};
			}
			else
			{
				_logger.LogWarning(
						"Partial email failure for Breakfast Club registration: Confirmation={ConfirmationSent}, Notification={NotificationSent}",
						confirmationSent,
						notificationSent
				);

				return new BreakfastClubResponse
				{
					Success = true,
					Message = "Je aanmelding is geregistreerd, maar er was een probleem met de email bevestiging."
				};
			}
		}
		catch (Exception ex)
		{
			_logger.LogError(ex, "Error processing Breakfast Club registration for {Email}", request.Email);
			return new BreakfastClubResponse
			{
				Success = false,
				Message = "Er is een fout opgetreden bij het verwerken van je aanmelding. Probeer het later opnieuw."
			};
		}
	}

	private async Task<bool> SendConfirmationEmailAsync(BreakfastClubRequest request)
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
						email = request.Email,
						name = request.Name
					}
				},
				subject = "Welkom bij de Suikergym Breakfast Club!",
				html = BuildConfirmationEmailHtml(request),
				text = BuildConfirmationEmailText(request)
			};

			var jsonPayload = JsonSerializer.Serialize(emailData);
			_logger.LogInformation("Sending email payload: {Payload}", jsonPayload);

			var content = new StringContent(
				jsonPayload,
				Encoding.UTF8,
				"application/json"
			);

			var response = await _httpClient.PostAsync("email", content);

			if (response.IsSuccessStatusCode)
			{
				_logger.LogInformation("Confirmation email sent to {Email}", request.Email);
				return true;
			}
			else
			{
				var errorContent = await response.Content.ReadAsStringAsync();
				_logger.LogError(
					"Failed to send confirmation email to {Email}. Status: {StatusCode}, Error: {Error}",
					request.Email,
					response.StatusCode,
					errorContent
				);
				return false;
			}
		}
		catch (Exception ex)
		{
			_logger.LogError(ex, "Exception sending confirmation email to {Email}", request.Email);
			return false;
		}
	}

	private async Task<bool> SendNotificationEmailAsync(BreakfastClubRequest request)
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
												name = "Suikergym Admin"
										}
								},
				subject = $"🎉 Nieuwe Breakfast Club Aanmelding - {request.Name}",
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
				_logger.LogInformation("Notification email sent for registration: {Name}", request.Name);
				return true;
			}
			else
			{
				var errorContent = await response.Content.ReadAsStringAsync();
				_logger.LogError(
						"Failed to send notification email. Status: {StatusCode}, Error: {Error}",
						response.StatusCode,
						errorContent
				);
				return false;
			}
		}
		catch (Exception ex)
		{
			_logger.LogError(ex, "Exception sending notification email");
			return false;
		}
	}

	private string BuildConfirmationEmailHtml(BreakfastClubRequest request)
	{
		return $@"
<!DOCTYPE html>
<html>
<head>
		<meta charset=""utf-8"">
		<style>
				body {{ font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #334155; }}
				.container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
				.header {{ background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
				.content {{ background: white; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px; }}
				.button {{ display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; }}
				.info-box {{ background: #f8fafc; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0; border-radius: 5px; }}
				.footer {{ text-align: center; color: #94a3b8; font-size: 14px; margin-top: 30px; }}
		</style>
</head>
<body>
		<div class=""container"">
				<div class=""header"">
						<h1>🏋️ Welkom bij de Breakfast Club!</h1>
				</div>
				<div class=""content"">
						<p>Hoi {request.Name},</p>

						<p>Wat gaaf dat je interesse hebt in de <strong>Suikergym Breakfast Club</strong>! We hebben je aanmelding ontvangen en zijn enthousiast om je binnenkort te verwelkomen.</p>

						<div class=""info-box"">
								<h3>📋 Jouw Gegevens</h3>
								<p><strong>Naam:</strong> {request.Name}<br>
								<strong>Email:</strong> {request.Email}<br>
								<strong>Telefoon:</strong> {request.Phone}</p>
						</div>

						<h3>Wat gebeurt er nu?</h3>
						<p>We nemen binnen 48 uur contact met je op om:</p>
						<ul>
								<li>De Breakfast Club in detail toe te lichten</li>
								<li>Je vragen te beantwoorden</li>
								<li>Een proefles in te plannen</li>
						</ul>

						<div class=""info-box"">
								<h3>⏰ Wat is de Breakfast Club?</h3>
								<p><strong>Wanneer:</strong> Dinsdag & Donderdag ochtend<br>
								<strong>Training:</strong> 6:30 - 7:15 uur<br>
								<strong>Ontbijt:</strong> 7:15 - 8:00 uur<br>
								<strong>Prijs:</strong> €25 per sessie</p>
						</div>

						<p>Start je dag met energie en kom samen met ons trainen en ontbijten!</p>

						<p>Tot snel!<br>
						<strong>Team Suikergym</strong></p>
				</div>
				<div class=""footer"">
						<p>&copy; {DateTime.Now.Year} Suikergym - Trainen is voor iedereen<br>
						<a href=""https://suikergym.nl"" style=""color: #3b82f6;"">www.suikergym.nl</a></p>
				</div>
		</div>
</body>
</html>";
	}

	private string BuildConfirmationEmailText(BreakfastClubRequest request)
	{
		return $@"
Welkom bij de Breakfast Club!

Hoi {request.Name},

Wat gaaf dat je interesse hebt in de Suikergym Breakfast Club! We hebben je aanmelding ontvangen en zijn enthousiast om je binnenkort te verwelkomen.

JOUW GEGEVENS
Naam: {request.Name}
Email: {request.Email}
Telefoon: {request.Phone}

WAT GEBEURT ER NU?
We nemen binnen 48 uur contact met je op om:
- De Breakfast Club in detail toe te lichten
- Je vragen te beantwoorden
- Een proefles in te plannen

WAT IS DE BREAKFAST CLUB?
Wanneer: Dinsdag & Donderdag ochtend
Training: 6:30 - 7:15 uur
Ontbijt: 7:15 - 8:00 uur
Prijs: €25 per sessie

Start je dag met energie en kom samen met ons trainen en ontbijten!

Tot snel!
Team Suikergym

---
© {DateTime.Now.Year} Suikergym - Trainen is voor iedereen
www.suikergym.nl
";
	}

	private string BuildNotificationEmailHtml(BreakfastClubRequest request)
	{
		return $@"
<!DOCTYPE html>
<html>
<head>
		<meta charset=""utf-8"">
		<style>
				body {{ font-family: 'Inter', sans-serif; line-height: 1.6; color: #334155; }}
				.container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
				.header {{ background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
				.content {{ background: white; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px; }}
				.data-table {{ width: 100%; border-collapse: collapse; margin: 20px 0; }}
				.data-table td {{ padding: 12px; border-bottom: 1px solid #e2e8f0; }}
				.data-table td:first-child {{ font-weight: 600; color: #1e293b; width: 30%; }}
				.alert {{ background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 5px; }}
		</style>
</head>
<body>
		<div class=""container"">
				<div class=""header"">
						<h1>🎉 Nieuwe Breakfast Club Aanmelding</h1>
				</div>
				<div class=""content"">
						<div class=""alert"">
								<strong>Er is een nieuwe aanmelding voor de Breakfast Club!</strong>
						</div>

						<h3>Contact Informatie</h3>
						<table class=""data-table"">
								<tr>
										<td>Naam:</td>
										<td>{request.Name}</td>
								</tr>
								<tr>
										<td>Email:</td>
										<td><a href=""mailto:{request.Email}"">{request.Email}</a></td>
								</tr>
								<tr>
										<td>Telefoon:</td>
										<td><a href=""tel:{request.Phone}"">{request.Phone}</a></td>
								</tr>
								<tr>
										<td>Aangemeld op:</td>
										<td>{DateTime.Now:dd-MM-yyyy HH:mm:ss}</td>
								</tr>
						</table>

						<p><strong>Actie vereist:</strong> Neem binnen 48 uur contact op met deze persoon.</p>
				</div>
		</div>
</body>
</html>";
	}

	private string BuildNotificationEmailText(BreakfastClubRequest request)
	{
		return $@"
NIEUWE BREAKFAST CLUB AANMELDING

Contact Informatie:
--------------------
Naam: {request.Name}
Email: {request.Email}
Telefoon: {request.Phone}
Aangemeld op: {DateTime.Now:dd-MM-yyyy HH:mm:ss}

ACTIE VEREIST: Neem binnen 48 uur contact op met deze persoon.
";
	}
}
