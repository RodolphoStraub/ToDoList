"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [array, setArray] = useState(["Estudar Programação"]);

  function adicionar() {
    setArray((array) => [...array, textInput]);
    setTextInput("");
  }

  function excluir(index) {
    setArray(array.filter((item, i) => index != i));
  }

  return (
    <>
      <div className={styles.all}>
        <div className={styles.main}>
          <h1 className={styles.title}>Lista de Tarefas!</h1>
          {array.map((item, index) => (
            <li className={styles.tasks} key={index}>
              {item}
              <span
                className={styles.delete}
                onClick={() => {
                  excluir(index);
                }}
              >
                🗑️
              </span>
            </li>
          ))}
        </div>
        <div className={styles.sub}>
          <input
            className={styles.input}
            placeholder="adicione a tarefa"
            value={textInput}
            onInput={(e) => {
              setTextInput(e.target.value);
            }}
          />
          <button className={styles.add} onClick={adicionar}>
            ➕
          </button>
        </div>
      </div>
    </>
  );
}
