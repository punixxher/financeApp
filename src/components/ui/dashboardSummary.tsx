export const DashboardSummary = ({ savings, assets }: { savings: number; assets: number }) => (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-slate-300 mb-2">Ahorros</h3>
            <p className="text-4xl font-bold text-indigo-400">${savings}</p>
        </div>
        <div className="bg-slate-800 rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-slate-300 mb-2">Activos</h3>
            <p className="text-4xl font-bold text-indigo-400">${assets}</p>
        </div>
    </section>
);
