<script setup lang="ts">
    const menu = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'menu', label: 'Menu' },
    { id: 'productos', label: 'Productos' }
    ]
</script>


<template>
    <header class="header">
        <div class="titulo">
            <h1>Restaurante x</h1>
        </div>

        <nav class="nav">
            <button v-for="item in menu" :key="item.id" :id="item.id">
                {{ item.label }}
            </button>
        </nav>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background-color: white;
    color: black;
    padding: 10px 20px;
    border-bottom: 1px solid var(--line);
}

.titulo {
    margin: 0;
    display: flex;
    align-items: center;
}

.titulo h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: black;
}

.nav {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.nav button {
    border: 0;
    background: transparent;
    color: black;
    padding: 10px 12px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
}
</style>