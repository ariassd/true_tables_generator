"use strict";

const SYMBOLS = ["¬", "∧", "∨", "→", "↔"];

const SymbolBar = ({ onInsert }) => {
  return (
    <div className="symbols">
      <span>insert:</span>
      {SYMBOLS.map((sym) => (
        <button key={sym} className="sym-btn" onClick={() => onInsert(sym)}>
          {sym}
        </button>
      ))}
    </div>
  );
};
