'use client'


import styles from "./page.module.css";
import { ThirdPartyComponent} from './_components/thirdparty'
import { Suspense } from "react";
export default function Home() {
  return (
    <div className={styles.page}>
      <Suspense fallback={"loading..."}><ThirdPartyComponent /></Suspense>
    </div>
  );
}

export const dynamic = 'force-dynamic'