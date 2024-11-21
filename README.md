## Step-by-Step Installation and Setup for Your Nuxt.js Project

Here is a detailed guideline for setting up your Nuxt.js project based on your requirements and the Vue project you referenced. Nuxt.js provides a streamlined developer experience, including a file-based routing system, built-in data-fetching methods, and server-side rendering (SSR) capabilities.

---

#### 1. **Initialize Nuxt.js Project**

Use the Nuxt CLI to create your project:

```bash
npx nuxi init nuxt-project
cd nuxt-project
npm install
```

- By default, Nuxt uses TypeScript support if `.ts` files are present.
- **File-based routing** is enabled out of the box. Any `.vue` file inside the `pages` folder is automatically a route.

---

#### 2. **Project Structure Overview**

After initialization, ensure your structure aligns with the one in your uploaded screenshot:

```plaintext
nuxt-project/
│
├── assets/                # Global assets like CSS and images
├── components/            # Vue components (e.g., PrimaryButton.vue)
├── locales/               # Localization files (e.g., en.json, fr.json)
├── middleware/            # Middleware for authentication and route protection
├── pages/                 # File-based routing (e.g., login.vue, register.vue)
├── public/                # Public assets (e.g., favicon.ico)
├── services/              # API services (e.g., authService.ts)
├── server/                # Backend logic (e.g., tsconfig.json)
├── nuxt.config.ts         # Nuxt configuration file
└── package.json           # Project dependencies
```

---

#### 3. **Install Required Dependencies**

Install additional dependencies for localization, styling, and linting:

```bash
npm install vue-i18n@next tailwindcss postcss autoprefixer eslint prettier
```

---

#### 4. **Configure Tailwind CSS**

Initialize Tailwind CSS in your project:

```bash
npx tailwindcss init
```

Update `tailwind.config.js` to enable Nuxt integration:

```js
module.exports = {
  content: [
    "./pages/**/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Create a global CSS file under `assets/css/global.css` and import Tailwind CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Include the CSS file in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  css: ["@/assets/css/global.css"],
});
```

---

#### 5. **Set Up Localization (i18n)**

Create localization files under `locales/`:

```plaintext
locales/
├── en.json
└── fr.json
```

Example `en.json`:

```json
{
  "welcome": "Welcome",
  "login": "Login",
  "register": "Register"
}
```

Install `vue-i18n` and configure it:

```bash
npm install @intlify/nuxt3
```

Update `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["@intlify/nuxt3"],
  intlify: {
    localeDir: "locales", // Path to your translation files
    defaultLocale: "en",
    fallbackLocale: "en",
  },
});
```

---

#### 6. **Set Up Fetch for HTTP Requests**

Replace Axios with the native `fetch` API. Create a reusable service in `services/authService.ts`:

```ts
const api_url = "http://localhost:5000/api/v1";

// Register a new user
export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch(`${api_url}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Login user
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${api_url}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
```

---

#### 7. **Implement Route Protection**

Nuxt middleware can handle route protection. Create a file `middleware/auth.ts`:

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem("token");
  if (!token && to.name !== "login") {
    return navigateTo("/login");
  }
});
```

Apply the middleware to protected pages:

```ts
// pages/admin/index.vue
<script setup>
definePageMeta({
  middleware: 'auth',
});
</script>
```

---

#### 8. **Run the Project**

- Development server: `npm run dev`
- Default URL: [http://localhost:3000](http://localhost:3000)

---

#### 9. **Additional Notes**

- **File-Based Routing**: Nuxt automatically creates routes based on the structure of the `pages/` directory. For example:
  - `pages/index.vue` → `/`
  - `pages/login.vue` → `/login`
  - `pages/admin/index.vue` → `/admin`
- **Server-Side Rendering**: Nuxt enables SSR by default. If only a single-page app is needed, update `nuxt.config.ts`:
  ```ts
  export default defineNuxtConfig({
    ssr: false,
  });
  ```

Feel free to ask for further clarification or additional features!
