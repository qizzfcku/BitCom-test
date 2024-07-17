import {defineStore} from "pinia";
import { useProductStore } from '@/widgets/ProductList/model/store';
import type {FiltersState} from "@/features/Filters/model/FiltersState";

export const useFiltersStore = defineStore('filters', {
    state: (): FiltersState => ({
        selectedPriceRange: [null, null],
        selectedRating: null,
        selectedCategories: [],
    }),
    getters: {
        filteredProducts: (state) => {
            const productStore = useProductStore();
            return productStore.productList.filter(product => {
                const categoryMatch = state.selectedCategories.length === 0 || state.selectedCategories.includes(product.category);
                const priceMatch = (!state.selectedPriceRange[0] || product.price >= state.selectedPriceRange[0]) &&
                    (!state.selectedPriceRange[1] || product.price <= state.selectedPriceRange[1]);
                const ratingMatch = !state.selectedRating || product.rating.rate >= state.selectedRating;
                return categoryMatch && priceMatch && ratingMatch;
            });
        }
    },
    actions: {
        setPriceRange(priceRange: [number | null, number | null]) {
            this.selectedPriceRange = priceRange;
        },
        setRating(rating: number | null) {
            this.selectedRating = rating;
        },
        setSelectedCategories(categories: string[]) {
            this.selectedCategories = categories;
        }
    }
});
