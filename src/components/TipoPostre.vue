<script setup lang="ts">
    import Postre from './Postre.vue'
</script>

<template>
    <section class="titulo">
        <div>
            <h2>Postres</h2>
            <p>Selecciona el tipo de postre que desea comprar</p>
        </div>
    </section>

    <section class="card-comida">
        <Postre />
    </section>
</template>

<style scoped>
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

.card-comida {
    background: black;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    padding: 1.5rem;
}
</style>
