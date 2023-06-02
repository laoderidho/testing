import React from 'react'
import fruit from './Data/fruitData'
import filterSameData from './utils/sameData'
import template from './views/template'
import { useState } from 'react'
import filterImport from './utils/filterImport'
import filterLocal from './utils/filterLocal'

export default function App() {
  const [dataFruit] = useState(fruit)

  const filterData = filterSameData(dataFruit)
  const FilterImport = filterImport(dataFruit)
  const filterLocalData = filterLocal(dataFruit)

  const [valueSelect, setValueSelect] = useState('')

  const handleSelect = (e) => {
    const select = e.target.value
    setValueSelect(select)
  }

  const handleSatukan = () => {
    if(valueSelect === 'satukan') {
      return filterData.map((item) => {
        return (
          <>
            {template(item)}
          </>
        );
      })
    } else if(valueSelect === 'jangan'){
      return dataFruit.map((item) => {
        return (
          <>
            {template(item)}
          </>
        );
      })
    } else if(valueSelect === 'Lihat Yang Import'){
      return FilterImport.map((item) => {
        return (
          <>
            {template(item)}
          </>
        );
      })
    }else{
      return filterLocalData.map((item) => {
        return (
          <>
            {template(item)}
          </>
        );
      })
    }
  }

  const handleTotal = () => {
    let total = 0;
    if(valueSelect === 'satukan') {
      filterData.forEach((item) => {
        total += item.stock
      })
    } else if(valueSelect === 'jangan'){
      dataFruit.forEach((item) => {
        total += item.stock;
      });
    } else if(valueSelect === 'Lihat Yang Import'){
      FilterImport.forEach((item) => {
        total += item.stock;
      });
    }else {
      filterLocalData.forEach((item) => {
        total += item.stock;
      });
    }
    return total;
  }

  return (
    <div className='container'>
    <h1>Buah Andi</h1>
    <div className="row">
    <h2>Pilihan Nama buah</h2>
      <div className="col-md-4">
          <select className="form-select" aria-label="Default select example" onChange={handleSelect} value={valueSelect}>
            <option selected value="default">Open this select menu</option>
            <option value="satukan">Satukan Nama Buah Yang sama</option>
            <option value="jangan">Pisahkan Nama Buah Yang Sama</option>
            <option value="Lihat Yang Import">Lihat Yang Import</option>
            <option value="Lihat Yang Local">Lihat Yang Local</option>
          </select>
      </div>
    </div>
    <div className="row">
      {handleSatukan()}
      <h4>Total Stock Buah: {handleTotal()} </h4>
    </div>
    </div>
  )
}
