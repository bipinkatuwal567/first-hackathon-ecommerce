import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

function ProductCard({name, description, price}) {
  return (
      <Card className='w-64 h-72 bg-transparent flex flex-col'>
      <CardHeader className="className='w-full relative h-40 bg-[rgba(0,0,0,0.06)] flex justify-center items-center overflow-hidden'">
            <img src="/basket.png" alt="basket" className="w-11/12 h-auto hover:scale-105 transition duration-300"/>
      </CardHeader>
      <CardContent   className='w-full flex-1 p-2 flex flex-col gap-y-2' >
            <CardTitle className='font-semibold text-xl'>
                  {name}
            </CardTitle>
      <CardDescription className='text-sm'>
            {description}
      </CardDescription>
      </CardContent>
      <CardFooter>
      <p>$ {price}.00</p>
      </CardFooter>
</Card>
  )
}

export default ProductCard