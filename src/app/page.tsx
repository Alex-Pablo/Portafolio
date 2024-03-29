"use client"
import styles from "./page.module.css";
import Command from "@/components/command";
import Link from "next/link";
import  TitleAnimation from "@/components/animation/text/titleAnimation"
export default function Home() {
  const openPDF = ()=>{
    window.open('/diplomasIngles.pdf')
}

  return (
    <main>
      <div className={styles.wrapper}>
        <TitleAnimation></TitleAnimation>
        <p className={styles.introducedName}>
          Te doy la bienvenida a mi sencillo hogar, visitante. Me llamo
          <span className={styles.name}> Alex Pablo</span>
        </p>

        <p className={styles.introducedTech}>
          ¡Bienvenidos a mi aventura! Soy un estudiante de Ingeniería en
          Sistemas que se embarcó en el fascinante viaje de la programación en
          2020. Para mí, la tecnología es mucho más que líneas de código; es la
          emocionante travesía de convertir cualquier chispa de imaginación en
          una realidad palpable.
        </p>
        <p className={styles.introducedTech}>
          Cuando no estoy inmerso en el fascinante mundo de la codificación, me
          aventuro explorando nuestro planeta, capturando recuerdos con cada
          fotografía que tomo. Además, me sumerjo en la creación de mundos
          totalmente nuevos a través de apasionantes diseños en 3D.
        </p>

        <div className={styles.wrapperLinks}>
          <p className={styles.aventure}>Mis Aventuras</p>
          <a
            href="https://platzi.com/p/alexpa1/"
            className={styles.link}
            target="_blank"
          >
            #Mis cursos de programación (platzi)
          </a>
          <p
            onClick={openPDF}
            className={styles.link}
          >
            #Mis diplomas de Ingles
          </p>
          <Link
            href="/resource"
            className={styles.link}
          >
            #recursos utilizados en mi aventura
          </Link>
          <a
            href="https://twitter.com/AlexP4blo"
            className={styles.link}
            target="_blank"
          >
            #twitter
          </a>
          <a
            href="https://github.com/Alex-Pablo"
            className={styles.link}
            target="_blank"
          >
            #github
          </a>
          <a
            href="https://www.amazon.com/-/es/Daniel-Kahneman/dp/8483068613"
            className={styles.link}
            target="_blank"
          >
            #libro que estoy leyendo
          </a>

          <Command></Command>
        </div>
      </div>
    </main>
  );
}
