"use client";

import Link from "next/link";
import { Transaction } from "@/domains/product/entities/transaction";

type Props = Transaction & { id: number }; // Asegúrate de incluir `id`

export const Transactions = ({ id, amount, date, title }: Props) => {
    return (
        <div className="bg-slate-700 p-4 rounded-xl text-white shadow-md flex justify-between items-center">
            <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-slate-400 text-sm">{new Date(date).toLocaleDateString()}</p>
            </div>
            <div className="text-right">
                <p className="text-emerald-400 font-bold">${amount.toLocaleString()}</p>
                <Link
                    href={`/transaction-detail/${id}`}
                    className="text-sm text-indigo-400 hover:underline mt-1 inline-block"
                >
                    Ver detalle
                </Link>
            </div>
        </div>
    );
};
