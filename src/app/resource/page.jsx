"use client";
import styles from "./page.module.css";
import TitleAnimation from "@/components/animation/text/titleAnimation";
import Image from "next/image";
import arrowLeft from "../../../public/arrowLeft.svg";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import React from "react";
//imagenes
import imgRefactoring from "../../../public/img/refactoring.jpg";
import  imgPatterns from "../../../public/img/patterns.png"
import  imgFullStack from "../../../public/img/fullstackopen.png"
import  imgDatalemur from "../../../public/img/datalemur.png"
import  imgRoadmap  from "../../../public/img/roadmap.png"
import imgSrimba from "../../../public/img/scrimba.png"
import imgSQLBot  from "../../../public/img/sqlbolt.png"
import  imgArchitectureNotes from "../../../public/img/architecturenotes.png"
import imgEfset from "../../../public/img/efset.png"
import imgRapidApi from "../../../public/img/rapidapi.png"
import imgPythonTutor  from "../../../public/img/pythontutor.png"
import imgUiball from "../../../public/img/uiball.png"
import imgCoolContrast from "../../../public/img/coolcontrast.png"
import imgCoolDesigner from "../../../public/img/colordesigner.png"
import imgFreeFaces from "../../../public/img/freefaces.png"
import imgMonaspace from "../../../public/img/monaspace.png"
import imgSvgRepo from "../../../public/img/svgrepo.png"
import imgYesicon from "../../../public/img/yesicon.png"
import imgTabler from "../../../public/img/tabler.png"
import imgGodly from "../../../public/img/godly.png"
import  imgDevCommuni  from "../../../public/img/DevCommuni.png"

