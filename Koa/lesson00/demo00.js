//可以用同步写法实现异步逻辑
//最底层的await返回需要是Promise对象
//可以通过多层 async function 的同步写法代替传统的callback嵌套


function getSyncTime() {
  return new Promise((resolve, reject) => {
    try {
      let startTime = new Date().getTime();
      setTimeout(() => {
        let endTime = new Date().getTime();
        let data = endTime - startTime;
        resolve(data);
      }, 500);
    } catch (error) {
      reject(error);
    }
  });
}

async function getSyncData() {
  let data = await getSyncTime();
  return `endTime - startTime = ${data}`;
}

async function getData() {
  let data = await getSyncData();
  console.log(data);
}

getData();
