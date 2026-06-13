using Microsoft.AspNetCore.Mvc;

namespace SuikerGym.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
		private readonly ILogger<HealthController> _logger;

		public HealthController(ILogger<HealthController> logger)
		{
				_logger = logger;
		}

		/// <summary>
		/// Overall health check for the API
		/// </summary>
		[HttpGet]
		public IActionResult Get()
		{
				return Ok(new
				{
						status = "healthy",
						timestamp = DateTime.UtcNow,
						version = "1.0.0",
						services = new
						{
								contact = "operational",
								programs = "operational"
						}
				});
		}
}
