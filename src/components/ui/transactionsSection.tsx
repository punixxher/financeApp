import { CreditCard } from "lucide-react";
import { Transactions } from "@/components/ui/transactions";
import { Transaction } from "@/domains/product/entities/transaction";

type Props = {
    search: string;
    setSearch: (v: string) => void;
    filteredTransactions: Transaction[];
};

export const TransactionsSection = ({ search, setSearch, filteredTransactions }: Props) => (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 md:col-span-2" aria-label="Sección de Transacciones">
        <h3 className="font-semibold text-slate-300 mb-4 text-lg flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-emerald-400" /> Transacciones
        </h3>

        <input
            type="text"
            placeholder="Buscar transacciones..."
            className="w-full mb-4 p-2 rounded-lg bg-slate-700 text-white placeholder-slate-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <div className="space-y-3">
            {filteredTransactions.map((item, idx) => (
                <Transactions key={idx}  {...item} />
            ))}
        </div>
    </div>
);
