namespace SuikerGym.Api.Configuration;

/// <summary>
/// Application configuration settings
/// </summary>
public class ApiSettings
{
		public const string SectionName = "ApiSettings";

		/// <summary>
		/// Base URL for the API
		/// </summary>
		public string BaseUrl { get; set; } = string.Empty;

		/// <summary>
		/// Contact email address for notifications
		/// </summary>
		public string ContactEmail { get; set; } = string.Empty;
}

// To use this in Program.cs, add:
// builder.Services.Configure<ApiSettings>(
//     builder.Configuration.GetSection(ApiSettings.SectionName)
// );
//
// Then inject IOptions<ApiSettings> into services:
// public class ContactService
// {
//     private readonly ApiSettings _settings;
//     
//     public ContactService(IOptions<ApiSettings> settings)
//     {
//         _settings = settings.Value;
//     }
// }
