## Template used
```bash
npx create-next-app@latest cloudflare-next --typescript --tailwind --eslint --app --src-dir --use-npm
```

## Run your project
```bash
npm run dev
```

## Create a new Cloudflare Pages project

```bash
npm i -g wrangler
```
```bash
wrangler login
```
```bash
wrangler pages project create
```

## Deploy your application to Cloudflare Pages

Lint your project first
```bash
next lint --fix
```

Then build it
```bash
npm run build
```

- Make sure 'distDir' is set in next.config.ts
- Acutally idk bc its going out as /out so use whatever folder is made after you build

```bash
wrangler pages deploy out
```
