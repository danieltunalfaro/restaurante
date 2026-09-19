<script setup lang="ts">
    import { computed, ref } from 'vue'
    import ProductosComida from './ProductosComida.vue'

    const emit = defineEmits<{
        agregar: []
    }>()

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
                    imagen: 'https://cdn7.kiwilimon.com/recetaimagen/13996/960x640/6330.jpg.jpg',
                    nombre: 'Tacos al pastor',
                    ingredientes: 'Carne al pastor, cebolla, cilantro y piña',
                    inventario: 10,
                    precio: 70
                },
                {
                    imagen: 'https://cdn7.kiwilimon.com/brightcove/11269/640x640/11269.jpg.webp',
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
                    imagen: 'https://cdn7.kiwilimon.com/recetaimagen/41491/640x640/56668.jpg.jpg',
                    nombre: 'Huevos rancheros',
                    ingredientes: 'Huevos, tortilla, frijoles y salsa ranchera',
                    inventario: 8,
                    precio: 65
                },
                {
                    imagen: 'https://cdn7.kiwilimon.com/recetaimagen/41884/640x640/58054.jpg.webp',
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
                    imagen: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/e8ad4c6/2147483647/strip/true/crop/672x672+331+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ffa%2F68%2Fb5133d9f4eaf91738f36c7afcf59%2Fhamburguesas-estilo-texas-receta-facil-y-rapida.jpeg',
                    nombre: 'Hamburguesa',
                    ingredientes: 'Carne, lechuga, tomate y queso',
                    inventario: 10,
                    precio: 70
                },
                {
                    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyaZj6JYjjRh1CYWn4zyRuiaF5oAfr6VPXHESGfZGsl5s7MYwwRrwlwM&s=10',
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
            <ProductosComida
                :comidas="comidasSeleccionadas"
                @agregar="emit('agregar')"
            />
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