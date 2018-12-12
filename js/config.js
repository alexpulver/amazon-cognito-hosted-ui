var API_URL = 'https://api.example.com/';
var COGNITO_AUTH_DATA = {
  ClientId: 'YOUR_AMAZON_COGNITO_CLIENT_ID',
  // Using Amazon Cognito custom domain below, default domain is also fine.
  AppWebDomain: 'auth.example.com',
  TokenScopesArray: ['phone', 'email', 'openid', 'aws.cognito.signin.user.admin', 'profile'],
  RedirectUriSignIn: 'https://example.com',
  RedirectUriSignOut: 'https://example.com'
};

/*
To test Amazon Cognito hosted UI:
https://auth.example.com/login?response_type=token&client_id=YOUR_AMAZON_COGNITO_CLIENT_ID&redirect_uri=https://localhost
*/
