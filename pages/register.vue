<!-- register user page with name, email password -->

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-96 border p-5 shadow-md">
      <h1 class="text-2xl font-semibold">Register</h1>
      <hr class="mt-2" />
      <form @submit.prevent="register">
        <input
          type="text"
          v-model="name"
          placeholder="Name"
          class="mt-2 w-full p-1 border"
        />
        <br />
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
          Register
        </button>
      </form>
      <hr class="mt-2" />
      <div class="mt-2 flex justify-between">
        <nuxt-link to="/login" class="text-blue-500">Login</nuxt-link>
        <nuxt-link to="/forgot-password" class="text-blue-500">
          Forgot Password
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "~/services/authService";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      // call register service
      const response = await register(this.name, this.email, this.password);

      // log response
      console.log(response);
      // go to login page
      this.$router.push("/login");
    },
  },
};
</script>
