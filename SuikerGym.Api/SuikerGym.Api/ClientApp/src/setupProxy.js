const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy /api requests from the React dev server (port 3000) to the ASP.NET backend.
// This is only used when running `npm start` directly (not through Visual Studio).
// When running through Visual Studio the browser hits ASP.NET directly, so relative
// /api paths already work without a proxy.
//
// Target uses the IIS Express HTTPS port by default. When using the Kestrel 'https'
// launch profile, set ASPNETCORE_URLS=https://localhost:7074 or override here.
const ASPNET_PORT = process.env.ASPNETCORE_HTTPS_PORT || 44391;

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `https://localhost:${ASPNET_PORT}`,
      changeOrigin: true,
      secure: false, // allow self-signed dev certificate
    })
  );
};
