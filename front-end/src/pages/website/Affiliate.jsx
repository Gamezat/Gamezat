import React, { useContext } from 'react';
import { Product } from '../../components/Affiliate/Product';
import { ProductContext } from '../../context/ProductContext';

export default function Affiliate() {
    const { products } = useContext(ProductContext)
    return (
        <div>
            
            <div className='flex flex-wrap gap-3 justify-center mt-20'>
                {
                    products?.map((product) => {

                     return <>
                     <Product product={product} />
                     <Product product={product} />
                     <Product product={product} />
                     <Product product={product} />
                     <Product product={product} />
                     <Product product={product} />
                     
                     </>
                    })
                }
          

            </div>
        </div>
    );
}
