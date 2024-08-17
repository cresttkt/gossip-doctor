'use client';
import { useState } from 'react';
import styles from './mainContents.module.scss';
import TopContent01 from './topContent01/topContent01';
import TopContent02 from './topContent02/topContent02';
import TopContent03 from './topContent03/topContent03';

export default function MainContents() {

    const [tabIndex, setTabIndex] = useState<string | undefined>('0');

    const tabChange = (e: React.BaseSyntheticEvent<MouseEvent, HTMLHeadElement>) => {
        const clickedTabIndex = e.currentTarget.dataset.index;
        setTabIndex(clickedTabIndex);
    };

    return (
        <div className={styles.main}>
            <ul className={styles.tab}>
                <li className={`${styles.tab_item} ${styles.tab_item01}`} onClick={tabChange} data-index='0'>
                    <span className={styles.tab_item_ribon}>ようこそ</span>
                    <div className={styles.tab_item_title}>G.Dとは</div>
                </li>
                <li className={`${styles.tab_item} ${styles.tab_item02}`} onClick={tabChange} data-index='1'>
                    <span className={styles.tab_item_ribon}>噂に飛ぶ</span>
                    <div className={styles.tab_item_title}>G.Dの<span className={styles.tab_item_title_color}>使い方ガイド</span></div>
                </li>
                <li className={`${styles.tab_item} ${styles.tab_item03}`} onClick={tabChange} data-index='2'>
                    <span className={styles.tab_item_ribon}>登録無料</span>
                    <div className={styles.tab_item_title}>G.Dの<span className={styles.tab_item_title_color}>会員限定サービス</span></div>
                </li>
            </ul>
            {tabIndex === '0' && <TopContent01 />}
            {tabIndex === '1' && <TopContent02 />}
            {tabIndex === '2' && <TopContent03 />}
        </div>
    );
}