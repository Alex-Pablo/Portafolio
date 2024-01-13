"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./switchToggle.module.css";
import React, { useEffect } from 'react';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function SwitchToggle() {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState('dark')

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (isOn == true) {
      console.log('dark',isOn);
      setTheme('')
  }else{
    console.log('light', isOn);
      setTheme('light');
  }
  };

  useEffect(() => {
    document.querySelector(":root").dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div
          className={styles.handle}
          layout
          transition={spring}
        ></motion.div>
      </div>
    </>
  );
}
