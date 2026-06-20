namespace SuikerGym.Api.Models;

/// <summary>
/// Breakfast Club registration request
/// </summary>
public class BreakfastClubRequest
{
		public string Name { get; set; } = string.Empty;
		public string Email { get; set; } = string.Empty;
		public string Phone { get; set; } = string.Empty;
}

/// <summary>
/// Breakfast Club registration response
/// </summary>
public class BreakfastClubResponse
{
		public bool Success { get; set; }
		public string Message { get; set; } = string.Empty;
}
