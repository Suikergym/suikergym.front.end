using SuikerGym.Api.Models;

namespace SuikerGym.Api.Services;

public interface IProgramService
{
		Task<List<ProgramInfo>> GetAllProgramsAsync();
		Task<ProgramInfo?> GetProgramByIdAsync(string id);
}

public class ProgramService : IProgramService
{
		private readonly ILogger<ProgramService> _logger;

		public ProgramService(ILogger<ProgramService> logger)
		{
				_logger = logger;
		}

		public async Task<List<ProgramInfo>> GetAllProgramsAsync()
		{
				// In production, this data could come from a database
				// For now, returning the static program information
				await Task.CompletedTask;

				return new List<ProgramInfo>
				{
						new ProgramInfo
						{
								Id = "kort-krachtig",
								WrapperTitle = "Kort & Krachtig",
								Title = "Kort & Krachtig",
								Content1 = "1-op-1 training",
								Content2 = "30 minuten",
								Content3 = "1x per week",
								Content4 = "Perfect voor beginnende sporters",
								Content5 = "Gratis intake + proefles",
								Content6 = "Uitgebreide bewegingsanalyse",
								Content7 = "Prijs inclusief btw",
								RibbonText = "€ 30,- per 30 min"
						},
						new ProgramInfo
						{
								Id = "core-business",
								WrapperTitle = "Core Business",
								Title = "Core Business",
								Content1 = "1-op-1 training",
								Content2 = "60 minuten",
								Content3 = "1x per week",
								Content4 = "Focus op een sterkere core",
								Content5 = "Gratis intake + proefles",
								Content6 = "Uitgebreide bewegingsanalyse",
								Content7 = "Prijs inclusief btw",
								RibbonText = "€ 45,- per 60 min"
						},
						new ProgramInfo
						{
								Id = "intensief-effectief",
								WrapperTitle = "Intensief & Effectief",
								Title = "Intensief & Effectief",
								Content1 = "1-op-1 training",
								Content2 = "60 minuten",
								Content3 = "1x per week",
								Content4 = "Specifiek afgestemd op jouw doelen",
								Content5 = "Gratis intake + proefles",
								Content6 = "Uitgebreide bewegingsanalyse",
								Content7 = "Prijs inclusief btw",
								RibbonText = "€ 45,- per 60 min"
						},
						new ProgramInfo
						{
								Id = "duo-training",
								WrapperTitle = "Duo training",
								Title = "Duo training",
								Content1 = "Extra motiverend",
								Content2 = "60 minuten",
								Content3 = "1x per week",
								Content4 = "Samen werken aan een fitter leven",
								Content5 = "Gratis intake + proefles",
								Content6 = "Uitgebreide bewegingsanalyse",
								Content7 = "Prijs inclusief btw",
								RibbonText = "€ 35,- p.p."
						}
				};
		}

		public async Task<ProgramInfo?> GetProgramByIdAsync(string id)
		{
				var programs = await GetAllProgramsAsync();
				return programs.FirstOrDefault(p => p.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
		}
}
