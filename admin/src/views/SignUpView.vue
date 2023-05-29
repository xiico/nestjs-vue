<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="text-center mt-5">
          <h1>Sign Up</h1>
        </v-col>
        <v-col cols="12" sm="6" offset-sm="3" mt-3>
          <form>
            <v-row>
              <v-col>
                <v-text-field
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center mt-5">
                <v-btn color="primary" type="submit">Sign Up</v-btn>
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  