<template>  
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-item-action>
            <v-icon :icon="`mdi:mdi-${item.icon}`" />
          </v-list-item-action>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
          <v-icon icon="mdi:mdi-menu" />
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>mdi-{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-main>
      <router-view></router-view>
    </v-main>
    
  </v-app>

</template>

<script setup>
//import HelloWorld from "./components/HelloWorld";
import { ref } from 'vue';
const appTitle = ref('Admin')
const sidebar = ref(false)
const menuItems = ref([
  { title: 'Home', path: '/home', icon: 'home' },
  { title: 'About', path: '/about', icon: 'book' },
  { title: 'Sign Up', path: '/signup', icon: 'face' },
  { title: 'Sign In', path: '/signin', icon: 'lock' },
  { title: 'Contact', path: '/contact', icon: 'mail' },
]);
</script>


