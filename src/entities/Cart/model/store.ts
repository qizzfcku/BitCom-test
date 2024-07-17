import {defineStore} from "pinia";
import type {Product} from "@/entities/product/model/product";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [] as Product[],
    }),
    actions: {
        addToCart(product : Product) {
            if (!this.cart.some(item => item.id === product.id)) {
                this.cart.push(product);
                this.saveCart();
            }
        },
        removeFromCart(productId : number) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCart();
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        loadCart() {
            this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        }
    },
    getters: {
        cartItems: state => state.cart,
        totalPrice: (state) => Math.round(state.cart.reduce((total, item) => total + item.price, 0) * 100) / 100
    }
});
