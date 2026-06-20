# 🚀 Breakfast Club - Quick Start Guide

## ⚡ Setup (5 minutes)

### 1. Set MailerSend API Key (LOCAL)
```powershell
cd D:\repos\suikergym.front.end\SuikerGym.Api
dotnet user-secrets set "MailerSend:ApiKey" "YOUR_MAILERSEND_API_KEY"
```

### 2. Set MailerSend API Key (AZURE)
Azure Portal → App Service → Configuration → Application Settings:
```
Name: MailerSend__ApiKey
Value: YOUR_MAILERSEND_API_KEY
```
**Click Save!**

---

## 🧪 Test Locally

### Start Backend
```powershell
dotnet run --launch-profile https
```

### Start Frontend (Optional - for hot reload)
```powershell
cd ClientApp
npm start
```

### Access Page
- Production Build: `https://localhost:7074/breakfast-club`
- Dev Server: `http://localhost:3000/breakfast-club`

### Test Form
1. Fill out: Name, Email, Phone
2. Submit
3. Check console logs for email status
4. User receives confirmation email
5. Admin receives notification email

---

## 📧 Email Flow

### When user submits form:

1. **Validation**: Check all fields
2. **Confirmation Email** → User
   - Subject: "Welkom bij de Suikergym Breakfast Club!"
   - Content: Welcome message with details
3. **Notification Email** → Admin (info@suikergym.nl)
   - Subject: "🎉 Nieuwe Breakfast Club Aanmelding"
   - Content: User details for follow-up

---

## 🔧 Configuration

### Email Addresses (appsettings.json)
```json
{
  "MailerSend": {
	"FromEmail": "noreply@suikergym.nl",
	"FromName": "Suikergym",
	"NotificationEmail": "info@suikergym.nl"
  }
}
```

### API Key (User Secrets - NOT in code!)
```powershell
dotnet user-secrets set "MailerSend:ApiKey" "mlsn.xxx..."
```

---

## 📁 New Files Created

### Backend
- `Models/BreakfastClubRequest.cs` - Request/Response models
- `Configuration/MailerSendSettings.cs` - Email config
- `Services/BreakfastClubService.cs` - Email sending logic
- `Controllers/BreakfastClubController.cs` - API endpoint

### Frontend
- `pages/BreakfastClub.js` - Landing page component
- `styles/BreakfastClub.css` - Page styling

### Config
- `appsettings.json` - Non-sensitive settings
- `MAILERSEND_SETUP.md` - Full setup guide

---

## 🔍 API Endpoints

### Register Interest
```
POST /api/breakfastclub/register
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+31612345678"
}
```

### Health Check
```
GET /api/breakfastclub/health
```

---

## ✅ Deployment Checklist

### Before deploying:
- [ ] MailerSend API key set in Azure App Settings
- [ ] Domain verified in MailerSend
- [ ] Test email sending works locally
- [ ] Update `NotificationEmail` if needed
- [ ] Build React app: `cd ClientApp && npm run build`
- [ ] Deploy to Azure

---

## 🐛 Common Issues

### "Missing API Key"
```powershell
dotnet user-secrets set "MailerSend:ApiKey" "YOUR_KEY"
```

### "Unauthorized" from MailerSend
- Check API key is valid
- Verify domain in MailerSend dashboard

### Emails not arriving
- Check spam folder
- Verify sender email is verified in MailerSend
- Check MailerSend dashboard for delivery status

---

## 📊 Monitor in Production

1. **MailerSend Dashboard**: [app.mailersend.com](https://app.mailersend.com/)
   - View email delivery
   - Check bounce rates
   - Monitor API usage

2. **Application Logs**: Azure Portal → Log Stream
   - Watch for errors
   - Verify successful sends

---

## 🎨 Customize Emails

Edit in `Services/BreakfastClubService.cs`:
- `BuildConfirmationEmailHtml()` - User confirmation
- `BuildNotificationEmailHtml()` - Admin notification

---

**Need help?** See `MAILERSEND_SETUP.md` for detailed instructions!
