async function getRandomChinese(length) {
  let str = '';
  const ms = 50;
  const time = ms * length;
  console.log(`time: ${time}ms`);
  try {
    for (let i = 0; i < length; i++) {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          const sign = Date.now()
            .toString()
            .slice(-5);
          const char = String.fromCharCode(sign);
          resolve(char);
        }, 50);
      });
        str += await promise;
    }
    return str;
  } catch (error) {
    console.log(`Error!`);
  }
}


getRandomChinese(6).then(str => {
  console.log(str);
});



