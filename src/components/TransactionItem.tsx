import React, { FC } from 'react';
import { Transaction } from '../util/types';
import { ContentCopyOutlined } from '@mui/icons-material';

const convertWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(address.length - 4, address.length)}`;
};

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};

const getDateFromTimestamp = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-IN', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
};

const TransactionItem: FC<{ className?: string; transaction: Transaction }> = (props) => {
    return (
        <div
            className={`${props.className} flex justify-between h-[180px] rounded-l-xl bg-prussianBlue overflow-hidden`}
        >
            <div className={'font-sen flex flex-col justify-between w-[70%] p-3'}>
                <div className={'flex flex-col gap-2'}>
                    <div className={'font-poppins text-lg font-semibold text-silver'}>{props.transaction.message}</div>
                    <button
                        onClick={() => copyToClipboard(props.transaction.account)}
                        className={'flex gap-3 items-center group'}
                    >
                        <div className={'text-skyBlue/70 text-lg'}>
                            {convertWalletAddress(props.transaction.account)}
                        </div>
                        <div className={'opacity-0 group-hover:opacity-100 transition-all ease-out duration-300'}>
                            <ContentCopyOutlined className={'text-silver/70'} fontSize={'small'} />
                        </div>
                    </button>
                </div>
                <div className={'text-silver/60'}>{getDateFromTimestamp(props.transaction.timestamp)}</div>
            </div>
            <div
                className={
                    'font-bold text-xl font-k2d text-silver relative w-[100%] translate-x-[65%] text-right translate-y-[80%] z-20'
                }
            >
                {props.transaction.amount} ETH
            </div>
            <div
                className={`${
                    props.transaction.txType === 1 ? 'bg-green' : 'bg-skyBlue/[85%]'
                } w-[30%] rotate-[30deg] h-[300px] flex items-end justify-end p-3 w-[300px] translate-x-5 -translate-y-5`}
            ></div>
        </div>
    );
};

export default TransactionItem;
