import { Product } from "../entities/product";

export type ProductRepository = {
    getProducts: () => Promise<Product[]>;
    getProductById: (id: string) => Promise<Product | null>;
};
