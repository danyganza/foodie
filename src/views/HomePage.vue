<template>
  <div>
    <page-header></page-header>
    <h1>HOME PAGE</h1>

    <div>
    <nav>
      <h3>Client siction</h3>
      <router-link to="/"></router-link>
      <router-link to="/ClientLogin.vue">Log in</router-link>
      <router-link to="/ClientSignup.vue">Sign Up</router-link>
    </nav>
  </div>
  </div>
    
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>

<style scoped>
</style>