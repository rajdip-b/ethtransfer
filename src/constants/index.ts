import { TransactionType } from '../util/types';
import abi from '../util/ETHTransfer.json';

export const contractAbi = abi.abi;
export const contractAddress = '0x606e4e7e59695d20174ab788062B570d534A0B11';

export const dummyTransactions = [
    {
        message: 'Hey there!',
        account: '0x1234567890',
        amount: '0.0001',
        timestamp: 1620000000,
        txType: TransactionType.CREDIT,
    },
    {
        message: 'Your coffee!',
        account: '0x1234567890',
        amount: '0.01',
        timestamp: 1620000000,
        txType: TransactionType.DEBIT,
    },
    {
        message: 'Your coffee!',
        account: '0x1234567890',
        amount: '0.01',
        timestamp: 1620000000,
        txType: TransactionType.DEBIT,
    },
    {
        message: 'Your coffee!',
        account: '0x1234567890',
        amount: '0.01',
        timestamp: 1620000000,
        txType: TransactionType.DEBIT,
    },
];
