import { defineStore } from 'pinia'
import type {Product} from "@/modules/products/types/products";
import axios from "axios";

interface ProductState {
    products: Product[],
    loading: boolean,
    error: string | null
}

export const useProductStore = defineStore('cards', {
    state: (): ProductState => ({
        products: [],
        loading: false,
        error: null,
    }),
    getters: {
        productList: (state): Product[] =>  state.products,
        isLoading: (state): boolean => state.loading,
        getError: (state): string | null => state.error,
    },
    actions: {
        async fetchProducts() {
            this.loading = true;
            try {
                const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
                this.products = response.data
            } catch (error: any) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
})
