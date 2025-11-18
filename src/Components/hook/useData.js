import React, { useEffect, useState } from 'react';

const useData = () => {
        const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/Produts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

      const [category,setCategory] =useState([])
            useEffect(()=>{
                 fetch('/Category.json')
                 .then(res =>res.json())
                 .then(data=>setCategory (data))
            },[])

           
          
    return {products,category,}
};

export default useData;