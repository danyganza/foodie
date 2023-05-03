<template>
  <div class="container">
    <router-link to="/ClientSignup.vue">SIGNUP INSTEAD</router-link>

    <h1>PLEASE LOGIN</h1>
      <label for="email">Email:</label>
    <input type="text" ref="email_input" placeholder="Email">

      <label for="Password">Password:</label>
    <input type="password" ref="Password_input"  placeholder="password">
    <button @click="login_attempt">LOGIN</button>
  </div>
</template>


<script>
export default {
}
</script>


<style scoped>
div {
    display: grid;
    place-items: center;
}

</style>
