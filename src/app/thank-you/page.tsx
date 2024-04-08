
import Image from "next/image"

const ThankYouPage = () => (
    <div className="flex flex-col align-items items-center mt-[15vw] lg:m-10">
      <h1 className="text-4xl font-bold p-5">Registration successful!</h1>
      <Image src="/success.svg" alt="success" width={400} height={100}/>
    </div>
  );
  
  export default ThankYouPage;
  