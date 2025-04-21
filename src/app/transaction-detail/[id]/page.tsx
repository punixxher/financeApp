
import { getProductById } from "@/application/product/usecases/getProductById";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


type Props = {
    params: { id: string };
};


export default async function ProductDetailPage({params}: Props) {
    const {id} = await params
    const transaction = await getProductById(parseInt(id));

    if (!transaction) return notFound();

    return (
        <div className="min-h-screen bg-slate-900 px-4 py-10">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="text-indigo-400 flex items-center text-sm hover:underline mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al Dashboard
                </Link>

                <div className="bg-slate-800 rounded-2xl shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-white mb-2">{transaction.title}</h1>
                    <p className="text-slate-400 mb-6">{transaction.category}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="bg-slate-700 rounded-xl p-4">
                            <p className="text-xs uppercase text-slate-400 mb-1">Valor</p>
                            <p className="text-xl font-semibold text-indigo-400">
                                ${transaction.amount.toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-slate-700 rounded-xl p-4">
                            <p className="text-xs uppercase text-slate-400 mb-1">Fecha de creación</p>
                            <p className="text-md text-white">
                                {new Date(transaction.date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link href="/"  className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer">
                            Ver historial de transacciones
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
