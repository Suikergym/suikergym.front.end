# Breakfast Club - MailerSend Configuration Guide

## 🔐 Security Setup

This guide explains how to configure MailerSend API credentials securely without storing them in source control.

---

## 📋 Prerequisites

1. **MailerSend Account**: Sign up at [mailersend.com](https://www.mailersend.com/)
2. **Verified Domain**: Verify your domain (suikergym.nl) in MailerSend
3. **API Token**: Generate an API token from MailerSend dashboard

---

## 🛠️ Local Development Setup

### Step 1: Initialize User Secrets

Run this command in the project directory:

```powershell
dotnet user-secrets init
```

### Step 2: Set Your MailerSend API Key

```powershell
dotnet user-secrets set "MailerSend:ApiKey" "YOUR_MAILERSEND_API_KEY_HERE"
```

Replace `YOUR_MAILERSEND_API_KEY_HERE` with your actual MailerSend API token.

### Step 3: Verify Secrets

```powershell
dotnet user-secrets list
```

You should see:
```
MailerSend:ApiKey = YOUR_MAILERSEND_API_KEY_HERE
```

### Step 4: Update Email Addresses (if different)

If you want to use different email addresses for development:

```powershell
dotnet user-secrets set "MailerSend:FromEmail" "dev@suikergym.nl"
dotnet user-secrets set "MailerSend:NotificationEmail" "your-dev-email@example.com"
```

---

## ☁️ Azure Deployment Setup

### Option 1: Azure Key Vault (Recommended for Production)

1. **Create Key Vault**:
```bash
az keyvault create --name suikergym-kv --resource-group suikergym-rg --location westeurope
```

2. **Add Secret**:
```bash
az keyvault secret set --vault-name suikergym-kv --name "MailerSend--ApiKey" --value "YOUR_API_KEY"
```

3. **Configure App Service** to use Key Vault:
```bash
az webapp identity assign --name suikergym-api --resource-group suikergym-rg
az keyvault set-policy --name suikergym-kv --object-id <PRINCIPAL_ID> --secret-permissions get list
```

4. **Reference in App Settings**:
```bash
az webapp config appsettings set --name suikergym-api --resource-group suikergym-rg \
  --settings MailerSend__ApiKey="@Microsoft.KeyVault(SecretUri=https://suikergym-kv.vault.azure.net/secrets/MailerSend--ApiKey/)"
```

### Option 2: Azure App Service Application Settings (Simpler)

1. Go to Azure Portal → Your App Service → Configuration → Application Settings

2. Add new settings:
   - Name: `MailerSend__ApiKey`
   - Value: `YOUR_MAILERSEND_API_KEY`

3. Click **Save**

**Note**: Use double underscores `__` for nested configuration in Azure!

---

## 📧 MailerSend Configuration

### Non-Sensitive Settings (in appsettings.json)

These are already configured:

```json
{
  "MailerSend": {
	"FromEmail": "noreply@suikergym.nl",
	"FromName": "Suikergym",
	"NotificationEmail": "info@suikergym.nl"
  }
}
```

### Sensitive Settings (User Secrets / Azure)

```json
{
  "MailerSend": {
	"ApiKey": "YOUR_SECRET_API_KEY_HERE"
  }
}
```

---

## 🧪 Testing

### Test the API Endpoint

```powershell
# Start your API
dotnet run --launch-profile https

# Test from another terminal
Invoke-RestMethod -Uri "https://localhost:7074/api/breakfastclub/register" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body '{"name":"Test User","email":"test@example.com","phone":"+31612345678"}'
```

### Check Logs

Monitor application logs to verify:
1. Email sent to user (confirmation)
2. Email sent to admin (notification)

---

## 📁 File Structure

```
SuikerGym.Api/
├── Configuration/
│   └── MailerSendSettings.cs      # Configuration model
├── Services/
│   └── BreakfastClubService.cs    # Email sending logic
├── Controllers/
│   └── BreakfastClubController.cs # API endpoint
├── Models/
│   └── BreakfastClubRequest.cs    # Request/Response models
├── appsettings.json               # Non-sensitive config
├── appsettings.Development.json   # Dev-specific config
└── Program.cs                     # Service registration
```

---

## 🔍 Troubleshooting

### Issue: "Missing API Key"

**Cause**: API key not set in user secrets or Azure settings.

**Solution**:
```powershell
dotnet user-secrets set "MailerSend:ApiKey" "YOUR_API_KEY"
```

### Issue: "Unauthorized" from MailerSend

**Cause**: Invalid API key or domain not verified.

**Solution**:
1. Verify your API key in MailerSend dashboard
2. Ensure your domain is verified
3. Check your API token permissions

### Issue: Emails not sending

**Cause**: Various reasons.

**Checklist**:
- [ ] API key is valid
- [ ] Domain is verified in MailerSend
- [ ] `FromEmail` matches a verified sender in MailerSend
- [ ] Check application logs for error details
- [ ] Verify MailerSend dashboard for delivery status

---

## 📧 MailerSend Dashboard

Access your MailerSend dashboard to:
1. Monitor email delivery
2. View bounce/spam reports
3. Manage API tokens
4. Configure email templates (optional)

[MailerSend Dashboard](https://app.mailersend.com/)

---

## 🚀 Production Checklist

Before deploying to production:

- [ ] Domain verified in MailerSend
- [ ] API key stored in Azure Key Vault or App Settings
- [ ] Test email sending in staging environment
- [ ] Configure email addresses in production config
- [ ] Set up monitoring/alerts for failed emails
- [ ] Review email templates for branding
- [ ] Test both confirmation and notification emails

---

## 📞 Support

If you need help:
1. Check MailerSend documentation: [docs.mailersend.com](https://www.mailersend.com/help)
2. Review Azure Key Vault docs
3. Check application logs for errors

---

## 🔒 Security Best Practices

✅ **DO**:
- Store API keys in User Secrets (local) or Key Vault (production)
- Use environment-specific configuration
- Rotate API keys regularly
- Monitor email usage

❌ **DON'T**:
- Commit API keys to source control
- Share API keys in chat/email
- Use production API keys in development
- Store sensitive data in appsettings.json

---

## Example: Complete Local Setup

```powershell
# 1. Navigate to project
cd D:\repos\suikergym.front.end\SuikerGym.Api

# 2. Initialize secrets
dotnet user-secrets init

# 3. Set API key
dotnet user-secrets set "MailerSend:ApiKey" "mlsn.abc123xyz..."

# 4. Run the app
dotnet run --launch-profile https

# 5. Test in browser
# Navigate to: https://localhost:7074/breakfast-club
# Fill out the form and submit
```

---

**You're all set!** 🎉
