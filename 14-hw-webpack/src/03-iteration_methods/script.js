const getRandomArray = (length, min, max) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
      randomArray.push(randomNumber);
    }
    return randomArray;
  };
  
  

  export {getRandomArray};