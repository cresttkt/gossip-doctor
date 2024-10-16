import Footer from "@/components/common/layouts/footer/footer";
import styles from "./top.module.scss";
import Header from "@/components/common/layouts/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.mainvisual}>
        <button className={styles.searchBox} type="button">
          <span className={styles.searchBox_title}>病院名・施術名で検索</span>
        </button>
        <Image className={styles.mainvisual_img} src="/mainvisual.jpg" alt="メインビジュアル" width={390} height={346}/>
      </div>
      <div className={styles.mainText}>
        <h2 className={styles.mainText_title}>
          現役美容外科医採点を掲載<br />
          広告に惑わされない<br />
          「本当の」美容外科医 評価を掲載
        </h2>
        <div className={styles.mainText_catch}>SNSのフォロワー数 ≠ 施術の腕</div>
        <ul className={styles.mainText_feature}>
          <li className={styles.mainText_feature_item}>
            <div className={styles.mainFeature}>
              <div className={styles.mainFeature_title}>
                <span className={styles.mainFeature_title_emphasize}>現役美容外科医</span>が作成した 評価レポートを掲載
              </div>
              <p className={styles.mainFeature_text}>
                「今」の「本当」を知る医師によるレポート。<br />
                広告や知名度に左右されない、業界内からの評価をそのまま掲載。
              </p>
            </div>
          </li>
          <li className={styles.mainText_feature_item}>
          <div className={styles.mainFeature}>
              <div className={styles.mainFeature_title}>
                業界レポートだけじゃない<span className={styles.mainFeature_title_emphasize}>口コミも掲載</span>
              </div>
              <p className={styles.mainFeature_text}>
                医師からの意見だけではなく、実際に施術を受けた人たちの意見も併せて確認することができます。
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topSearch}>
        <ul>
          <li className={styles.topSearch_item}>
            <h3 className={styles.topSearch_title}>
              <div className={styles.topSearch_title_text}><span className={styles.topSearch_title_emphasize}>病</span>院で検索</div>
            </h3>
            <a  className={styles.topSearch_link} href="">
              <span className={styles.topSearch_link_text}>T病院 / S美容外科 / Yクリニック</span>
            </a>
          </li>
          <li className={styles.topSearch_item}>
            <h3 className={styles.topSearch_title}>
            <div className={styles.topSearch_title_text}><span className={styles.topSearch_title_emphasize}>地</span>域で検索</div>
            </h3>
            <a  className={styles.topSearch_link} href="">
              <span className={styles.topSearch_link_text}>品川区 / 新宿区 / 渋谷区</span>
            </a>
          </li>
          <li className={styles.topSearch_item}>
            <h3 className={styles.topSearch_title}>
            <div className={styles.topSearch_title_text}><span className={styles.topSearch_title_emphasize}>得</span>意な施術で検索</div>
            </h3>
            <a  className={styles.topSearch_link} href="">
              <span className={styles.topSearch_link_text}>鼻 / 口 / 豊胸</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.topAppeal}>
        <div className={styles.topAppeal_text}>
          Gossip Doctorで<br />
          後悔のない先生選びを！
        </div>
        <a className={styles.topAppeal_link} href="">
          レポートも！口コミも！<br />
          さっそく医師を探す
        </a>
      </div>
      <div className={styles.topTrendDoctor}>
        <h4 className={styles.topTrendDoctor_title}>話題の医師</h4>
        {/* TODO: 配列化して表示 APIでアイテムを取得して表示 */}
        <ul>
          <li>
            <a className={styles.topTrendDoctor_item} href="">
              <div className={styles.topTrendDoctor_left}>
                <div className={styles.topTrendDoctor_imgWrapper}>
                  <Image className={styles.topTrendDoctor_img} src="/img_doctor01.png" alt="医師01" width={56} height={56} />
                </div>
                <div className={styles.topTrendDoctor_detail}>
                  <div className={styles.topTrendDoctor_name}>T病院&nbsp;&nbsp;T医師</div>
                  <div className={styles.star}>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={styles.star_item}></span>
                  </div>
                </div>
              </div>
              <div className={styles.topTrendDoctor_right}>
                <div className={styles.topTrendDoctor_score}>
                  <span className={styles.topTrendDoctor_score_emphasize}>85</span>/100
                </div>
              </div>
            </a>
          </li>
          <li>
            <a className={styles.topTrendDoctor_item} href="">
              <div className={styles.topTrendDoctor_left}>
                <div className={styles.topTrendDoctor_imgWrapper}>
                  <Image className={styles.topTrendDoctor_img} src="/img_doctor02.png" alt="医師02" width={56} height={56} />
                </div>
                <div className={styles.topTrendDoctor_detail}>
                  <div className={styles.topTrendDoctor_name}>T病院&nbsp;&nbsp;T医師</div>
                  <div className={styles.star}>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={styles.star_item}></span>
                    <span className={styles.star_item}></span>
                  </div>
                </div>
              </div>
              <div className={styles.topTrendDoctor_right}>
                <div className={styles.topTrendDoctor_score}>
                  <span className={styles.topTrendDoctor_score_emphasize}>90</span>/100
                </div>
              </div>
            </a>
          </li>
          <li>
            <a className={styles.topTrendDoctor_item} href="">
              <div className={styles.topTrendDoctor_left}>
                <div className={styles.topTrendDoctor_imgWrapper}>
                  <Image className={styles.topTrendDoctor_img} src="/img_doctor03.png" alt="医師03" width={56} height={56} />
                </div>
                <div className={styles.topTrendDoctor_detail}>
                  <div className={styles.topTrendDoctor_name}>T病院&nbsp;&nbsp;T医師</div>
                  <div className={styles.star}>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={`${styles.star_item} ${styles.star_item__active}`}></span>
                    <span className={styles.star_item}></span>
                    <span className={styles.star_item}></span>
                    <span className={styles.star_item}></span>
                  </div>
                </div>
              </div>
              <div className={styles.topTrendDoctor_right}>
                <div className={styles.topTrendDoctor_score}>
                  <span className={styles.topTrendDoctor_score_emphasize}>78</span>/100
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
