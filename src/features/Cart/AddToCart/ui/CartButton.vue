<script setup lang="ts">
import {computed, ref} from "vue";
import type {Product} from "@/entities/product/model/product";
import {useCartStore} from "@/entities/Cart/model/store";
import { useRouter } from "vue-router";

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()
const router = useRouter()

const inCart = computed(() => {
  return cartStore.cart.some(item => item.id === props.product.id);
});

const onClick = () => {
  if (inCart.value) {
    router.push('/cart');
  } else {
    cartStore.addToCart(props.product);
  }
}
</script>

<template>
  <button
      @click="onClick" class="px-2 py-1 bg-green-500 text-white rounded-lg lg:hover:scale-110 hover:border-slate-300 transition"
      :class="{'bg-yellow-500 text-white border-0' : inCart}"
  >
    {{ inCart ? 'Перейти в корзину' : 'Добавить' }}
  </button>
</template>

<style scoped>

</style>
