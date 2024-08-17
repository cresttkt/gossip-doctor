'use client';
import styles from './header.module.scss';

export default function Header() {
    const menuToggle = (e: React.BaseSyntheticEvent<MouseEvent, HTMLHeadElement>) => {
        const clickTarget = e.currentTarget;
        const menuElement = clickTarget.previousElementSibling;
        clickTarget.classList.toggle(styles.is_active);
        menuElement?.classList.toggle(styles.is_active);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <h1 className={styles.header_logo}>
                    <a href='/'><img src="" alt="GOSSIP DOCTOR" /></a>
                </h1>
                <nav className={styles.header_list}>
                    <ul className={styles.header_nav}>
                        <li className={styles.header_navItem}><a className={styles.header_navItemLink} href="/reliability/">評価の信頼性</a></li>
                        <li className={styles.header_navItem}><a className={styles.header_navItemLink} href="/evaluation-items/">評価項目について</a></li>
                        <li className={styles.header_navItem}><a className={`${styles.header_navItemLink} ${styles.header_navItemLink_gossip}`} href="/gossip/">噂に飛ぶ</a></li>
                        <li className={styles.header_navItem}>
                            <a className={styles.header_navItemLink} href="/login/">ログイン</a>
                            <a className={styles.header_navItemLink} href="/entry/">会員登録</a>
                        </li>
                        <li className={styles.header_navItem}><a className={styles.header_navItemLink} href="/my-home/"><img src="" alt="アイコン" /></a></li>
                    </ul>
                </nav>
                <div className={styles.burger} onClick={menuToggle}>
                    <span className={`${styles.burger_line} ${styles.burger_top}`}></span>
                    <span className={`${styles.burger_line} ${styles.burger_middle}`}></span>
                    <span className={`${styles.burger_line} ${styles.burger_bottom}`}></span>
                </div>
            </div>
        </header>
    );
}