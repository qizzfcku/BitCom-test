export interface FiltersState {
    selectedPriceRange: [number | null, number | null];
    selectedRating: number | null;
    selectedCategories: string[];
}
