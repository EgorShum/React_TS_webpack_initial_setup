import React, { FC } from 'react';
import '../styles/Sidebar.css';

export const Sidebar: FC = () => {
  return (
    <div className="Sidebar-container">
      <input type="text" />

      <div className="Sidebar-container_checkboxes">
        <input type="checkbox" name="adjective" />
        <input type="checkbox" name="verb" />
        <input type="checkbox" name="noun" />
      </div>
    </div>
  );
};
