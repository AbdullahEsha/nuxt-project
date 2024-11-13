<!-- forgot-password page -->
<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-96 border p-5 shadow-md">
      <h1 class="text-2xl font-semibold">Forgot Password</h1>
      <hr class="mt-2" />
      <p>Enter your email to reset your password</p>
      <form @submit.prevent="forgotPassword">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="mt-2 w-full p-1 border"
        />
        <br />
        <button
          type="submit"
          class="mt-2 bg-blue-500 text-white px-2 py-1 rounded w-full"
        >
          Send Reset Link
        </button>
      </form>
      <hr class="mt-2" />
      <div class="mt-2 flex justify-between">
        <nuxt-link to="/login" class="text-blue-500">Login</nuxt-link>
        <nuxt-link to="/register" class="text-blue-500">Register</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    forgotPassword() {
      console.log("Email: ", this.email);
    },
  },
};
</script>
