import React from 'react';
import Product from './Product';


const Products = ({ products, select }) => {
    const slice = products.slice(0, 10)
    const filter = select ? products.filter(p => p.id == select) : slice;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filter.map((product) => (
                <Product key={product.id} product={product} select={select} />
            ))}
        </div>

    );
};

export default Products;