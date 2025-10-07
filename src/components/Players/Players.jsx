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
      <h1 className={styles.title}>Välj spelare och färg</h1>

      {step === 1 && (
        <div>
          <h2 className={styles.subtitle}>Steg 1: Vilken spelare är du?</h2>
          <div className={styles.buttonContainer}>
            <button
              className={styles.playerButton}
              onClick={() => choosePlayer("player1")}
            >
              Jag är spelare 1
            </button>
            <button
              className={styles.playerButton}
              onClick={() => choosePlayer("player2")}
            >
              Jag är spelare 2
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className={styles.subtitle}>
            Step 2: {selectedPlayer === "player1" ? "Player 1" : "Player 2"},
            Välj färg på pjäs
          </h2>
          <p className={styles.instruction}>Klicka på färgen du vill ha:</p>

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
              onClick={() => chooseColor("white")}
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
          <h2 className={styles.subtitle}>Klart! Här är dina spelare</h2>
          <div className={styles.playersSection}>
            <div className={styles.playerDisplay}>
              <h3 className={styles.playerTitle}>Spelare 1</h3>
              {player1Color === "Black" ? (
                <BlackPiece color={player1Color} />
              ) : (
                <WhitePiece color={player1Color} />
              )}
              <p className={styles.colorText}>Färg: {player1Color}</p>
            </div>
            <div className={styles.playerDisplay}>
              <h3 className={styles.playerTitle}>Spelare 2</h3>
              {player2Color === "Black" ? (
                <BlackPiece color={player2Color} />
              ) : (
                <WhitePiece color={player2Color} />
              )}
              <p className={styles.colorText}>Färg: {player2Color}</p>
            </div>
            <button className={styles.startButton} onClick={StartGame}>
              Starta spelet!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
