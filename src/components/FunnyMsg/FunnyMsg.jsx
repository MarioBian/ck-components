import React, { useState } from "react";
import styles from "./FunnyMsg.module.css";

const FunnyMsg = ({
  onMessageSend,
  playerName = "",
  playerColor = null,
  disabled = false,
}) => {
  const [funnyMessage, setFunnyMessage] = useState("");
  const [showMessageInput, setShowMessageInput] = useState(false);

  const funnyMessages = [
    "Bra Drag! 🎯",
    "Jag trodde du kunde bättre! 🤥",
    "Nu jävlar! 💪",
    "Vad håller du på med? 🤨",
    "Hahaha bra försök kanske nästa gång! 🥸",
    "Hmmm interessankt, hur tänker du nu? 🤔",
    "Bättre lycka nästa gång, eller....? 🤓",
    "Blir du irriterad? fokus 🕺",
    "Måste vara din första gång du spelar! 🤣",
    "Vilken champ, tack för en god match! 😎",
    "Nu blir det spännande! 🔥",
  ];

  const handleMessageClick = (message) => {
    if (onMessageSend && !disabled) {
      onMessageSend({
        text: message,
        player: playerName,
        timestamp: new Date().toISOString(),
      });
    }
  };

  const handleFunnyMessage = () => {
    if (funnyMessage.trim() && onMessageSend && !disabled) {
      onMessageSend({
        text: funnyMessage.trim(),
        player: playerName,
        timestamp: new Date().toISOString(),
        isCustom: true,
      });
      setFunnyMessage("");
      setShowMessageInput(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleFunnyMessage();
    }
    if (e.key === "Escape") {
      setShowMessageInput(false);
      setFunnyMessage("");
    }
  };

  return (
    <div className={styles.funnyMessages}>
      <h2 className={styles.funnyMessagesTitle}>Funny message 🥸</h2>

      {/* Fördefinierade meddelanden */}
      <div className={styles.funnyMessagesGrid}>
        {funnyMessages.map((message, index) => (
          <button
            key={index}
            onClick={() => handleMessageClick(message)}
            disabled={disabled}
            className={`${styles.funnyMessagesButton} ${
              disabled ? styles.funnyMessagesButtonDisabled : ""
            }`}
          >
            {message}
          </button>
        ))}
      </div>

      {/* Custom-meddelande */}
      <div className={styles.funnyMessagesCustom}>
        {!showMessageInput ? (
          <button
            onClick={() => setShowMessageInput(true)}
            disabled={disabled}
            className={styles.funnyMessageButton}

            //{disabled ? styles.funnyMessageButtonDisabled : ""
            // }}
          >
            Skriv ett eget meddelande
          </button>
        ) : (
          <div className={styles.funnyMessagesCustomInput}>
            <input
              type="text"
              value={funnyMessage}
              onChange={(e) => setFunnyMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Skriv ditt meddelande här..."
              maxLength={100}
              disabled={disabled}
              className={styles.funnyMessagesInput}
              autoFocus
            />
            <div className={styles.funnyMessagesActions}>
              <button
                onClick={() => {
                  console.log("Knappen klickad! funnyMessage =", funnyMessage);
                  handleFunnyMessage();
                }}
                disabled={disabled || !funnyMessage.trim()}
                className={`${styles.funnyMessagesSend} ${
                  disabled || !funnyMessage.trim()
                    ? styles.funnyMessagesSendDisabled
                    : ""
                }`}
              >
                Skicka
              </button>

              <button
                onClick={() => {
                  setShowMessageInput(false);
                  setFunnyMessage("");
                }}
                disabled={disabled}
                className={styles.funnyMessagesCancel}
              >
                Avbryt
              </button>
            </div>
            <div className={styles.funnyMessagesCounter}>
              {funnyMessage.length}/100 tecken
            </div>
          </div>
        )}
      </div>
      {disabled && (
        <div className={styles.funnyMessagesDisabledInfo}>
          Meddelande inaktiverade
        </div>
      )}
    </div>
  );
};

export default FunnyMsg;
