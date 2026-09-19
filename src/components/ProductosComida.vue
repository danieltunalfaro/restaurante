<script setup lang="ts">

    type Comida = {
        imagen: string
        nombre: string
        ingredientes: string
        inventario: number
        precio: number
    }

    defineProps<{
        comidas: Comida[]
    }>()

</script>

<template>

    <div class="lista-productos">

        <article
            v-for="comida in comidas"
            :key="comida.nombre"
            class="comida-card"
        >

            <div class="imagen-card">
                {{ comida.imagen }}
            </div>

            <div class="contenido-card">
                <h3>{{ comida.nombre }}</h3>
                <p>{{ comida.ingredientes }}</p>
            </div>

            <div class="detalles-card">
                <span>Disponibles: {{ comida.inventario }}</span>
                <strong>${{ comida.precio }}</strong>
            </div>

        </article>

    </div>

</template>

<style scoped>

.lista-productos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
}

.comida-card {
    background: white;
    border: 1px solid #242424;
    box-sizing: border-box;
    color: #111;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 350px;
    padding: 1rem;
}

.imagen-card {
    align-items: center;
    background: #e5e5e5;
    display: flex;
    justify-content: center;
    min-height: 140px;
}

.contenido-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.contenido-card h3,
.contenido-card p {
    margin: 0;
}

.detalles-card {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
}

</style>