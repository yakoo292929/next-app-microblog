import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';
import utilStyles from '../styles/utiles.module.css';
import { getPostsData } from '../lib/post';

/////////////////////////////////
// SSGの場合
/////////////////////////////////
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };

}

/////////////////////////////////
// SSRの場合
/////////////////////////////////
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// }


export default function Home({ allPostsData }) {
  return (
    <Layout>

      <section className={utilStyles.headingMd}>
        <p>私はエンジニアです。好きな言語はJavaScript/PHP/RPGⅣです。</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/post/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
              </Link>
              <Link href={`/post/${id}`}>
                <span className={utilStyles.boldText}>{title}</span>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>

    </Layout>
  );

}
