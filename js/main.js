function numbers(a, b) {
  if ((a || b) === 20) {
    console.log(`Zmienna a lub b jest rowna 20, true`);
    return true;
  } else if ((a + b) <= 20) {
    console.log(`Suma a i b jest mniejsza, lub rowna 20, true`);
    return true;
  } else {
    console.log(`Zaden warunek nie zostal spelniony`);
  };
}

numbers(50, 11);