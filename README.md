This is a minimal implementation of a web frontend, integrated with Amazon Cognito hosted UI using [Amazon Cognito Auth SDK for JavaScript](https://github.com/aws/amazon-cognito-auth-js). [AWS Amplify](https://github.com/aws/aws-amplify) provides such integration as well but has a learning curve on its own.

The application shows the currently signed in user, otherwise automatically redirects to sign in.
Once the user is signed in, the application generates a unique client ID for the user.
Then it calls the API every second with client ID in 'id' query parameter and Amazon Cognito ID token in Authorization header.
That flow mimics application that needs to periodically refresh data for a logged in user.

For now, to make the code fully functional, you need to:
- Follow the steps 1 and 2 (optionally 3 to make it easier on testing – no need to sign up a user) in Amazon Cognito documentation for [Getting Started with User Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-cognito-user-pools.html).
-	Create a web API with authorization based on Amazon Cognito ID token (e.g. API Gateway with Lambda as backend using the built-in Amazon Cognito authorizer).
- Update js/config.js with your values.
- Deploy the application.
