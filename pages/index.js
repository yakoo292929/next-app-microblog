import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utiles.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私はエンジニアです。好きな言語はJavaScript/PHP/RPGⅣです。</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <span className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</span>
            </Link>
            <br/>
            <small className={utilStyles.lightText}>February 23.2023</small>
          </article>

          <article>
            <Link href="/">
              <img src="/images/thumbnail02.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <span className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</span>
            </Link>
            <br/>
            <small className={utilStyles.lightText}>February 23.2023</small>
          </article>

          <article>
            <Link href="/">
              <img src="/images/thumbnail03.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <span className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</span>
            </Link>
            <br/>
            <small className={utilStyles.lightText}>February 23.2023</small>
          </article>

          <article>
            <Link href="/">
              <img src="/images/thumbnail04.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <span className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</span>
            </Link>
            <br/>
            <small className={utilStyles.lightText}>February 23.2023</small>
          </article>
        </div>
      </section>


    </Layout>
  );

}
