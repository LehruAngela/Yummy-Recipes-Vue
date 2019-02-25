<template>
<div>
  <v-container>
  <navbar/>
  <v-layout justify-space-between>
    <v-flex xs8 offset-xs2>
      <home/>
      <!-- <v-tabs fixed-tabs 
      color="cyan"
      dark
      slider-color="yellow">
    <v-tab to="/">SignUp</v-tab>
    <v-tab to="/login">Login</v-tab>
      </v-tabs> -->
    <div class="content">
    <v-form ref="form">
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Email"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()">
      </v-text-field>
      <v-text-field
        :type="'password'"
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()">
      </v-text-field>
      <v-btn color="cyan" @click="login" dark>Login</v-btn>
    </v-form>
    </div>
    </v-flex>
  </v-layout>
  </v-container>
  <v-footer dark class="grey darken-3 justify-center">
    Copyright &copy; <strong> Gela 2019</strong>
  </v-footer>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import Navbar from "@/components/Navbar";
import { signin } from "@/api/account.js";
import Home from "@/views/Home"

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required }
  },

  data: () => ({
    email: "",
    password: ""
  }),

  components: { Navbar, Home },

  methods: {
    async login() {
      const user = {
        email: this.email,
        password: this.password
      };
      try{
        await signin(user);
        this.$router.push({ path: '/categories'});
      } catch(e){
        console.log(e)
      }
    }
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
  }
};
</script>

<style>
.theme--light.v-label {
  color: rgb(3, 26, 88) !important;
  font-size: 20px !important;
  font-weight: bold !important;
}

.content {
  background-color: rgba(255, 255, 255, 0.5) !important;
  padding: 2em;
}

.v-footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>

