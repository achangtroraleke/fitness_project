import React from "react";
import '../styles/Card.css'

export const Card = ({ className = "", children }) => (
  <div className={`card ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);
