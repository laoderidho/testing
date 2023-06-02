const filterImport = (dataFruit) => {
  const filterData = dataFruit.filter((item) => {
    return item.fruitType === "LOCAL";
  });
  return filterData;
};

export default filterImport;