export default function Resource() {
  const resources = [
    {
      title: "Patrones de diseño",
      description:
        "Patrones de diseño en TypeScript. El catalogo de ejemplos en TypeScript.",
      image: imgRefactoring,
      link: 'https://refactoring.guru/es/design-patterns/typescript'
    },
    {
      title: "Arquitectura para webs y apps",
      description:
        "Patterns.dev es un recurso en línea gratuito sobre patrones de diseño, representación y rendimiento para crear aplicaciones web potentes con JavaScript.",
      image: imgPatterns,
      link: 'https://www.patterns.dev/'
    },
    {
      title: "Aprender a programar Full Stack",
      description:
        "¡Aprende React, Redux, Node.js, MongoDB, GraphQL y TypeScript de una sola vez!.Este curso te presentará el desarrollo web moderno basado en JavaScript.",
      image: imgFullStack,
      link: 'https://fullstackopen.com/es/'
    },
    {
      title: "Practica SQL y Data Science",
      description:
        "Practiqué las preguntas de entrevista de SQL y la entrevista de ciencia de datos en DataLemur.",
      image: imgDatalemur,
      link: 'https://datalemur.com/'
    },
    {
      title: "Guia de estudio en programación",
      description:"Roadmap.sh es una iniciativa comunitaria que ofrece rutas, guías y contenido educativo para orientar a los desarrolladores en sus elecciones y aprendizaje.",
      image: imgRoadmap,
      link: 'https://roadmap.sh/'
    },
    {
      title: "Cursos gratis en Scrimba",
      description:"Scrimba proporciona cursos gratuitos para aprender a programar en inglés.",
      image: imgSrimba,
      link: 'https://scrimba.com/allcourses?price=free'
    },
    {
      title: "Aprender SQL",
      description:"Una serie de lecciones y ejercicios interactivos diseñados para ayudarle a aprender SQL.",
      image: imgSQLBot,
      link: 'https://sqlbolt.com/'
    },
    {
      title: "Fragmentación de Bases de Datos",
      description:"En este artículo se explica el particionamiento de bases de datos, sus ventajas,cómo usarlo y cuándo no.",
      image: imgArchitectureNotes,
      link: 'https://architecturenotes.co/database-sharding-explained/'
    },{
      title: "DEV Community",
      description:"DEV Community es una comunidad de 1.237.584 increíbles desarrolladores.",
      image: imgDevCommuni,
      link: 'https://dev.to/'
    },
    {
      title: "Pon a prueba tu inglés",
      description:"Evalúa de inmediato tus habilidades de comprensión oral y lectora en inglés.",
      image: imgEfset,
      link: 'https://www.efset.org/es/ef-set-50/'
    },
    {
      title: "Colección de APIs",
      description:"Descubra y conéctese a miles de API.",
      image: imgRapidApi,
      link: 'https://rapidapi.com/hub'
    },
    {
      title: "Tutor + Debuggedor de codigo",
      description:"Es una herramienta que asiste en tareas de programación en Python, Java, C, C++ y JavaScript. Incluye un depurador y un tutor IA para facilitar la comprensión y depuración.",
      image: imgPythonTutor,
      link: 'https://pythontutor.com/'
    },
    {
      title: "Colección de cargas",
      description:"Cargadores y spinners gratuitos y de código abierto para tu próximo proyecto, construido con HTML, CSS y SVG.",
      image: imgUiball,
      link: 'https://uiball.com/ldrs/'
    },
    {
      title: "Contrasta tus colores para tus UI",
      description:"Es una herramienta que facilita la selección de colores adecuados para tus interfaces, ayudándote a elegir combinaciones visuales efectivas y atractivas.",
      image: imgCoolContrast,
      link: 'https://coolcontrast.vercel.app/'
    },
    {
      title: "Crea tus colores",
      description:"Es una herramienta para la creacion de colores adecuados para tus interfacec..",
      image: imgCoolDesigner,
      link: 'https://colordesigner.io/'
    },
    {
      title: "Fuentes tipograficas",
      description:"Explora una variedad de fuentes tipográficas para descubrir nuevas opciones y enriquecer tus diseños.",
      image: imgFreeFaces,
      link: 'https://www.freefaces.gallery/'
    },
    {
      title: "monaspace",
      description:"Una innovadora superfamilia de fuentes para código.",
      image: imgMonaspace,
      link: 'https://monaspace.githubnext.com/'
    },
    {
      title: "Colección de SVG",
      description:"Busque, explore y edite los iconos o vectores gratuitos que mejor se adapten a sus proyectos utilizando una amplia variedad de bibliotecas de vectores.",
      image: imgSvgRepo,
      link: 'https://www.svgrepo.com/'
    },
    {
      title: "Colección de Iconos",
      description:"Conjunto de Iconos de Código Abierta y Gratis. Herramienta útil para que desarrolladores y diseñadores.",
      image: imgYesicon,
      link: 'https://yesicon.app/'
    },
    {
      title: "Colección de Iconos",
      description:"Iconos gratuitos y de código abierto diseñados para hacer sitios web o aplicaciónes atractivos.",
      image: imgTabler,
      link: 'https://tabler.io/icons'
    },
    {
      title: "Inspiracion de diseño de paginas web",
      description:"Inspiración de diseño web astronómicamente buena de todo Internet.",
      image: imgGodly,
      link: 'https://godly.website/'
    }
  ];
  return (
    <div className={styles.wrapper}>
      <TitleAnimation></TitleAnimation>

      <div className={styles.wrapperTitlePage}>
        <Link href="/">
          <Image className={styles.returnIcon} src={arrowLeft} alt="return" />
        </Link>
        <h6 className={styles.titlePage}>
          Recusos conseguidos durante mi aventura
        </h6>
      </div>

      <div className={styles.wrapperCard}>
        {resources.map((resource, index) => (
          <a key={index} href={resource.link} target="_blank" className={styles.card}>
            <Card >
              <CardHeader className="pb-0 pt-2  flex-col items-start">
                <p className={styles.description}>{resource.description}</p>
                <h4 className={`${styles.title} font-bold text-large`}>{resource.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={resource.image}
                  width={270}
                />
              </CardBody>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
