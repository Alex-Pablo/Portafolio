"use client";
import styles from "./command.module.css";
import { useState } from "react";
export default function Command() {
  const [commandTerm, setCommandTerm] = useState("");
  const [respondStateTerm, setRespondStateTerm] = useState(0);

  const handleKeyPress = (event: { key: string }) => {
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
          break;
        default:
          setRespondStateTerm(1);
          break;
      }
    }
  };

  return (
    <>
      <p className={styles.messagecWrComand}>
        Escribe <span className={styles.help}>help</span> para tener la lista de
        comandos
      </p>

      <div className={styles.container}>
        <div className={styles.wrapperInput}>
          <p className={styles.inputMessage}>aventuas@alex:~$</p>
          <input
            autoFocus
            type="text"
            className={styles.input}
            onKeyDown={handleKeyPress}
            value={commandTerm}
            onChange={(event) => setCommandTerm(event.target.value)}
          />
        </div>
        {respondStateTerm == 2 ? (
          // comando help
          <>
            <div className={styles.wrapperHelp}>
              <p className={styles.title}>ls</p>
              <p className={styles.ls}>mostrar todos los archivos(opciones).</p>
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
            <p className={styles.ls}>habilidades</p>
            <p className={styles.ls}>CV</p>
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
              <span className={styles.skill}>/</span> Figma
            </p>
          </>
        ) : respondStateTerm == 6 ? (
            // cat trabajos
            <p>Trbajando en ello</p>
        ): respondStateTerm == 7 ?(
            // cat experiencia
            <p>Ganando experiencia ahora</p>
        ):respondStateTerm == 8 ? (
            // <!-- cat curriculum -->
            <p>curriculum</p>
        ): respondStateTerm == 1 ?(
            <p className={styles.ls}>No se reconoce el comando: {commandTerm}</p>
        ): (
            <p></p>
        )}
      </div>
    </>
  );
}
