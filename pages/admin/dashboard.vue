<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-96 border p-5 shadow-md">
      <h1 class="text-2xl font-semibold">Admin Dashboard</h1>
      <hr class="mt-2" />
      <p>Welcome to the admin dashboard</p>

      <p>ID: {{ user?.id || "Unknown" }}</p>
      <p>User: {{ user?.name || "Unknown" }}</p>
      <p>Email: {{ user?.email || "Unknown" }}</p>
      <p>Role: {{ user?.role || "Unknown" }}</p>

      <hr class="mt-2" />

      <p class="break-words">Token: {{ token || "No token found" }}</p>
      <hr class="mt-2" />
      <button
        @click="logout"
        class="mt-2 text-red-500 px-2 py-1 rounded w-full border hover:bg-red-500 hover:text-white"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      token: null,
    };
  },
  created() {
    // Check if we're in a client environment (not SSR)
    if (process.client) {
      // Retrieve user and token from localStorage when the component is created
      this.user = JSON.parse(localStorage.getItem("user"));
      this.token = localStorage.getItem("token");
    }
  },
  methods: {
    async logout() {
      console.log("Logout");

      // Check if we're in a client environment before accessing localStorage
      if (process.client) {
        // Clear localStorage on logout
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }

      // Go to the login page
      this.$router.push("/login");
    },
  },
};
</script>
