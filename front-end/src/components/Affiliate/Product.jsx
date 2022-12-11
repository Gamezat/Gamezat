
export const Product = ({product}) => {

 

  return (

    <>
   
  
          <a key={product.id} href={product.link} target='_blank' class="group relative block bg-black w-72 h-72 mb-10 shadow-xl">
          <img
            alt="Developer"
            src={product.image}
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
        
          <div class="relative p-4">
            <p class="text-xl font-bold text-white">{product.name}</p>
            <p class="text-md text-lemon font-bold uppercase tracking-widest text-black">
             ${product.price}
            </p>
        
        
            <div class="mt-20">
              <div
                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p class="text-sm text-white">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </a>
        
     
    </>
  );
};