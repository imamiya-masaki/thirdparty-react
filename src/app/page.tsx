import Image from "next/image";
import styles from "./page.module.css";
import { ThirdPartyComponent} from './_components/thirdparty'
export default function Home() {
  return (
    <div className={styles.page}>
      <ThirdPartyComponent />
      <ThirdPartyComponent />
      <ThirdPartyComponent />
    </div>
  );
}
