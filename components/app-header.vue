<template>
  <header>
      <NuxtLink class="logo" to="/">
          <h1>Mar Morán</h1>
          <p>Soprano</p>
      </NuxtLink>        
      <menu>
          <li v-for="item in menuItems.es">
            <NuxtLink :to="item.url">
              {{ item.label }}
            </NuxtLink>
          </li>
      </menu>
  </header>
</template>
<style scoped>
  header {
      display: flex;
      width: 100%;
      height: 64px;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  menu {
      display: flex;
      min-width: 300px;
      justify-content: space-between;
      align-items: center;
      margin: 0;
  }
  li {
      list-style: none;
      padding: 0 1rem;
  }
  .logo{
      display: flex;
      align-items: flex-end;
      min-width: 268px;
  }
  .logo h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 32px;
      font-weight: 400;
  }
  .logo p{
      padding: 5px 8px;
      font-size: 19px;
      font-weight: 300;
  }
  @media (max-width: 750px) {
    header{
      flex-wrap: wrap;
      height: 125px;
      padding: 10px;
      box-sizing: border-box;
    }
    menu {
      margin: 0 auto;
      padding: 0;
    }
    li{
      padding: 0;
      font-size: 12px;
    }
  }
</style>
   
  <script setup>

  const menuItems= {
    es: [
      {
        label: "Biografía",
        url: "/biography"
      },
      {
        label: "Galeria",
        url: "/gallery"
      },
      {
        label: "Eventos",
        url: "/events"
      },
      {
        label: "Noticias",
        url: "/news"
      },
      {
        label: "Contacto",
        url: "/contact"
      }
    ],
    en: []

  };
  

  </script>