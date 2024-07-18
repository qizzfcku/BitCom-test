<script setup lang="ts">
import {computed, onMounted, reactive, watch} from "vue";
import { useCartStore } from "@/entities/Cart/model/store";
import { useUserStore } from "@/entities/user/model/store";

import SideBar from "@/widgets/SideBar";
import CartList from "@/widgets/CartList";
import OrderForm from "@/widgets/OrderForm";

const cartStore = useCartStore();
const userStore = useUserStore();

const userForm = reactive({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  comment: '',
});

const cartItems = computed(() => cartStore.cartItems);
const totalPrice = computed(() => cartStore.totalPrice);

const removeFromCart = (productId: number) => {
  cartStore.removeFromCart(productId);
};

const submitForm = () => {
  if (userForm.phoneNumber.length < 10) {
    alert("Телефонный номер должен быть минимум 10 цифр");
    return;
  }
  alert(userForm.firstName + ", Заказ успешно оформлен");
  cartStore.deleteCart()
  console.log(userForm)
}

onMounted(() => {
  cartStore.loadCart();
  userStore.loadUser();
  console.log(userStore.getUserData)

});

const userData = userStore.getUserData?.userDetails;
if (userData) {
  userForm.firstName = userData.firstName;
  userForm.lastName = userData.lastName;
  userForm.phoneNumber = userData.phoneNumber;
  userForm.address = userData.address;
}

watch(
    () => userStore.getUserData?.userDetails,
    (newUserData) => {
      if (newUserData) {
        userForm.firstName = newUserData.firstName;
        userForm.lastName = newUserData.lastName;
        userForm.phoneNumber = newUserData.phoneNumber;
        userForm.address = newUserData.address;
      }
    },
    { immediate: true }
);
</script>

<template>
  <div class="flex flex-col lg:flex-row h-full">
    <div class="basis-5/6 lg:basis-4/6 p-3 md:p-10">
      <CartList :items="cartItems" @remove="removeFromCart" />
    </div>
    <side-bar class="sticky top-[75px] h-[calc(100vh-75px)] basis-1/12 lg:basis-2/6 border-[#303030] border-t md:border-t-0 md:border-l">
      <OrderForm @submit="submitForm" :userForm="userForm" :totalPrice="totalPrice"/>
    </side-bar>
  </div>
</template>

<style scoped>
</style>
