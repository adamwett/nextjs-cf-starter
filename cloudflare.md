## Deploy your application to Cloudflare Pages

To deploy your site to Pages:

1. Log in to the Cloudflare dashboard 7 and select your account.

2. In Account Home, select Workers & Pages > Create application > Pages >
   Connect to Git.

3. Select the new GitHub repository that you created and, in the Set up builds
   and deployments section, select Next.js (Static HTML Export) as your
   Framework preset. Your selection will provide the following information.

| Configuration option | Value          |
| -------------------- | -------------- |
| Production branch    | main           |
| Build command        | npx next build |
| Build directory      | out            |

After configuring your site, you can begin your first deploy. Cloudflare Pages
will install next, your project dependencies, and build your site before
deploying it.
