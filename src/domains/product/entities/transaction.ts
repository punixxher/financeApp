export interface Transaction {
    id: number;
    title: string;
    amount: number;
    date: string;
    category: string;
    isIncome?: boolean;
}
