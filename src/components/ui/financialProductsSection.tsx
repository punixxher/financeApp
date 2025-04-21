type Product = {
    id: number;
    name: string;
    type: string;
    category: string;
    interestRate: string;
    risk: string;
};

type Props = {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (cat: string) => void;
    filteredProducts: Product[];
};

export const FinancialProductsSection = ({ categories, activeCategory, setActiveCategory, filteredProducts }: Props) => (
    <section className="bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="font-semibold text-slate-300 mb-4 text-lg">Productos Financieros</h3>
        <div className="flex gap-4 overflow-x-auto mb-6">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                        activeCategory === cat
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-600 text-slate-300"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
                <div key={product.id} className="bg-slate-700 p-4 rounded-xl shadow hover:shadow-xl transition">
                    <h4 className="text-lg font-bold text-indigo-400">{product.name}</h4>
                    <p className="text-sm text-slate-300 mb-2">{product.type}</p>
                    <ul className="text-sm text-slate-200 space-y-1">
                        <li><strong>Categoría:</strong> {product.category}</li>
                        <li><strong>Tasa de interés:</strong> {product.interestRate}</li>
                        <li><strong>Riesgo:</strong> {product.risk}</li>
                    </ul>
                </div>
            ))}
        </div>
    </section>
);
