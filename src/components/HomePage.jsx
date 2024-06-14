import Image from "next/image";
import { Button } from "./ui/button";

const HomePage = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row mt-2 justify-between lg:justify-evenly w-full p-4 rounded-lg h-[calc(100vh-8rem)] grainy">
      <div className="flex-shrink-0 lg:w-2/3 justify-self-center sm:justify-self-start self-center sm:self-start mt-2">
        <Image
          src={"/images/doko.png"}
          height={600}
          width={600}
          className="w-full h-96 lg:h-[32rem] object-cover mx-auto flex-shrink-0 rounded-lg"
        />
      </div>

      <div className="flex flex-col sm:gap-2 md:mt-4 sm:-mt-3 md:gap-3 justify-center flex-wrap shrink">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl shrink">
          Streamline your head
        </h2>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-relaxed">
          Dhaka Topi
        </h2>
        <Button className=" self-start">Shop now</Button>
      </div>
    </div>
  );
};

export default HomePage;

// bg-[url('/topi.png')] bg-no-repeat bg-[length:400px] sm:bg-[length:600px
