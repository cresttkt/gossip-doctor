import styles from './topContent01.module.scss';

export default function TopContent01() {

    return (
        <div className={styles.content}>
            <h2 className={styles.content_catch}>
                <span className={styles.content_catchFirst}>美容外科業界に透明性を</span>
                <span className={styles.content_catch_main}>Gossip Doctor は「本当の」美容外科医 評価 を掲載するサイトです</span>
            </h2>
            <p className={styles.content_text}>
                SNSのフォロワー数 ≠ 施術の腕<br />
                大金をかけて行う美容整形手術。<br />
                顔にメスを入れる以上取り返しがつきません。。。<br />
                手術してもらう人には、SNS集客が上手いドクターではなく<br />
                本当に手術が上手い先生にお願いしたいですよね。<br />
                関東圏現役美容外科医監修、医師同士が採点 “本当の” 医師単位の評価を掲載します。
            </p>
        </div>
    );
}