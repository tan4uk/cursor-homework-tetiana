const generateChineseChar = (length) => {
    const time = 50;
    return new Promise((resolve, reject) => {
setTimeout(() => {
    const sign = Date.now().toString().slice(-5);
    resolve(String.fromCharCode(sign))
    }, time*length)
    })
    }
            
      console.log(generateChineseChar(100));




    