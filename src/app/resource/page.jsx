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
