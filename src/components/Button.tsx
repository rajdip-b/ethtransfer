import React, { FC, ReactNode } from 'react';

const Button: FC<{ onClick?: () => void; children: ReactNode; className?: string; disabled?: boolean }> = (props) => {
    return (
        <button
            className={`rounded-xl font-poppins font-semibold text-gray-800 shadow-lg transition-all ease-out duration-300 shadow-transparent bg-skyBlue hover:shadow-skyBlue/50 px-4 py-3 ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {};

export default Button;
