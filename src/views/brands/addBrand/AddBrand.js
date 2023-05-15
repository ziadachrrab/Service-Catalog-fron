import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddBrand(props) {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState(0)
  const [inStock, setInStock] = useState(false)
  const [createdOn, setCreatedOn] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newBrand = {
      name: name,
      code: code,
      brand: brand,
      price: price,
      inStock: inStock,
      createdOn: createdOn,
    }
    props.addBrand(newBrand)
  }
  AddBrand.propTypes = {
    addBrand: PropTypes.func.isRequired,
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Code:
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
      </label>
      <br />
      <label>
        Brand:
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        In Stock:
        <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
      </label>
      <br />
      <label>
        Created On:
        <input type="text" value={createdOn} onChange={(e) => setCreatedOn(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  )
}

export default AddBrand
