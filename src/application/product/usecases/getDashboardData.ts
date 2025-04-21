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
                title: "Comida y Bebidas",
                amount: 28.11,
                category: "Restaurantes",
            },
            {
                title: "Compras",
                amount: 157.64,
                category: "Venta al por menor",
            },
            {
                title: "Salario",
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
