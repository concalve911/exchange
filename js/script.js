const hryvnya = 26;
for (let i = 10; i <= 100; i = i += 10) {
  const result = i * hryvnya;
  console.log(`${i}, ${result}`);
}
