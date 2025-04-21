import React from 'react';

interface CardProductProps {
    title: string;
    amount: number;
    category: string;
    isIncome?: boolean;
}

export const CardProduct = ({ title, amount, category, isIncome = false }: CardProductProps) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-3">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-500">{category}</p>
                </div>
                <span className={`text-lg font-semibold ${isIncome ? 'text-green-500' : 'text-red-500'}`}>
          {isIncome ? '+' : '-'}{amount.toFixed(2)}
        </span>
            </div>
        </div>
    );
};
