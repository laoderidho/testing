const filterSameData = (data) => {
  const tempMap = new Map();

  data.forEach((item) => {
    const { fruitName, stock } = item;

    if (tempMap.has(fruitName)) {
      const existingFruit = tempMap.get(fruitName);
      existingFruit.stock += stock;
    } else {
      tempMap.set(fruitName, { ...item });
    }
  });

  const temp = Array.from(tempMap.values());

  return temp;
};

export default filterSameData;
