import React, { FC } from 'react';

const Input: FC<{
    value?: string;
    onChange?: (e: HTMLInputElement) => void;
    placeholder?: string;
    className?: string;
    name?: string;
}> = (props) => {
    return (
        <input
            name={props.name}
            className={`${props.className} bg-transparent px-4 py-3 rounded-xl border-2 border-silver/50 outline-none font-poppins font-semibold text-silver/90 placeholder-silver/50 focus:border-skyBlue transition-all ease-out duration-300 shadow-md hover:bg-skyBlue/[7%] shadow-transparent`}
            value={props.value}
            onChange={(e) => props.onChange && props.onChange(e.target)}
            placeholder={props.placeholder}
        />
    );
};

export default Input;
