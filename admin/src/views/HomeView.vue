<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import NavbarDefault from "../components/layout/navbars/NavbarDefault.vue";
</script>

<template>  
  <NavbarDefault :sticky="true" />
  <main>
    <TheWelcome />
  </main>
</template>
