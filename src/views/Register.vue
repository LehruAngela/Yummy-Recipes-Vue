<template>
  <v-container>
  <navbar/>
  <v-layout justify-space-between>
    <v-flex xs7 offset-xs3>
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
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        :error-messages="confirmPasswordErrors"
        label="Confirm Password"
        required
        @input="$v.confirmPassword.$touch()"
        @blur="$v.confirmPassword.$touch()"
      ></v-text-field>
      <v-btn @click="register">Sign Up</v-btn>
    </v-form>
    <h4>Already have an account?</h4>
    <router-link to="/login">Login</router-link>
    <footer>
      <p className="copyright text-muted small footer">Copyright © Gela 2019.</p>
    </footer>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'
import Navbar from '@/components/Navbar'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { signup } from '@/api/account.js'

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

  components: { Navbar },

  methods: {
    register() {
      if(!this.$v.$invalid) {
        const user = { 
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
          }
        console.log('user-af', user)
        signup(user)
      }
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
.theme--light.v-label{
  color: rgb(3, 26, 88) !important;
  font-size: 20px !important;
  font-weight: bold !important;
}
</style>

