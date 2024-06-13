import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaTrash } from "react-icons/fa";

const AddToCart = () => {
  return (
    <div className="mt-5 flex flex-col w-full">
      <h2 className="text-2xl font-bold">Cart</h2>
      <div className="mt-8 flex w-full lg:justify-between items-start lg:items-start gap-10 flex-col lg:flex-row">
        <table className="flex justify-between">
          <tbody>
            <tr className="grid grid-cols-3 gap-10 place-items-start ">
              <th>Products</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>

            <tr className="mt-5 grid grid-cols-3 w-full place-items-start justify-items-start gap-10">
              <td className="flex flex-col gap-10 justify-center">
                <div className="flex items-center gap-3">
                  <Image
                    src={"/topi.png"}
                    height={70}
                    width={70}
                    className=" bg-gray-200 rounded-md"
                  />
                  <div className="flex flex-col">
                    <p className=" font-bold">
                      15-inch MacBook Air(2TB) - Midnight
                    </p>
                    <p className="text-gray-600">$2,099.00</p>
                  </div>
                </div>
              </td>

                <td className="flex items-center border border-black rounded-lg gap-0 sm:gap-3">
                  <Button variant="ghost" size="sm">
                    -
                  </Button>
                  <p>1</p>
                  <Button variant="ghost" size="sm">
                    +
                  </Button>
                </td>

              <td className="flex flex-col justify-center">
                <div className="flex items-center gap-2 md:gap-5">
                  <p className="text-gray-600">$2,099.00</p>
                  <FaTrash className="w-4 h-4 cursor-pointer" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col w-2/3 md:w-2/4 lg:w-1/3 gap-6">
          <p className=" font-bold">Summary</p>
          <div className="flex gap-2 justify-between">
            <p className="text-gray-600">Delivery Charage</p>
            <p className="text-gray-600">$0</p>
          </div>

          <div className="flex gap-2 justify-between">
            <p className="font-bold">Grand Total</p>
            <p className="font-bold">$2,099.00</p>
          </div>

          <Button>Login to checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
