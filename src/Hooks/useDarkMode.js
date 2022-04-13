import React, { useState } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
   

    const useDark = () => {
        if(darkMode === true){
          document.body.style.backgroundColor = 'white'
        }else{
          document.body.style.backgroundColor = 'black'
          document.body.style.color = 'white'
          }
    }
    return {darkMode, setDarkMode,useDark}
};

export default useDarkMode;