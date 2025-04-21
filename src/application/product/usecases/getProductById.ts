
import {Transaction} from "@/domains/product/entities/transaction";

const mockProducts: Transaction[] =   [
    {
        id: 1,
        title: "Comida y Bebidas",
        date: '01-25-2025',
        amount: 28.11,
        category: "Restaurantes",
    },
    {
        id: 2,
        title: "Compras",
        date: '02-06-2025',
        amount: 157.64,
        category: "Venta al por menor",
    },
    {
        id: 3,
        title: "Salario",
        date: '03-05-2025',
        amount: 3800.0,
        category: "Ingresos",
        isIncome: true,
    },
];

export const getProductById = async (id: number): Promise<Transaction | undefined> => {
    return mockProducts.find((transaction) => transaction.id === id);
};
