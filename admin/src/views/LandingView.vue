<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="text-center mt-5">
          <h1>Welcome to Awesome App</h1>
        </v-col>
        <v-col cols="12" sm="6" offset-sm="3" class="text-center mt-3">
          <blockquote class="blockquote">
            It's a basic Single Page application <br>
            with Google Firebase authentication
          </blockquote>
        </v-col>
        <v-col cols="12" sm="6" offset-sm="3" class="text-center mt-5">
          <v-btn color="primary" to="/signup">Sign Up</v-btn>
          <v-btn to="/signin">Sign In</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>