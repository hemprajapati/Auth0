<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect,logout, user, isAuthenticated } = useAuth0();
    const login= ($event) => {
    $event.preventDefault();
        loginWithRedirect();
      }
      const logOut =() =>{
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/dashboard" v-if="isAuthenticated">Dashboard</RouterLink>
      </nav>
      <div class="authentication">
        <button v-if="!isAuthenticated" @click="login">Login</button>
        <button v-if="isAuthenticated" @click="logOut">Logout</button>
      </div>
    </div>

  </header>
  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
}
.wrapper{
  display: flex;

}
.authentication{
  display: flex;
  justify-content: center;
  gap: 1em;

}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  font-size: 0.9rem;
  display: flex;
  gap: 0.8rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}


</style>
