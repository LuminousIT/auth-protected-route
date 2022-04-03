import React, { useEffect } from "react";


const events = [
  "load",
  "mousemove",
  "mousedown",
  "click",
  "scroll",
  "keypress",
];

const AppLogout = ({ children }) => {
  let timer;

useEffect(() => {
  Object.values(events).forEach((item) => {
    window.addEventListener(item, () => {
      resetTimer();
      handleTimer();
    });
  });
}, []);

const resetTimer = () => {
  if (timer) clearTimeout(timer);
};

const handleTimer = () => {
  timer = setTimeout(() => {
    resetTimer();
    Object.values(events).forEach((item) => {
      window.removeEventListener(item, resetTimer);
    });
    logoutAction();
  }, 10000);
};

const logoutAction = () => {
  localStorage.clear();
  window.location.pathname = "/";
};
  return children;
};

export default AppLogout;


