import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import {
    MdDashboard,
    MdPerson3,
    MdShoppingBasket,
    MdHomeRepairService,
    MdOutlineExitToApp,
    MdCarRepair,
    MdSupervisedUserCircle,
    MdPerson4
} from 'react-icons/md'
import Link from 'next/link';



const links = [
    { name: 'dashboard', icon: <MdDashboard />, url: '/dashboard' },
    { name: 'usuários', icon: <MdSupervisedUserCircle />, url: '/users' },
    { name: 'clientes', icon: <MdPerson4 />, url: '/clients' },
    { name: 'Fornecedores', icon: <MdPerson3 />, url: '/suppliers' },
    { name: 'produtos', icon: <MdShoppingBasket />, url: '/products' },
    { name: 'serviços', icon: <MdHomeRepairService />, url: '/services' },
    { name: 'sair', icon: <MdOutlineExitToApp />, url: '/teste' },
]

export default function Sidebar() {

    const router = useRouter();

    let { route } = router;

    const renderLinks = links.map((link, i) => (
        <li key={i}>
            <Link href={link.url} className={route === link.url ? styles.active : ''}>
                <div>{link.icon}</div>
                <span>{link.name}</span>
            </Link>
        </li>
    ))
    return (
        <section className={styles.sidebar}>
            <div className={styles.image}>
                <Image src='/logo-transparente.png' alt='logo do cliente' width='80' height='100' />
            </div>
            <nav className={styles.navigation}>
                <ul>{renderLinks}</ul>
            </nav>
        </section>
    )
}