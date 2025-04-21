import { ProductRepository } from "@/domains/product/repositories/productRepository";
import { Product } from "@/domains/product/entities/product";

const mockProducts: Product[] = [
    {
        id: "1",
        name: "Cuenta de Ahorro Plus",
        description: "Una cuenta con altos intereses.",
        riskLevel: 2,
        performance: 5,
        benefits: ["Intereses altos", "Flexibilidad"],
    },
    {
        id: "2",
        name: "Fondo de Inversión Moderado",
        description: "Inversión balanceada riesgo-beneficio.",
        riskLevel: 3,
        performance: 7,
        benefits: ["Diversificación", "Rentabilidad sólida"],
    },
];

export const productRepositoryApi: ProductRepository = {
    getProducts: async () => mockProducts,
    getProductById: async (id) => mockProducts.find(product => product.id === id) || null,
};
