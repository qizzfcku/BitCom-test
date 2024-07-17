import { defineStore } from 'pinia'
import axios from "axios";

import type {ProductState} from "@/widgets/ProductList/model/ProductState";
import type {Product} from "@/entities/product/model/product";

export const useProductStore = defineStore('product', {
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
