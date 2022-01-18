let spinner = () => {
  let spinText = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
  let startTime = 100;
  for (let text of spinText) {
    setTimeout(() => {
      process.stdout.write(text);
    }, startTime);
    startTime += 200;
  }
};
spinner();
