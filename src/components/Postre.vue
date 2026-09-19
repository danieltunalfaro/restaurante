<script setup lang="ts">
    import { computed, ref } from 'vue'
    import ProductosComida from './ProductosComida.vue'

    const emit = defineEmits<{
        agregar: []
    }>()

    type Postre = {
        imagen: string
        nombre: string
        ingredientes: string
        inventario: number
        precio: number
    }

    type TipoPostre = {
        id: string
        nombre: string
        postres: Postre[]
    }

    const tiposPostre: TipoPostre[] = [
        {
            id: 'pasteles',
            nombre: 'Pasteles',
            postres: [
                {
                    imagen: 'https://cdn7.kiwilimon.com/recetaimagen/40557/640x640/54114.jpg.jpg',
                    nombre: 'Pastel de chocolate',
                    ingredientes: 'Bizcocho de chocolate y ganache',
                    inventario: 6,
                    precio: 75
                },
                {
                    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyUig1kAiTXP3J8xBM8nnHPEZutV3URGGjy1Kg9qnG4uEDq_ulsIdxuU&s=10',
                    nombre: 'Cheesecake',
                    ingredientes: 'Queso crema, galleta y frutos rojos',
                    inventario: 5,
                    precio: 80
                }
            ]
        },
        {
            id: 'helados',
            nombre: 'Helados',
            postres: [
                {
                    imagen: 'https://comedera.com/wp-content/uploads/sites/9/2022/05/Helado-de-vainilla-sin-azucar.jpg?w=500&h=500&crop=1',
                    nombre: 'Helado de vainilla',
                    ingredientes: 'Helado de vainilla y chocolate',
                    inventario: 10,
                    precio: 45
                },
                {
                    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6mSjUPlG4qrOSpCC8lGtO-YxVqC5H49pjv0C5k7TmWi7oHDvNXH7MhA2&s=10',
                    nombre: 'Helado de fresa',
                    ingredientes: 'Helado de fresa y crema batida',
                    inventario: 8,
                    precio: 45
                }
            ]
        },
        {
            id: 'frutas',
            nombre: 'Frutas',
            postres: [
                {
                    imagen: 'https://cdn7.kiwilimon.com/brightcove/11165/640x640/11165.jpg.webp',
                    nombre: 'Fresas con crema',
                    ingredientes: 'Fresas frescas, crema y azucar',
                    inventario: 7,
                    precio: 55
                },
                {
                    imagen: 'https://libbys.es/wordpress/wp-content/uploads/2015/06/ensalada-de-frutas.jpg',
                    nombre: 'Ensalada de frutas',
                    ingredientes: 'Manzana, platano, melon y miel',
                    inventario: 6,
                    precio: 50
                }
            ]
        }
    ]

    const tipoSeleccionado = ref(tiposPostre[0].id)

    const postresSeleccionados = computed(() => {
        return tiposPostre.find(
            (tipo) => tipo.id === tipoSeleccionado.value
        )?.postres ?? []
    })
</script>

<template>
    <div class="catalogo">
        <div class="tipos-comida">
            <button
                v-for="tipo in tiposPostre"
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
                :comidas="postresSeleccionados"
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
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
    width: 100%;
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
