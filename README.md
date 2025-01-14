# NextAuth.js with Google OAuth Demo

This demonstration template showcases how to integrate NextAuth.js into a Next.js application, utilizing Google as an authentication provider.

## Overview

This example guides you through the process of:

*   Setting up NextAuth.js.
*   Configuring Google OAuth credentials.
*   Enabling users to sign in using their Google account.
*   Handling user sessions.
*   Protecting routes.

This template serves as a starting point for integrating third-party OAuth services and managing user authentication in a Next.js app using NextAuth.js.

## Setup and Usage

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/NashTech-Labs/nextAuthjs-template.git
    ```

2.  **Install dependencies:**

    ```bash
    npm install or yarn install or pnpm install
    ```

3.  **Configure Google OAuth:**

    *   Go to the [Google Cloud Console](https://console.cloud.google.com/).
    *   Create a new project or select an existing one.
    *   Navigate to "APIs & Services" -> "Credentials".
    *   Create OAuth 2.0 Client IDs.
    *   Set "Authorized JavaScript origins" to `http://localhost:3000` (or your development URL).
    *   Set "Authorized redirect URIs" to `http://localhost:3000/api/auth/callback/google` (or your development URL with the correct callback path).
    *   Create a `.env.local` file in the root of your project and add the following environment variables:

    ```
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    NEXTAUTH_SECRET=<a_random_secret_string> # Generate a strong secret
    NEXTAUTH_URL=http://localhost:3000 # Your application URL
    ```

4.  **Run the development server:**

    ```bash
    npm run dev or yarn dev or pnpm dev
    ```

5.  **Access the application:**

    Open your browser and navigate to `http://localhost:3000`.

## Key Files and Concepts

*   **`auth/authSetup.ts`:** This file contains the NextAuth.js configuration, including the Google provider setup and session handling.
*   **`middleware.ts`:** Used to protect routes that require authentication.
*   **`.env.local`:** Stores sensitive information like API keys and secrets. *Never commit this file to version control.*
*   **`app/my-account/page.tsx`:** An example of a protected page.

## Further Customization

*   Explore other authentication providers supported by NextAuth.js.
*   Customize the UI and styling.
*   Implement more advanced session management and user data handling.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.