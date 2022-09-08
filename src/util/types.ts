export interface Transaction {
    account: string;
    message: string;
    amount: string;
    timestamp: number;
    txType: TransactionType;
}

export enum TransactionType {
    DEBIT,
    CREDIT,
}
