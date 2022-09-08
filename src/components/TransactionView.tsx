import React, { FC, useEffect } from 'react';
import TransactionItem from './TransactionItem';
import { getTransactions } from '../util/SmartContract';
import { Transaction } from '../util/types';

const TransactionView: FC<{ className?: string }> = (props) => {
    const [transactions, setTransactions] = React.useState<Transaction[]>([]);

    const fetchTransactions = () => {
        getTransactions().then((data: any[]) => {
            console.log(Number(data[0].amount._hex));
            setTransactions(
                data.map((t: any[]) => ({
                    account: t[0],
                    message: t[1],
                    amount: Number(t[2]._hex).toString(),
                    timestamp: Number(t[3]._hex),
                    txType: t[4],
                })),
            );
        });
    };

    useEffect(() => {
        fetchTransactions();
        setInterval(fetchTransactions, 10000);
    }, []);

    return (
        <div className={`${props.className} flex flex-col gap-14 pb-10`}>
            <div className={'font-k2d text-4xl font-bold text-silver'}>Your transactions</div>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'}>
                {transactions.map((transaction, index) => (
                    <TransactionItem key={index} transaction={transaction} />
                ))}
                {transactions.length === 0 && (
                    <div className={'text-2xl font-semibold font-k2d text-silver/60 col-span-4'}>
                        No transactions so far. We will check for transactions every 10 seconds!
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransactionView;
