<script setup lang="ts">
import {useCartStore} from "@/entities/Cart/model/store";
import {computed, onMounted} from "vue";

import SideBar from "@/widgets/SideBar";
import CartList from "@/widgets/CartList";

const cartStore = useCartStore()

const cartItems =  computed(() => cartStore.cartItems);
const totalPrice = computed(() => cartStore.totalPrice)

const removeFromCart = (productId : number) => {
  cartStore.removeFromCart(productId);
};

onMounted(() => {
  cartStore.loadCart()
})
</script>

<template>
  <div class="flex h-full">
    <div class="basis-4/5 p-10">
      <CartList :items="cartItems" @remove="removeFromCart"/>
    </div>
    <side-bar class="sticky top-[75px] h-[calc(100vh-75px)] basis-2/6 border-[#303030] border-l">
      <div class="flex flex-col gap-3 px-5">
        <div>
          <h1 class="text-xl">Информация: </h1>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex gap-3">
            <input placeholder="Имя" class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg hover:border-slate-400"/>
            <input placeholder="Фамилия" class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg hover:border-slate-400"/>
          </div>
          <input placeholder="Телефон" class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg hover:border-slate-400"/>
          <input placeholder="Адрес" class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg hover:border-slate-400"/>
          <textarea placeholder="Комментарий" class="h-32 px-3 resize-none rounded-sm border border-slate-300 outline-blue-500 text-lg hover:border-slate-400"/>
        </div>
      </div>
      <div class="flex flex-col gap-5 mt-10">
        <div class="px-5 py-2">
          <h1 class="text-xl ">Общая сумма: </h1>
          <div class="w-full flex justify-end text-lg text-red-700">
            <span>{{ totalPrice }} $</span>
          </div>
        </div>
        <div class="w-full px-5">
          <button class="w-full py-2 bg-green-500 text-white rounded-xl hover:bg-green-400 shadow-xl text-xl">Заказать</button>
        </div>
      </div>
    </side-bar>
  </div>
</template>

<style scoped>

</style>
