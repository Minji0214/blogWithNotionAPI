import Image from "next/image";
import styles from "./page.module.css";
import { css } from "../../styled-system/css/css";
import Landing from "../components/Landing";
export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  );
}
