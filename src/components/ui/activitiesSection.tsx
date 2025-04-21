import { HelpCircle, ShieldCheck, User } from "lucide-react";

export const ActivitiesSection = () => (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6" aria-label="Sección de Actividades">
        <h3 className="font-semibold text-slate-300 mb-4 text-lg flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-400" /> Actividades
        </h3>
        <ul className="space-y-3">
            <li className="flex items-center gap-2 text-emerald-300 hover:underline cursor-pointer">
                <User className="w-4 h-4" aria-hidden="true" /> Cuenta
            </li>
            <li className="flex items-center gap-2 text-emerald-300 hover:underline cursor-pointer">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" /> Privacidad
            </li>
            <li className="flex items-center gap-2 text-emerald-300 hover:underline cursor-pointer">
                <HelpCircle className="w-4 h-4" aria-hidden="true" /> Ayuda
            </li>
        </ul>
    </div>
);
