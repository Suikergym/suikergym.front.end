using Microsoft.AspNetCore.Mvc;
using SuikerGym.Api.Models;
using SuikerGym.Api.Services;

namespace SuikerGym.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProgramsController : ControllerBase
{
		private readonly IProgramService _programService;
		private readonly ILogger<ProgramsController> _logger;

		public ProgramsController(IProgramService programService, ILogger<ProgramsController> logger)
		{
				_programService = programService;
				_logger = logger;
		}

		/// <summary>
		/// Get all available training programs
		/// </summary>
		/// <returns>List of all programs</returns>
		[HttpGet]
		public async Task<ActionResult<List<ProgramInfo>>> GetAllPrograms()
		{
				try
				{
						var programs = await _programService.GetAllProgramsAsync();

						return Ok(programs);
				}
				catch (Exception ex)
				{
						_logger.LogError(ex, "Error retrieving programs");

						return StatusCode(500, new { message = "Er is een fout opgetreden bij het ophalen van de programma's." });
				}
		}

		/// <summary>
		/// Get a specific program by ID
		/// </summary>
		/// <param name="id">Program identifier</param>
		/// <returns>Program information</returns>
		[HttpGet("{id}")]
		public async Task<ActionResult<ProgramInfo>> GetProgramById(string id)
		{
				try
				{
						var program = await _programService.GetProgramByIdAsync(id);

						if (program == null)
						{
								return NotFound(new { message = $"Programma met ID '{id}' niet gevonden." });
						}

						return Ok(program);
				}
				catch (Exception ex)
				{
						_logger.LogError(ex, "Error retrieving program with ID {ProgramId}", id);
						return StatusCode(500, new { message = "Er is een fout opgetreden bij het ophalen van het programma." });
				}
		}

		/// <summary>
		/// Health check endpoint for the programs controller
		/// </summary>
		[HttpGet("health")]
		public IActionResult Health()
		{
				return Ok(new { status = "healthy", service = "programs" });
		}
}
