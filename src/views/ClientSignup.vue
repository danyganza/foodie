<template>
  <div>
    <router-link to="/ClientLogin.vue">Login INSTEAD</router-link>

    <h1>Sign Up</h1>
    <form>
      <div>
        <label for="first_name">First Name:</label>
        <input type="text" ref="firstName_input" placeholder="First Name"/>
      </div>
      <div>
        <label for="last_name">Last Name:</label>
        <input type="text" ref="lastName_input" placeholder="Last Name"/>
      </div>
      <div>
        <div>
          <label for="username">Usename:</label>
          <input type="text" ref="username_input" placeholder="Username" />
        </div>
        <label for="Profile Picture">profile picture:</label>
        <input type="text" ref="image_input" placeholder="Profile Picture" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" ref="email_input" placeholder="Email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="text" ref="password_input" placeholder="password" />
      </div>
    </form>
    <button @click="signup_attempt">SIGNUP</button>

    <h3>{{ message }}</h3>
  </div>

</template>

<script>

import axios from 'axios';
import cookies from 'vue-cookies';
export default {
    data(){
        return {
            message: undefined
        }
    },
  methods: {
    signup_attempt: function (){
        axios.request ({
            url : 'https://foodie.bymoen.codes/api/client',
            headers: {
                'x-api-key': 'uY2qPEM2EXZSWNuhSu7W'
            },
            method: 'POST',
            data: {
        email: this.$refs[`email_input`].value,
        password: this.$refs[`password_input`].value,
       username: this.$refs[`username_input`].value,
         first_name: this.$refs[`firstName_input`].value,
          last_name: this.$refs[`lastName_input`].value,
          image_url: this.$refs[`image_input`].value,
            }
        }). then((response) => {
            cookies.set(`token`, response[`data`][`token`])
        })
     
    }
  }
};
</script>

<style scoped>
div {
  display: grid;
  place-items: center;
}
</style>
