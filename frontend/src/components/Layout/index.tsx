import Sidebar from '@/components/Sidebar';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

interface ChildrenProps {
    children: ReactNode;
}
export default function Layout({ children }: ChildrenProps) {
    return (
        <>
            <Sidebar />
            <main className={styles.main}>
                <div className={styles.content}>{children}</div>
            </main>
        </>
    )
}