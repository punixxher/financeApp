import { ProductRepository } from "@/domains/product/repositories/productRepository";

export const getProductsList = (repo: ProductRepository) => async () => {
    return await repo.getProducts();
};
