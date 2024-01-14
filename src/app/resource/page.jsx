import styles from "./page.module.css";
import TitleAnimation from "@/components/animation/text/titleAnimation";
import Image from 'next/image'
import arrowLeft from "../../../public/arrowLeft.svg"
import Link from "next/link";


export default function Resource() {
    const resource = [{title:'hola'}, {title:'hola1'}]
  return (
    <div className={styles.wrapper}>
      <TitleAnimation></TitleAnimation>

      <div className={styles.wrapperTitlePage}>
        <Link href="/">
            <Image className={styles.returnIcon} src={arrowLeft} alt="return"/>
        </Link>
        <h6 className={styles.titlePage}>Recusos conseguidos durante mi aventura</h6>
      </div>

      <div>
        {
          resource.map((item, index)=>(
            <li key={index}>{item.title}</li>
          ))
        }
      </div>
    </div>
  );
}
