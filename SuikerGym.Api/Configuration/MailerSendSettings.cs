namespace SuikerGym.Api.Configuration;

/// <summary>
/// MailerSend configuration settings
/// Store these in appsettings.json (non-sensitive) and user secrets / Azure Key Vault (sensitive)
/// </summary>
public class MailerSendSettings
{
		public const string SectionName = "MailerSend";

		/// <summary>
		/// MailerSend API Key - MUST be stored in user secrets or Key Vault, NOT in appsettings.json
		/// </summary>
		public string ApiKey { get; set; } = string.Empty;

		/// <summary>
		/// Verified sender email address in MailerSend
		/// </summary>
		public string FromEmail { get; set; } = string.Empty;

		/// <summary>
		/// Sender name
		/// </summary>
		public string FromName { get; set; } = string.Empty;

		/// <summary>
		/// Email to receive notifications about new signups (CC)
		/// </summary>
		public string NotificationEmail { get; set; } = string.Empty;

		/// <summary>
		/// Template ID for confirmation email (optional - if using MailerSend templates)
		/// </summary>
		public string ConfirmationTemplateId { get; set; } = string.Empty;
}
