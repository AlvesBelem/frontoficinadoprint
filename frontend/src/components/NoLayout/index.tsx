import Sidebar from '@/components/Sidebar';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

interface ChildrenProps {
    children: ReactNode;
}
export default function NoLayout({ children }: ChildrenProps) {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}