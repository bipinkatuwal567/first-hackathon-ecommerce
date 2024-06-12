import Image from "next/image";
import { Button } from "./ui/button";

const HomePage = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row mt-2 justify-between lg:justify-evenly w-full p-4 rounded-lg h-[calc(100vh-8rem)] grainy">
      <div className=" flex-shrink-0">
        <Image
          src={"/topi.png"}
          height={600}
          width={600}
          className="w-96 sm:w-[26rem] lg:w-[32rem] mx-auto flex-shrink-0"
        />
      </div>

      <div className="flex flex-col sm:gap-2 md:-mt-8 sm:-mt-3 md:gap-3 justify-center flex-wrap shrink">
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
