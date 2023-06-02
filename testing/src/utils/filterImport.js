const filterImport = (dataFruit) =>{
    const filterData = dataFruit.filter((item) => {
        return item.fruitType === "IMPORT";
    })
    return filterData;
}

export default filterImport;