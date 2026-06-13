# SuikerGym - Quick Start Guide

## Overview
Your SuikerGym application now has a fully integrated frontend (React) and backend (ASP.NET Core 9) with the following features:

### ✅ What Has Been Implemented

1. **Backend API Controllers:**
   - `ContactController` - Handles contact form submissions
   - `ProgramsController` - Provides training program information
   - `HealthController` - API health checks

2. **Models:**
   - `ContactRequest` - Contact form data model
   - `ContactResponse` - API response model
   - `ProgramInfo` - Training program model

3. **Services:**
   - `ContactService` - Business logic for contact forms
   - `ProgramService` - Business logic for programs

4. **Frontend Integration:**
   - `apiService.js` - API client for backend communication
   - `usePrograms.js` - React hook for fetching programs
   - Updated `Contact.js` - Now uses backend API
   - Optional `TarievenWithApi.js` - Dynamic program loading

5. **Configuration:**
   - CORS setup for development
   - Environment variables for API URL
   - Health check endpoints

## How to Run

### Option 1: Development Mode (Separate Frontend & Backend)

**Terminal 1 - Backend:**
```bash
cd D:\repos\suikergym.front.end\SuikerGym.Api
dotnet run
```
Backend will be available at: `https://localhost:7000`

**Terminal 2 - Frontend:**
```bash
cd D:\repos\suikergym.front.end\SuikerGym.Api\ClientApp
npm install
npm start
```
Frontend will be available at: `http://localhost:3000`

### Option 2: Integrated Mode (Backend serves Frontend)

```bash
cd D:\repos\suikergym.front.end\SuikerGym.Api
dotnet run
```

The backend will proxy requests to the React dev server automatically.

## Testing the API

### Using Visual Studio
1. Open `SuikerGym.Api.http` file
2. Click "Send Request" on any endpoint
3. View responses inline

### Using Browser
- Health Check: https://localhost:7000/api/health
- All Programs: https://localhost:7000/api/programs
- Specific Program: https://localhost:7000/api/programs/kort-krachtig

### Using the Frontend
1. Navigate to http://localhost:3000/contact
2. Fill out the contact form
3. Submit - it will now use your backend API!

## Key Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Overall API health |
| `/api/contact` | POST | Submit contact form |
| `/api/contact/health` | GET | Contact service health |
| `/api/programs` | GET | Get all programs |
| `/api/programs/{id}` | GET | Get specific program |
| `/api/programs/health` | GET | Programs service health |

## File Structure

```
SuikerGym.Api/
├── Controllers/
│   ├── ContactController.cs      # Contact form endpoint
│   ├── ProgramsController.cs     # Programs endpoint
│   └── HealthController.cs       # Health checks
├── Models/
│   ├── ContactRequest.cs         # Contact form model
│   ├── ContactResponse.cs        # API response model
│   └── ProgramInfo.cs           # Program data model
├── Services/
│   ├── ContactService.cs         # Contact business logic
│   └── ProgramService.cs        # Programs business logic
├── ClientApp/
│   ├── src/
│   │   ├── services/
│   │   │   └── apiService.js    # API client
│   │   ├── hooks/
│   │   │   └── usePrograms.js   # Programs React hook
│   │   └── pages/
│   │       ├── Contact.js       # Updated with API integration
│   │       └── TarievenWithApi.js # Optional API version
│   ├── .env.development         # Development API URL
│   └── .env.production          # Production API URL
├── Program.cs                   # App configuration
├── appsettings.json            # Production settings
└── appsettings.Development.json # Development settings
```

## What You Can Do Now

### 1. Test Contact Form Submission
Visit http://localhost:3000/contact and submit the form. Check your backend console for logs.

### 2. View Programs from API
You can swap `Tarieven.js` with `TarievenWithApi.js` in `App.js` to fetch programs dynamically:

```javascript
// In App.js, change:
import Tarieven from "./pages/Tarieven";
// to:
import Tarieven from "./pages/TarievenWithApi";
```

### 3. Test API Endpoints
Use the `SuikerGym.Api.http` file to test all endpoints directly in Visual Studio.

### 4. Check API Health
Visit https://localhost:7000/api/health to see if all services are running.

## Next Steps - Enhancements

### Email Notifications
Add email sending to `ContactService.cs`:
```bash
dotnet add package MailKit
# or
dotnet add package SendGrid
```

### Database Integration
Add Entity Framework Core:
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

### Production Deployment
1. Update CORS in `Program.cs` with your production domain
2. Set production API URL in `.env.production`
3. Configure production database/email settings
4. Deploy to Azure/hosting provider

## Troubleshooting

### "API not responding"
- Ensure backend is running on https://localhost:7000
- Check `REACT_APP_API_URL` in `.env.development`

### "CORS error in browser"
- Verify frontend URL is allowed in `Program.cs` CORS policy
- Restart backend after CORS changes

### "Contact form not submitting"
- Open browser console (F12) to see errors
- Check backend logs for detailed error messages
- Verify all required fields are filled

## Current Status

✅ Backend API fully functional
✅ Controllers created and tested
✅ Frontend integration complete
✅ Contact form connected to backend
✅ CORS configured for development
✅ Environment variables set up
✅ Health checks implemented
✅ API test file created

## Production Considerations

Before going to production:
- [ ] Add email service (SendGrid, SMTP, etc.)
- [ ] Add database for storing contact requests
- [ ] Implement rate limiting on contact form
- [ ] Add input validation and sanitization
- [ ] Configure production CORS with actual domain
- [ ] Set up SSL certificate
- [ ] Add logging/monitoring (Application Insights, Serilog)
- [ ] Add error tracking (e.g., Sentry)
- [ ] Configure production environment variables
- [ ] Add authentication if needed

---

**You're all set!** Your frontend and backend are now connected. The contact form submissions will go to your backend API instead of the external service. You can now extend this with database storage, email notifications, and more features as needed.
