type Card = {
    lastDigits: string;
    balance: number;
    type: string;
};

export const InvestmentsSection = ({ cards }: { cards: Card[] }) => (
    <section className="bg-slate-800 rounded-2xl shadow-lg p-6">
        <h3 className="font-semibold text-slate-300 mb-4">Inversiones</h3>
        <p className="text-slate-400 mb-4">Consejos y recomendaciones de inversión</p>

        <div className="bg-indigo-500/20 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2 text-white">¿Qué es una Billetera Digital?</h4>
            <button className="text-emerald-300 text-sm font-semibold hover:underline">SABER MÁS</button>
        </div>

        <div className="mt-6">
            <h4 className="font-medium mb-4 text-white">Mis Tarjetas</h4>
            <div className="grid md:grid-cols-2 gap-4">
                {cards.map((card, idx) => (
                    <div key={idx} className="bg-indigo-700 text-white p-5 rounded-2xl shadow-lg">
                        <p className="text-sm tracking-widest opacity-80">•••• {card.lastDigits}</p>
                        <p className="text-3xl font-bold mt-2">${card.balance.toLocaleString()}</p>
                        <p className="text-sm mt-1">{card.type}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
