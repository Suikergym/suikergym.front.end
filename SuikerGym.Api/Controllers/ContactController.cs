using Microsoft.AspNetCore.Mvc;
using SuikerGym.Api.Models;
using SuikerGym.Api.Services;

namespace SuikerGym.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
		private readonly IContactService _contactService;
		private readonly ILogger<ContactController> _logger;

		public ContactController(IContactService contactService, ILogger<ContactController> logger)
		{
				_contactService = contactService;
				_logger = logger;
		}

		/// <summary>
		/// Submit a contact form request
		/// </summary>
		/// <param name="request">Contact form data</param>
		/// <returns>Response indicating success or failure</returns>
		[HttpPost]
		public async Task<ActionResult<ContactResponse>> SubmitContactForm([FromBody] ContactRequest request)
		{
				if (!ModelState.IsValid)
				{
						return BadRequest(new ContactResponse
						{
								Success = false,
								Message = "Ongeldige gegevens. Controleer alle velden en probeer het opnieuw."
						});
				}

				var response = await _contactService.SubmitContactFormAsync(request);

				if (response.Success)
				{
						return Ok(response);
				}

				return StatusCode(500, response);
		}

		/// <summary>
		/// Health check endpoint for the contact controller
		/// </summary>
		[HttpGet("health")]
		public IActionResult Health()
		{
				return Ok(new { status = "healthy", service = "contact" });
		}
}
