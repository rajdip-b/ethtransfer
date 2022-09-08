import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../constants';
import { Transaction } from './types';

const getMetamask = () => {
    // @ts-ignore
    const { ethereum } = window;
    if (!ethereum) return alert('Please install Metamask');
    return ethereum;
};

export const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(getMetamask());
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractAbi, signer);
};

export const getAccounts = async (): Promise<string[]> => {
    return getMetamask()
        .request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
            return accounts;
        })
        .catch((err: any) => {
            console.log(err);
            return [];
        });
};

export const connectWallet = async (): Promise<string> => {
    const ethereum = getMetamask();
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
};

export const getTransactions = async (): Promise<Transaction[]> => {
    const contract = getEthereumContract();
    return await contract.getTransactions();
};

export const sendTransaction = async (to: string, message: string, from: string, amount: string): Promise<void> => {
    await getMetamask().request({
        method: 'eth_sendTransaction',
        params: [
            {
                from,
                to,
                gas: '0x76c0',
                value: ethers.utils.parseEther(amount)._hex,
            },
        ],
    });
    const contract = getEthereumContract();
    const tx = await contract.sendTransaction(to, message);
    await tx.wait();
};
