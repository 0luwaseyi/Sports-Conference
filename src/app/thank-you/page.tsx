
import Image from "next/image"

const ThankYouPage = () => (
    <div className="flex flex-col align-items items-center mt-[18vw] lg:m-10 overflow-hidden h-screen">
      <h1 className="text-4xl font-bold p-5 justify-center ml-[15vw] lg:ml-[2vw] ">Registration successful!</h1>
      <Image src="/success.svg" alt="success" className="mx-[12vw]" width={400} height={100}/>
    </div>
  );
  
  export default ThankYouPage;
  