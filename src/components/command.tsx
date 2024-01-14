"use client";
import styles from "./command.module.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import TextAnimation from "@/components/animation/text/textAnimation";
export default function Command() {
  const [commandTerm, setCommandTerm] = useState("");
  const [respondStateTerm, setRespondStateTerm] = useState(0);
  const inputFocus = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const focusInput = () => {
      if (inputFocus.current) {
        inputFocus.current.focus();
      }
    };
    document.addEventListener("click", focusInput);
    return () => {
      document.removeEventListener("click", focusInput);
    };
  }, []);

  const handleKeyPress = (event: { key: string }) => {
    if (respondStateTerm == 1) {
      setRespondStateTerm(0);
    }
    if (event.key === "Enter") {
      switch (commandTerm.trim()) {
        case "help":
          setRespondStateTerm(2);
          break;
        case "email":
          setRespondStateTerm(3);
          break;
        case "ls":
          setRespondStateTerm(4);
          break;
        case "cat habilidades":
          setRespondStateTerm(5);
          break;
        case "cat trabajos":
          setRespondStateTerm(6);
          break;
        case "cat experiencia":
          setRespondStateTerm(7);
          break;
        case "cat CV":
          setRespondStateTerm(8);
          openPDF();
          break;
        default:
          setRespondStateTerm(1);
          break;
      }
    }
  };

  const openPDF = ()=>{
      window.open('/cvAlexPablo.pdf')
  }

  const watchSkill = ()=>{
    setRespondStateTerm(5);
  }

  return (
    <>
      <p className={styles.messagecWrComand}>
        Escribe <span className={styles.help}>help</span> para tener la lista de
        comandos
      </p>
      <div className={styles.container}>
        <div className={styles.wrapperInput}>
          <p className={styles.inputMessage}>
            <TextAnimation></TextAnimation>
          </p>
          <input
            autoFocus
            ref={inputFocus}
            type="text"
            className={styles.input}
            onKeyDown={handleKeyPress}
            value={commandTerm}
            onChange={(event) => setCommandTerm(event.target.value)}
          />
        </div>
        <div className={styles.wrapperResult}>
          {respondStateTerm == 2 ? (
            // comando help
            <>
              <div className={styles.wrapperHelp}>
                <p className={styles.title}>ls</p>
                <p className={styles.ls}>
                  mostrar todos los archivos(opciones).
                </p>
              </div>
              <div className={styles.wrapperHelp}>
                <p className={styles.title}>cat</p>
                <p className={styles.ls}>
                  mostrar el contenido de un archivo (cat nombre-archivo).
                </p>
              </div>
              <div className={styles.wrapperHelp}>
                <p className={styles.title}>email</p>
                <p className={styles.ls}>ver correo electronico.</p>
              </div>
            </>
          ) : respondStateTerm == 3 ? (
            // comando email
            <>
              <p className={styles.title}>alexpabloanibal&#64;gmail.com</p>
            </>
          ) : respondStateTerm == 4 ? (
            // commando ls
            <>
              <p className={styles.ls} onClick={watchSkill}>habilidades</p>
              <p className={styles.ls} onClick={openPDF}>CV</p>
              <p className={styles.ls}>trabajos</p>
              <p className={styles.ls}>experiencia</p>
            </>
          ) : respondStateTerm == 5 ? (
            // cat habilidades
            <>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> Angular
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> .Net
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> SQL Server
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> Oracle
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> JavaScript
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> Typescript
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> Git
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> CSS
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> SCSS
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> HTML
              </p>
              <p className={styles.skill}>
                <span className={styles.skillsBegin}>/</span> Figma
              </p>
            </>
          ) : respondStateTerm == 6 ? (
            // cat trabajos
            <p className={styles.ls}>Trbajando en ello</p>
          ) : respondStateTerm == 7 ? (
            // cat experiencia
            <p className={styles.ls}>Ganando experiencia ahora</p>
          ) : respondStateTerm == 8 ? (
            // <!-- cat curriculum -->
            <>
              <p className={styles.ls}>curriculum</p>
            </>
          ) : respondStateTerm == 1 ? (
            <p className={styles.ls}>
              No se reconoce el comando: {commandTerm}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}
