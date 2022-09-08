import React, { useCallback, useEffect } from 'react';
import ethereum from '../assets/ethereum.png';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/store';
import { connectWallet, getAccounts } from '../util/SmartContract';
import { appActions } from '../store/app-slice';
import { ContentCopyOutlined } from '@mui/icons-material';
import { toast } from 'react-toastify';

const convertWallet = (wallet: string) => {
    return `${wallet.slice(0, 6)}...${wallet.slice(-4)}`;
};

const copyToClipboard = (wallet: string) => {
    navigator.clipboard.writeText(wallet);
    toast.info('Copied address to clipboard!');
};

const Navbar = () => {
    const dispatch = useDispatch();
    const wallet = useSelector((state: StoreState) => state.app.wallet);

    const handleConnect = useCallback(() => {
        connectWallet().then((wallet) => {
            dispatch(appActions.setWallet(wallet));
        });
    }, []);

    useEffect(() => {
        getAccounts().then((accounts) => {
            if (accounts.length === 0) {
                dispatch(appActions.setWallet(null));
            }
        });
    }, []);

    return (
        <nav className={'py-7 flex md:flex-row flex-col justify-between items-center font-poppins gap-5 '}>
            <div className={'flex gap-5 items-center'}>
                <img src={ethereum} alt={''} className={'w-[40px]'} />
                <div className={'text-2xl font-semibold text-silver'}>ETH Transfer</div>
            </div>
            <div className={'flex gap-10 items-center'}>
                <a href={'https://github.com/rajdip-b/ethtransfer'} className={'text-lg font-medium text-skyBlue'}>
                    Give a star
                </a>
                {wallet ? (
                    <Button onClick={() => copyToClipboard(wallet)}>
                        <div className={'flex gap-2 items-center justify-center text-gray-800'}>
                            <div>{convertWallet(wallet)}</div>
                            <ContentCopyOutlined fontSize={'small'} />
                        </div>
                    </Button>
                ) : (
                    <Button onClick={handleConnect}>Connect Wallet</Button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
