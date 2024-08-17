'use client';
import { ReactNode } from 'react';
import styles from './wrapper.module.scss';

type Props = {
    children: ReactNode
};

export default function Wrapper({children}: Props) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_inner}>{children}</div>
        </div>
    );
}