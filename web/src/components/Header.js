"use strict";

const Header = ({ dark, onToggle }) => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-text">
          <h1>⊢ Truth tables</h1>
          <p>Propositional logic expression evaluator</p>
        </div>
        <button className="theme-btn" onClick={onToggle} title="Toggle theme">
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};
