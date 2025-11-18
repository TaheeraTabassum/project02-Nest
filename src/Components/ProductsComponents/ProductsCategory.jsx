import React, { useEffect, useState } from 'react';

import Products from '../ProductsComponents/AllProducts/Products'
import CategoryName from './CategoryName/CategoryName';

const ProductsCategory = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/Produts.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  const [category, setCategory] = useState([])
  useEffect(() => {
    fetch('/Category.json')
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [])

  const [select, setSelect] = useState()
  const handleCategory = (id) => {
    setSelect(id);

  }
  return (
    <div className="my-6  px-4 lg:px-3  mx-auto container">
      {/* Header: Title + Category Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 my-3">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
          Popular Products
        </h1>

        {/* Category Filter Component */}
        <CategoryName select={select}
          category={category}
          handleCategory={handleCategory}
        />
      </div>

      {/* Products Grid / List */}
      <div className="mt-4">
        {/* <Produc products={products} select={select} /> */}
        <Products products={products} select={select}></Products>
      </div>
    </div>

  );
};

export default ProductsCategory;