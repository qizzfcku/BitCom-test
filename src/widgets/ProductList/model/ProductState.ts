import type {Product} from "@/entities/product/model/product";

export interface ProductState {
    products: Product[],
    loading: boolean,
    error: string | null
}
