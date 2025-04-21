import { ProductRepository } from "@/domains/product/repositories/productRepository";

export const getProductById = (repo: ProductRepository) => async (id: string) => {
    return await repo.getProductById(id);
};
