const cbTest = (callback) => {
  console.log("something");
  callback();
};

cbTest(() => console.log("ola from callback"));
