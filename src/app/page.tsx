"use client";

import { useMemo, useState } from "react";
import { getDashboardData } from "@/application/product/usecases/getDashboardData";
import { InvestmentsSection } from "@/components/ui/InvestmentsSection";
import {DashboardHeader} from "@/components/layout/dashboardHeader";
import {DashboardSummary} from "@/components/ui/dashboardSummary";
import {ActivitiesSection} from "@/components/ui/activitiesSection";
import {TransactionsSection} from "@/components/ui/transactionsSection";
import {FinancialProductsSection} from "@/components/ui/financialProductsSection";

const mockFinancialProducts = [
    { id: 1, name: "Cuenta Corriente", type: "Cuenta", category: "Cuentas", interestRate: "0%", risk: "Bajo" },
    { id: 2, name: "Tarjeta VISA Clásica", type: "Tarjeta de crédito", category: "Tarjetas", interestRate: "25%", risk: "Alto" },
    { id: 3, name: "Fondo Moderado", type: "Fondo", category: "Inversiones", interestRate: "7%", risk: "Medio" },
];

const categories = ["Todos", "Cuentas", "Tarjetas", "Inversiones"];

export default function Dashboard() {
    const data = getDashboardData();
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredTransactions = useMemo(() => {
        if (!search.trim()) return data.transactions;
        const term = search.toLowerCase();
        return data.transactions.filter(
            (t) =>
                t.title.toLowerCase().includes(term) ||
                t.category.toLowerCase().includes(term)
        );
    }, [search, data.transactions]);

    const filteredProducts = useMemo(() => {
        return activeCategory === "Todos"
            ? mockFinancialProducts
            : mockFinancialProducts.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-[#0f172a] text-white p-6 font-sans">
            <DashboardHeader />
            <DashboardSummary savings={data.savings} assets={data.assets} />

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <ActivitiesSection />
                <TransactionsSection
                    search={search}
                    setSearch={setSearch}
                    filteredTransactions={filteredTransactions}
                />
            </section>

            <FinancialProductsSection
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                filteredProducts={filteredProducts}
            />

            <InvestmentsSection cards={data.cards} />
        </div>
    );
}
