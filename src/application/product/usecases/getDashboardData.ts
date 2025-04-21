import { Transaction } from "@/domains/product/entities/transaction";
import {Card} from "@/domains/product/entities/card";


export interface DashboardData {
    savings: number;
    assets: number;
    transactions: Transaction[];
    cards: Card[];
}

export function getDashboardData(): DashboardData {
    return {
        savings: 1561.50,
        assets: 961.50,
        transactions: [
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
        ],
        cards: [
            {
                lastDigits: "6175",
                balance: 47417,
                type: "VISA",
            },
            {
                lastDigits: "9123",
                balance: 2134,
                type: "Mastercard",
            },
        ],
    };
}
