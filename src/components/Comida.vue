<script setup lang="ts">
    import { computed, ref } from 'vue'
    import ProductosComida from './ProductosComida.vue'

    type Comida = {
        imagen: string
        nombre: string
        ingredientes: string
        inventario: number
        precio: number
    }

    type TipoComida = {
        id: string
        nombre: string
        comidas: Comida[]
    }

    const tiposComida: TipoComida[] = [
        {
            id: 'mexicana',
            nombre: 'Comida mexicana',
            comidas: [
                {
                    imagen: 'imagen',
                    nombre: 'Tacos al pastor',
                    ingredientes: 'Carne al pastor, cebolla, cilantro y piña',
                    inventario: 10,
                    precio: 70
                },
                {
                    imagen: 'imagen',
                    nombre: 'Enchiladas',
                    ingredientes: 'Tortillas, pollo, queso y salsa roja',
                    inventario: 6,
                    precio: 85
                }
            ]
        },
        {
            id: 'desayunos',
            nombre: 'Desayunos',
            comidas: [
                {
                    imagen: 'imagen',
                    nombre: 'Huevos rancheros',
                    ingredientes: 'Huevos, tortilla, frijoles y salsa ranchera',
                    inventario: 8,
                    precio: 65
                },
                {
                    imagen: 'imagen',
                    nombre: 'Hot cakes',
                    ingredientes: 'Hot cakes, fruta y miel',
                    inventario: 4,
                    precio: 55
                }
            ]
        },
        {
            id: 'rapida',
            nombre: 'Comida rápida',
            comidas: [
                {
                    imagen: 'imagen',
                    nombre: 'Hamburguesa',
                    ingredientes: 'Carne, lechuga, tomate y queso',
                    inventario: 10,
                    precio: 70
                },
                {
                    imagen: 'imagen',
                    nombre: 'Hot dog',
                    ingredientes: 'Salchicha, ketchup y mostaza',
                    inventario: 3,
                    precio: 40
                }
            ]
        }
    ]

    const tipoSeleccionado = ref(tiposComida[0].id)

    const comidasSeleccionadas = computed(() => {
        return tiposComida.find(
            (tipo) => tipo.id === tipoSeleccionado.value
        )?.comidas ?? []
    })
</script>

<template>
    <div class="catalogo">

        <div class="tipos-comida">
            <button
                v-for="tipo in tiposComida"
                :key="tipo.id"
                :class="{ activo: tipoSeleccionado === tipo.id }"
                type="button"
                @click="tipoSeleccionado = tipo.id"
            >
                {{ tipo.nombre }}
            </button>
        </div>

        <div class="productos">
            <ProductosComida :comidas="comidasSeleccionadas" />
        </div>

    </div>
</template>

<style scoped>

.catalogo {
    width: 100%;
}

.tipos-comida {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: 2rem;
}

.tipos-comida button {
    background: transparent;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    padding: 12px 20px;
    text-transform: uppercase;
}

.tipos-comida button.activo {
    background: white;
    color: #111;
}

.productos {
    width: 100%;
}

</style>