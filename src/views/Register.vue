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
      </v-tabs>  -->
    <div class ="content">
    <v-form ref="form">
      <v-text-field
        v-model="username"
        :error-messages="nameErrors"
        label="Username"
        required
        @input="$v.username.$touch()"
        @blur="$v.username.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Email"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field 
        :type="'password'"
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-text-field
        :type="'password'"
        v-model="confirmPassword"
        :error-messages="confirmPasswordErrors"
        label="Confirm Password"
        required
        @input="$v.confirmPassword.$touch()"
        @blur="$v.confirmPassword.$touch()"
      ></v-text-field>
      <v-btn color="cyan" @click="register" dark>Sign Up</v-btn>
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
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import Navbar from '@/components/Navbar'
import { signup } from '@/api/account.js'
import Home from "@/views/Home"

export default {
  mixins: [validationMixin],

  validations: {
    username: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { sameAsPassword: sameAs('password') }
  },

  data: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),

  components: { Navbar, Home },

  methods: {
    register() {
      const user = { 
        username: this.username,
        email: this.email,
        password: this.password,
        confirm_password: this.confirmPassword
      }
      signup(user)
      }
  },

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Password must be longer than 6 characters')
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.confirmPassword.sameAsPassword && errors.push('Passwords must match')
      return errors
    }
  }
}
</script>

<style>
.theme--light.v-label {
  color: rgb(3, 26, 88) !important;
  font-size: 20px !important;
  font-weight: bold !important;
}

.content {
  background-color: rgba(255, 255, 255, 0.5) !important;
}

</style>

