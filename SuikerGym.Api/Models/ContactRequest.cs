namespace SuikerGym.Api.Models;

public class ContactRequest
{
		public string Goal { get; set; } = string.Empty;
		public string FirstName { get; set; } = string.Empty;
		public string LastName { get; set; } = string.Empty;
		public string Email { get; set; } = string.Empty;
		public string Phone { get; set; } = string.Empty;
		public string Message { get; set; } = string.Empty;
}
