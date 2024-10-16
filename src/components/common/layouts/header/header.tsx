'use client';
import styles from './header.module.scss';
import Image from "next/image";

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
                    <a className={styles.header_logo_link} href='/'><Image src="/logo02.png" alt="GOSSIP DOCTOR" width={193} height={18} /></a>
                </h1>
                <nav className={styles.header_list}>
                    <div className={styles.memberElement}>
                        <a className={`${styles.memberElement_btn} ${styles.memberElement_login}`} href="">ログイン</a>
                        <a className={`${styles.memberElement_btn} ${styles.memberElement_entry}`} href="">ユーザー登録</a>
                    </div>
                    <ul className={styles.header_nav}>
                        <li className={styles.header_navItem}><a className={styles.header_navItemLink} href="/reliability/">評価の信頼性</a></li>
                        <li className={styles.header_navItem}><a className={styles.header_navItemLink} href="/evaluation-items/">評価項目について</a></li>
                        <li className={styles.header_navItem}><a className={`${styles.header_navItemLink} ${styles.header_navItemLink_gossip}`} href="/gossip/">噂に飛ぶ</a></li>
                        <li className={styles.header_navItem}>
                            <a className={styles.header_navItemLink} href="/login/">ログイン</a>
                            <a className={styles.header_navItemLink} href="/entry/">会員登録</a>
                        </li>
                    </ul>
                    <div className={styles.headerGossip}>
                        <div className={styles.headerGossip_icon}>
                            <Image src="/icon_gossip_doctor.png" alt='GOSSIP DOCTOR' width={62} height={77} />
                        </div>
                        <div className={styles.headerGossip_btnWrapper}>
                            <a className={styles.headerGossip_btn} href="">噂にとぶ</a>
                            <a className={styles.headerGossip_btn} href="">噂をする</a>
                        </div>
                    </div>
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