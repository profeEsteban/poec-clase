import { useState } from 'react';

type PropsComponenteN = {
  label: string;
  options: string[];
  show: boolean;
  showMe: () => void;
  // classes?: string;
};
function Menu({ label, options, show, showMe }: PropsComponenteN) {
  return (
    <div
      onMouseOver={showMe}
      onClick={showMe}
      style={{
        padding: 8,
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {label}
      <div
        className="menu"
        style={{
          display: !show ? 'none' : 'block',
        }}
      >
        <ul>
          {options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
