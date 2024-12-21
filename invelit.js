function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Usage
delay(3000).then(() => {
  console.log('This runs after 3 seconds');
});
