import React, { FC } from 'react';

interface ICustomButton {
    title: string;
}

export const CustomButton: FC<ICustomButton> = ({
    title
}) => {
    return (
        <button className='button'>{title}</button>
    );
};
