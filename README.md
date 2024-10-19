Please visit [PurpleCat-GPT-app](https://purplecat-gpt-app.vercel.app/) for more details.

## Skills or Tools Used:

- **Next.js:** Used for server-side rendering and routing.
- **React:** Used for building the frontend of the website.
- **TypeScript:** Added for type safety and improving code quality.
- **Tailwind CSS**: Used for styling and designing the user interface components.
- **DaisyUI**: Used for additional UI components and utilities in Tailwind CSS.
- **Prisma**: Used for database operations and management.
- **OpenAI**: Utilized for AI-powered features and capabilities.
- **Tanstack/React-Query**: Integrated for efficient data fetching and state management.
- **Clerk**: Utilized for authentication and user management features.
- **GitHub Actions:** Utilized for automating CI/CD workflows.
- **vitest:** Utilized for unit testing.

### npm daisyui

```
npm i -D daisyui@latest

```

### next-themes

```
npm i next-themes

```

### react-hot-toast

```
npm install react-hot-toast

npm install react-icons

npm install axios

```

### npm clerk

```
npm install @clerk/nextjs

import { auth, currentUser } from '@clerk/nextjs/server'
  const { userId } = auth()
  const user = await currentUser()
   if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }

'use client'
import { useAuth } from '@clerk/nextjs'
  const { isLoaded, userId, sessionId, getToken } = useAuth()
    if (!isLoaded || !userId) {
    return null
  }
```

### @tanstack/react-query

```

npm i @tanstack/react-query
npm i -D @tanstack/eslint-plugin-query
npm i @tanstack/react-query-devtools

```

### npm openai

[docs](https://platform.openai.com/docs/overview)

```
npm install openai

import OpenAI from 'openai';

```

### npm prisma

```
npm install prisma --save-dev
npm install @prisma/client
npx prisma init

npx prisma generate

```

### Set the DATABASE_URL

```

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

```

### vitest

```
npm install vitest @testing-library/react @testing-library/jest-dom --save-dev
npm install vitest @types/vitest --save-dev

```