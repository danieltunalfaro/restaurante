<script setup lang="ts">
    import { ref } from 'vue'
    import Bebida from './Bebida.vue'
    import Comida from './Comida.vue'
    import Postre from './Postre.vue'

    type CategoriaMenu = 'comida' | 'bebida' | 'postre'

    const emit = defineEmits<{
        agregar: []
    }>()

    const categoriaSeleccionada = ref<CategoriaMenu>('comida')
</script>


<template>
    <div class="tipo-comida">
        <section id="menu" class="menu-seccion">
            <div class="titulo">
            <div>
                <h2>Menú</h2>
                <p>Selecciona el tipo de comida que desea comprar</p>
            </div>
            </div>

            <nav class="botones-menu" aria-label="Categorías del menú">
            <button
                :class="{ activo: categoriaSeleccionada === 'comida' }"
                type="button"
                @click="categoriaSeleccionada = 'comida'"
            >comida</button>
            <button
                :class="{ activo: categoriaSeleccionada === 'bebida' }"
                type="button"
                @click="categoriaSeleccionada = 'bebida'"
            >bebida</button>
            <button
                :class="{ activo: categoriaSeleccionada === 'postre' }"
                type="button"
                @click="categoriaSeleccionada = 'postre'"
            >postre</button>
            </nav>
        </section>

        <section id="productos" class="titulo-productos">
            <h2>Productos</h2>
        </section>

        <section class="card-comida">
            <Comida
                v-if="categoriaSeleccionada === 'comida'"
                @agregar="emit('agregar')"
            />
            <Bebida
                v-else-if="categoriaSeleccionada === 'bebida'"
                @agregar="emit('agregar')"
            />
            <Postre v-else @agregar="emit('agregar')" />
        </section>
    </div>
</template>


<style scoped>
.tipo-comida {
    background: #111;
    border: 1px solid #242424;
    box-sizing: border-box;
    overflow: hidden;
    margin-left: calc((100% - 100vw) / 2);
    width: 100vw;
}

.menu-seccion {
    box-sizing: border-box;
    width: 100%;
    scroll-margin-top: 80px;
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

.titulo-productos h2{
    font-size: 2rem;
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
    gap: 1rem;
}

.botones-menu button {
    background: transparent;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    justify-content: center;
    padding: 10px 12px;
    text-transform: uppercase;
}

.botones-menu button.activo {
    background: white;
    color: #111;
}

.card-comida {
    background: #111;
    box-sizing: border-box;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    padding: 1.5rem;
    width: 100%;
}

#productos {
    scroll-margin-top: 80px;
}
</style>