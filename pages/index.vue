<script setup>
const { setLocale } = useI18n();
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-96 border p-5 shadow-md">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold">{{ $t("home") }}</h1>
        <select @change="setLocale($event.target.value)">
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
      <hr class="mt-2" />
      <p class="my-2">
        {{ $t("welcome") }}
      </p>
      <nuxt-link to="/login" class="text-blue-500">Login</nuxt-link>
    </div>
  </div>
</template>
