<script setup lang="ts">
    import { nextTick } from 'vue'
    import { useRouter } from 'vue-router'

    defineProps<{
        cantidadCarrito: number
    }>()

    const emit = defineEmits<{
        vaciar: []
    }>()

    const menu = [
        { id: 'inicio', label: 'Inicio', section: 'inicio' },
        { id: 'menu', label: 'Menu', section: 'menu' },
        { id: 'productos', label: 'Productos', section: 'productos' }
    ]

    const router = useRouter()

    const irASeccion = async (item: typeof menu[number]) => {
        await router.push({ name: item.id })
        await nextTick()

        document.getElementById(item.section)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
</script>


<template>
    <header class="header">
        <div class="titulo">
            <h1>UADY Food</h1>
        </div>

        <nav class="nav">
            <button
                v-for="item in menu"
                :key="item.id"
                :id="item.id"
                type="button"
                @click="irASeccion(item)"
            >
                {{ item.label }}
            </button>
        </nav>

        <div class="carrito">
            Carrito: {{ cantidadCarrito }}
            <button type="button" @click="emit('vaciar')">
                Vaciar carrito
            </button>
        </div>
    </header>
</template>

<style scoped>
.header {
    box-sizing: border-box;
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
    z-index: 10;
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

.carrito {
    align-items: center;
    color: black;
    display: flex;
    font-size: 12px;
    font-weight: 700;
    gap: 0.75rem;
    white-space: nowrap;
}

.carrito button {
    background: transparent;
    border: 1px solid #111;
    color: #111;
    cursor: pointer;
    font-size: 12px;
    padding: 8px 10px;
}

.carrito button:hover {
    background: #111;
    color: white;
}
</style>