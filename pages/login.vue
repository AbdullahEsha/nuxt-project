<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-96 border p-5 shadow-md">
      <h1 class="text-2xl font-semibold">Login</h1>
      <hr class="mt-2" />
      <form @submit.prevent="login">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="mt-2 w-full p-1 border"
        />
        <br />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="mt-2 w-full p-1 border"
        />
        <br />
        <button
          type="submit"
          class="mt-2 bg-blue-500 text-white px-2 py-1 rounded w-full"
        >
          Login
        </button>
      </form>
      <hr class="mt-2" />
      <div class="mt-2 flex justify-between">
        <nuxt-link to="/register" class="text-blue-500">Register</nuxt-link>
        <nuxt-link to="/forgot-password" class="text-blue-500">
          Forgot Password
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "~/services/authService";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await login(this.email, this.password);
        console.log(response);

        // redirect to dashboard
        this.$router.push("/admin/dashboard");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
