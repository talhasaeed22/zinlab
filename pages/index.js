import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Bookmarks from "@/components/bookmarks";
import Slider from "@/components/slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zinlab</title>
        <meta
          name="description"
          content="This is the testing application for zinlab hiring purpose"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          rel="stylesheet preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        />
      </Head>
      <main>
        <div className={styles.homeBody}>
          <div className={styles.Bookmarks}>
            <Bookmarks />
          </div>
          <div className={styles.slider}>
            <Slider />
          </div>
          <div className={styles.Bookmarks}>
            <Bookmarks />
          </div>
          <div className={styles.Bookmarks}>
            <Bookmarks />
          </div>
        </div>
      </main>
    </>
  );
}
