import React, { FC, useCallback, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { toast } from 'react-toastify';
import { sendTransaction } from '../util/SmartContract';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/store';

const Form: FC<{ className?: string }> = (props) => {
    const wallet = useSelector((state: StoreState) => state.app.wallet);

    const [formData, setFormData] = useState({
        to: '',
        amount: '',
        message: '',
    });

    const handleChange = (e: HTMLInputElement) => {
        setFormData({
            ...formData,
            [e.name]: e.value,
        });
    };

    const handleSubmit = useCallback(() => {
        const { to, amount, message } = formData;
        console.log(formData);
        if (!wallet) {
            toast.error('Please connect your wallet first!');
            return;
        }
        if (to !== '' && amount !== '' && message !== '') {
            toast.promise(() => sendTransaction(to, message, wallet!, amount), {
                pending: 'Sending transaction...',
                success: 'Transaction sent!',
                error: 'Transaction failed!',
            });
        } else {
            toast.error('Please fill all the fields');
        }
    }, [wallet, formData]);

    return (
        <div className={`${props.className} p-7 flex flex-col gap-10 bg-skyBlue/[4%] rounded-xl`}>
            <div className={'text-2xl font-semibold text-skyBlue'}>Try sending some ETH yet?</div>
            <div className={'flex flex-col gap-5'}>
                <Input name={'to'} value={formData['to']} onChange={handleChange} placeholder={'Recipient Address'} />
                <Input name={'amount'} value={formData['amount']} onChange={handleChange} placeholder={'Amount'} />
                <Input name={'message'} value={formData['message']} onChange={handleChange} placeholder={'Message'} />
            </div>
            <Button onClick={handleSubmit}>Send ETH</Button>
        </div>
    );
};

export default Form;
