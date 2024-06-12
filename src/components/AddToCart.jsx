import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const AddToCart = () => {
  return (
    <div className="flex flex-col w-full">
      <h2>Cart</h2>
      <div className="flex w-full justify-between bg-red-400 items-center">
        <div className="flex justify-between items-center bg-yellow-400">
          <div className="flex flex-col">
            <p>Products</p>
            <div className="flex items-center">
              <Image src={"/topi.png"} height={50} width={50} />
              <div className="flex flex-col">
                <p>15-inch MacBook Air(2TB) - Midnight</p>
                <p>$2,099.00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p>Quantity</p>
            <div className="flex items-center border border-black rounded-lg gap-3">
              <Button variant="ghost" size="sm">
                -
              </Button>
              <p>1</p>
              <Button variant="ghost" size="sm">
                +
              </Button>
            </div>
          </div>

          <div className="flex flex-col">
            <p>Subtotal</p>
            <div className="flex items-center">
              <p>$2,099.00</p>
              <Button>O</Button>
            </div>
          </div>
        </div>


        <div className="flex flex-col bg-yellow-500">
          <p>Summary</p>
          <div>
            <p>Delivery Charage</p>
            <p>$0</p>
          </div>

          <div>
            <p>Grand Total</p>
            <p>$2,099.00</p>
          </div>

          <Button>Login to checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
