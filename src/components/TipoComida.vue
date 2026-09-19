<script setup lang="ts">
    import Comida from './Comida.vue'
</script>


<template>
    
        <section class=titulo>
            <div>
                <h2>Menú</h2>
                <p>Selecciona el tipo de comida que desea comprar</p>
            </div>
        </section>

        <section class="card-comida">
            <Comida />
        </section>
    
</template>


<style scoped>
.tipo-comida {
    background: #111;
    border: 1px solid #242424;
    overflow: hidden;
}

.titulo {
    align-items: center;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;
}

.titulo h2 {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    text-align: center;
}

.titulo p {
    color: #fff;
    margin: 0 0 1rem;
    text-align: center;
}

.botones-menu {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    flex-wrap: wrap;
}

.botones-menu button {
    border: 1px solid white;
    color: white;
    justify-content: center;
    padding: 10px 12px;
    background: transparent;
    cursor: pointer;
    text-transform: uppercase;
}

.card-comida {
    background: black;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    padding: 1.5rem;
}
</style>