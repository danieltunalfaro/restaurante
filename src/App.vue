<script setup lang="ts">
    import { ref } from 'vue'
    import HeaderComponent from './components/HeaderComponent.vue'
    import TipoComida from './components/TipoComida.vue'
  import fondoInicio from './assets/fondoinicio.jpeg'

    const cantidadCarrito = ref(0)
</script>

<template>
  <HeaderComponent
    :cantidad-carrito="cantidadCarrito"
    @vaciar="cantidadCarrito = 0"
  />

  <main>
    <section id="inicio" class="section">
      <div class="inicio" :style="{ backgroundImage: `url(${fondoInicio})` }">
        <h2>Bienvenido a UADY Food</h2>
      </div>
    </section>

    <section class="section">
      <TipoComida @agregar="cantidadCarrito++" />
    </section>
      
  </main>

  <footer>
    <div>
      <strong>UADY Food</strong>
      <h3>Contactos</h3>
      <ul>
        <li>Tel: 9999-98-28-28</li>
        <li>Correo: uadyfood@gmail.com</li>
        <li>Facebook: UADY Food</li>
        <li>Instagram: UADY Food</li>
      </ul>
    </div>
  </footer>
  
</template>

<style scoped>

body {
    margin: 0;
    padding: 0;
}

main {
  padding-top: 0;
}

.section {
  box-sizing: border-box;
  margin-left: calc((100% - 100vw) / 2);
  width: 100vw;
}

.inicio {
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
    height: 100vh;
    justify-content: center;
    border-bottom: 1px solid var(--line);
  position: relative;
}

.inicio::before {
  background: rgba(0, 0, 0, 0.35);
  content: '';
  inset: 0;
  position: absolute;
}

.inicio h2 {
  color: white;
  font-size: clamp(2.5rem, 6vw, 5rem);
  margin: 0;
  position: relative;
  text-align: center;
}

footer {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
  border-top: 1px solid #292929;
  color: black;
  font-size: 14px;
  background-color: white;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  margin-left: calc((100% - 100vw) / 2);
  width: 100vw;
}

footer strong {
  color: black;
  font-size: 22px;
}

footer h3 {
  font-size: 17px;
  margin: 8px 0;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer li {
  margin-top: 5px;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>