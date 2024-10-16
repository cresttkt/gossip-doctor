'use crient';
import Image from "next/image";
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_logo}>
                <Image src="/logo02.png" alt="GOSSIP DOCTOR" width={193} height={18} />
            </div>
            <div className={styles.footer_copy}>
                Copyright&nbsp;Since&nbsp;2024&nbsp;@SMA&nbsp;Inc.&nbsp;All&nbsp;rights&nbsp;reserved.
            </div>
        </footer>
    );
}