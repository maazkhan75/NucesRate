"use client";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [isLHROpen, setIsLHROpen] = useState(false);
  const [isISLBOpen, setIsISLBOpen] = useState(false);
  const [isFSLOpen, setIsFSLOpen] = useState(false);
  const [isKRCOpen, setIsKRCOpen] = useState(false);

  const toggleLHR = () => {
    setIsLHROpen(!isLHROpen);
  };
  const toggleISLB = () => {
    setIsISLBOpen(!isISLBOpen);
  };
  const toggleFSL = () => {
    setIsFSLOpen(!isFSLOpen);
  };
  const toggleKRC = () => {
    setIsKRCOpen(!isKRCOpen);
  };
  return (
    <aside className="Sidebar">
      <ul className="SidebarUl">
        <li>
          <button onClick={toggleLHR}>LHR</button>

          <ul className={`dropdown ${isLHROpen ? "open" : ""}`}>
            <li>Validated Reviews</li>
            <li>Rejected Reviews</li>
            <li>Ban Students</li>
          </ul>
        </li>
        <li>
          <button onClick={toggleISLB}>ISLB</button>

          <ul className={`dropdown ${isISLBOpen ? "open" : ""}`}>
            <li>Validated Reviews</li>
            <li>Rejected Reviews</li>
            <li>Ban Students</li>
          </ul>
        </li>
        <li>
          <button onClick={toggleFSL}>FSL</button>

          <ul className={`dropdown ${isFSLOpen ? "open" : ""}`}>
            <li>Validated Reviews</li>
            <li>Rejected Reviews</li>
            <li>Ban Students</li>
          </ul>
        </li>
        <li>
          <button onClick={toggleKRC}>KRC</button>

          <ul className={`dropdown ${isKRCOpen ? "open" : ""}`}>
            <li>Validated Reviews</li>
            <li>Rejected Reviews</li>
            <li>Ban Students</li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
