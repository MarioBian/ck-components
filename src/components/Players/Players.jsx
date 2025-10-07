import React, { useState } from "react";
import styles from "./Players.module.css";
import BlackPiece from "../BlackPiece/BlackPiece";
import WhitePiece from "../WhitePiece/WhitePiece";

export default function PlayerColorSelector({ onGameStart }) {
  const [step, setStep] = useState(1);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [player1Color, setPlayer1Color] = useState("");
  const [player2Color, setPlayer2Color] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  function choosePlayer(playerNumber) {
    setSelectedPlayer(playerNumber);
    setStep(2);
  }

  function chooseColor(color) {
    setSelectedColor(color);

    if (selectedPlayer === "player1") {
      setPlayer1Color(color);
      setPlayer2Color(color === "Black" ? "White" : "Black");
    } else if (selectedPlayer === "player2") {
      setPlayer2Color(color);
      setPlayer1Color(color === "Black" ? "White" : "Black");
    }

    setStep(3);
  }

  function StartGame() {
    onGameStart(player1Color, player2Color);
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Choose your player and color</h1>

      {step === 1 && (
        <div>
          <h2 className={styles.subtitle}>Step 1: Which player are you?</h2>
          <div className={styles.buttonContainer}>
            <button
              className={styles.playerButton}
              onClick={() => choosePlayer("player1")}
            >
              I am Player 1
            </button>
            <button
              className={styles.playerButton}
              onClick={() => choosePlayer("player2")}
            >
              I am Player 2
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className={styles.subtitle}>
            Step 2: {selectedPlayer === "player1" ? "Player 1" : "Player 2"},
            choose your color
          </h2>
          <p className={styles.instruction}>Click on the color you want:</p>

          <div className={styles.colorContainer}>
            <button
              className={styles.colorButton}
              onClick={() => chooseColor("Black")}
              // style={{
              //   border:
              //     selectedColor === "Black"
              //       ? "3px solid black"
              //       : "1px solid gray",
              //   backgroundColor:
              //     selectedColor === "Black" ? "#eee" : "transparent",
              // }}
            >
              <BlackPiece color="Black" />
            </button>

            <button
              className={styles.colorButton}
              onClick={() => chooseColor("White")}
              // style={{
              //   border:
              //     selectedColor === "White"
              //       ? "3px solid black"
              //       : "1px solid gray",
              //   backgroundColor:
              //     selectedColor === "White" ? "#eee" : "transparent",
              // }}
            >
              <WhitePiece color="White" />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className={styles.subtitle}>All set! Here are your players:</h2>
          <div className={styles.playersSection}>
            <div className={styles.playerDisplay}>
              <h3 className={styles.playerTitle}>Player 1</h3>
              <BlackPiece color={player1Color} />
              <p className={styles.colorText}>Color: {player1Color}</p>
            </div>
            <div className={styles.playerDisplay}>
              <h3 className={styles.playerTitle}>Player 2</h3>
              <WhitePiece color={player2Color} />
              <p className={styles.colorText}>Color: {player2Color}</p>
            </div>
            <button className={styles.startButton} onClick={StartGame}>
              Start Game!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
