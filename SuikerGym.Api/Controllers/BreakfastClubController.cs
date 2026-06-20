using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using SuikerGym.Api.Configuration;
using SuikerGym.Api.Models;
using SuikerGym.Api.Services;

namespace SuikerGym.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BreakfastClubController : ControllerBase
{
	private readonly ILogger<BreakfastClubController> _logger;
	private readonly IBreakfastClubService _breakfastClubService;

	public BreakfastClubController(
			ILogger<BreakfastClubController> logger,
			IBreakfastClubService breakfastClubService)
	{
		_logger = logger;
		_breakfastClubService = breakfastClubService;
	}

	/// <summary>
	/// Register interest for Breakfast Club
	/// </summary>
	/// <param name="request">Registration details</param>
	/// <returns>Registration response</returns>
	[HttpPost("register")]
	[ProducesResponseType(typeof(BreakfastClubResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	[ProducesResponseType(StatusCodes.Status500InternalServerError)]
	public async Task<ActionResult<BreakfastClubResponse>> RegisterInterest([FromBody] BreakfastClubRequest request)
	{
		try
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(new BreakfastClubResponse
				{
					Success = false,
					Message = "Ongeldige gegevens. Controleer je invoer."
				});
			}

			var response = await _breakfastClubService.RegisterInterestAsync(request);

			if (response.Success)
			{
				return Ok(response);
			}
			else
			{
				return BadRequest(response);
			}
		}
		catch (Exception ex)
		{
			_logger.LogError(ex, "Error processing Breakfast Club registration");
			return StatusCode(500, new BreakfastClubResponse
			{
				Success = false,
				Message = "Er is een onverwachte fout opgetreden."
			});
		}
	}

	/// <summary>
	/// Health check endpoint
	/// </summary>
	[HttpGet("health")]
	public IActionResult Health()
	{
		return Ok(new { status = "healthy", service = "breakfast-club" });
	}

	/// <summary>
	/// Test configuration endpoint - REMOVE IN PRODUCTION!
	/// </summary>
	[HttpGet("test-config")]
	public IActionResult TestConfig([FromServices] IOptions<MailerSendSettings> settings)
	{
		var apiKey = settings.Value.ApiKey;

		// Mask the API key for security
		var masked = string.IsNullOrEmpty(apiKey)
				? "❌ NOT SET"
				: $"✅ {apiKey[..4]}...{apiKey[^4..]} ({apiKey.Length} chars)";

		return Ok(new
		{
			apiKeyStatus = masked,
			fromEmail = settings.Value.FromEmail,
			fromName = settings.Value.FromName,
			notificationEmail = settings.Value.NotificationEmail,
			warning = "⚠️ REMOVE THIS ENDPOINT IN PRODUCTION!"
		});
	}
}

