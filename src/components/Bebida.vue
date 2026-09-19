<script setup lang="ts">
    import { computed, ref } from 'vue'
    import ProductosComida from './ProductosComida.vue'

    const emit = defineEmits<{
        agregar: []
    }>()

    type Bebida = {
        imagen: string
        nombre: string
        ingredientes: string
        inventario: number
        precio: number
    }

    type TipoBebida = {
        id: string
        nombre: string
        bebidas: Bebida[]
    }

    const tiposBebida: TipoBebida[] = [
        {
            id: 'calientes',
            nombre: 'Bebidas calientes',
            bebidas: [
                {
                    imagen: 'https://www.recetasderechupete.com/wp-content/uploads/2023/11/Cafe-americano-portada-1200x828.jpg',
                    nombre: 'Cafe americano',
                    ingredientes: 'Cafe espresso y agua caliente',
                    inventario: 12,
                    precio: 35
                },
                {
                    imagen: 'https://cdn7.kiwilimon.com/recetaimagen/38737/640x640/49817.jpg.webp',
                    nombre: 'Chocolate caliente',
                    ingredientes: 'Leche, chocolate y canela',
                    inventario: 8,
                    precio: 45
                }
            ]
        },
        {
            id: 'frias',
            nombre: 'Bebidas frias',
            bebidas: [
                {
                    imagen: 'https://cdn7.kiwilimon.com/recetaimagen/13761/640x640/6127.jpg.webp',
                    nombre: 'Limonada',
                    ingredientes: 'Limones, agua y azucar',
                    inventario: 10,
                    precio: 40
                },
                {
                    imagen: 'https://cdn7.kiwilimon.com/recetaimagen/3613/960x640/18285.jpg.jpg',
                    nombre: 'Te helado',
                    ingredientes: 'Te negro, limon y hielo',
                    inventario: 7,
                    precio: 42
                }
            ]
        },
        {
            id: 'refrescos',
            nombre: 'Refrescos',
            bebidas: [
                {
                    imagen: 'https://media.cocinavital.mx/2018/06/agua-mineral-con-limon-e1564081307307.jpg',
                    nombre: 'Agua mineral',
                    ingredientes: 'Agua mineral, limon y tajin',
                    inventario: 15,
                    precio: 30
                },
                {
                    imagen: 'https://media.istockphoto.com/id/2198906555/es/foto/refresco-de-cola-con-cubitos-de-hielo-primer-plano-de-la-bebida-gaseosa-de-soda-en-vaso-fr%C3%ADo.jpg?s=612x612&w=0&k=20&c=ftbYuheusq-_RerGnSgZEmQYKRLQEeBSwQg0l0hhCO4=',
                    nombre: 'Coca-Cola',
                    ingredientes: 'Refresco de cola y hielo',
                    inventario: 10,
                    precio: 35
                }
            ]
        }
    ]

    const tipoSeleccionado = ref(tiposBebida[0].id)

    const bebidasSeleccionadas = computed(() => {
        return tiposBebida.find(
            (tipo) => tipo.id === tipoSeleccionado.value
        )?.bebidas ?? []
    })
</script>

<template>
    <div class="catalogo">
        <div class="tipos-comida">
            <button
                v-for="tipo in tiposBebida"
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
                :comidas="bebidasSeleccionadas"
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
