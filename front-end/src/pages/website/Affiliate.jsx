import React, { useContext } from 'react';
import { Product } from '../../components/Affiliate/Product';
import { ProductContext } from '../../context/ProductContext';
import { motion } from 'framer-motion'


export default function Affiliate() {
    const { products } = useContext(ProductContext)
    return (
        <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}

    >
        <div>

            <div className='flex flex-wrap gap-3 justify-center mt-20'>
                {
                    products?.map((product) => {

                        return <>
                            <Product product={product} />
                        </>
                    })
                }


            </div>
        </div>
        </motion.div>
    );
}
