<script setup lang="ts">
    import HeaderComponent from './components/HeaderComponent.vue'
    import TipoComida from './components/TipoComida.vue'
</script>

<template>
  <HeaderComponent />

  <main>
    <section id="inicio" class="section">
      <div class="inicio">
        <h aref="inicio">Inicio</h> 
      </div>
    </section>

    <section id="menu" class="section">
        <TipoComida />
    </section>
      
  </main>

  <footer>
    <div>
      <strong>Restaurante X</strong>
      <p>Contactos</p>
      <p>No. Tel: 00000000</p>
      <p>Correo: res@gmail.com</p>
    </div>
  </footer>
  
</template>

<style scoped>

.body {
    margin: 0;
    padding: 0;
}

.inicio {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-bottom: 1px solid var(--line);
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 8vw;
  border-top: 1px solid #292929;
  color: black;
  font-size: 10px;
  background-color: white;
  flex-direction: column;
  gap: 15px;
  text-align: center;
}

footer strong {
  color: black;
  font-size: 20px;
}

footer p {
  margin-top: 3px;
}

</style>