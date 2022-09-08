import React, { FC } from 'react';

const Greetings: FC<{ className?: string }> = (props) => {
    return (
        <div className={`${props.className} font-k2d text-silver flex flex-col gap-7`}>
            <div className={'font-extrabold text-4xl'}>
                A <span className={'text-skyBlue'}>crypto</span> transaction app.
            </div>
            <div className={'font-semibold text-3xl text-silver/90'}>
                Send funds in <span className={'text-skyBlue'}>Ethereum</span> to your{' '}
                <span className={'text-skyBlue'}>friends and family</span> anywhere in the world!
            </div>
        </div>
    );
};

export default Greetings;
