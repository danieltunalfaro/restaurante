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

    const emit = defineEmits<{
        agregar: []
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
                <img :src="comida.imagen" :alt="comida.nombre">
            </div>

            <div class="contenido-card">
                <h3>{{ comida.nombre }}</h3>
                <p>{{ comida.ingredientes }}</p>
            </div>

            <div class="detalles-card">
                <span>Disponibles: {{ comida.inventario }}</span>
                <strong>${{ comida.precio }}</strong>
            </div>

            <button
                class="boton-carrito"
                type="button"
                @click="emit('agregar')"
            >
                Agregar al carrito
            </button>

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

.imagen-card img {
    width: 100%;
    height: 140px;
    object-fit: cover;
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

.boton-carrito {
    background: #111;
    border: 1px solid #111;
    color: white;
    cursor: pointer;
    padding: 0.75rem 1rem;
    width: 100%;
}

.boton-carrito:hover {
    background: #333;
}

</style>