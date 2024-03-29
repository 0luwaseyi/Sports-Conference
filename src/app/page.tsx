"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";
import "./Hero.css"
import Image from "next/image"
import { SparklesCore } from "@/Components/Sparkles";


const Home: React.FC = () => {
    return (
        <div>

<div className="w-full absolute inset-0 z-10 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full z-10"
          particleColor="#fff"
        />
      </div>
            <Carousel autoPlay infiniteLoop interval={8000}  showArrows={false} showThumbs={false}>
                {[ // Wrap the single element inside an array
                    <div className='overflow-hidden h-screen z-10 object-cover relative back-img bg-center bg-cover' key="image1"> {/* Provide a unique key */}
                    </div>,

                      <div className='overflow-hidden h-screen z-10 object-cover relative back-pic' key="image1"> {/* Provide a unique key */}

                      </div>,

                    <div className='overflow-hidden h-screen z-10 object-cover relative backer-img' key="image1"> {/* Provide a unique key */}

                    </div>,
 
                      <div className='overflow-hidden h-screen z-10 object-cover relative backer-pic' key="image1"> {/* Provide a unique key */}
 
                      </div>
                ]}
            </Carousel>

            <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
              <div className="p-3">
                <h1 className="text-[#fff] text-center font-bold text-5xl drop-shadow-2xl p-5 shadow-head lg:text-6xl">
                  International Sports Conference
                </h1>
                <hr/>
              </div>
               
            

              <div className="">
                <p className="text-[#fff] mx-[5vw] text-lg lg:text-xl text-center">Join global leaders and experts as we unlock the secrets to success,<br className="hidden lg:block"/> foster innovation, and propel the next generation of athletes to Olympic glory.</p>
              </div>

              <div className="p-5">
                <Link href="/register">
                 <button className="flex p-5 justify-center items-center p-3 text-[#000] border-[#fff] bg-[#fff] rounded-md">Register</button>
                 </Link>
              </div>
            </div>

            <div className="absolute justify-start top-0  ml-[5vw] my-[2vw] ">
              <Image src="/logo.png" alt = "logo" width={70} height={70}/>

            </div>
            
            <div className="absolute flex justify-end top-0 right-0 mr-[5vw] my-[1vw] ">
              <Image src="/logoone.png" alt = "logo" width={90} height={90}/>

            </div>
        </div>
    );
};

export default Home;




	{/*<Carousel  showStatus={false} showIndicators={false} showArrows={false} showThumbs={false}> 
     
				<div className='overflow-hidden h-screen z-10 object-cover relative'> 
					<img src="/image1.jpg" className='relative bg-center bg-cover inset-0 w-full h-full brightness-50 bg-blue-400' alt="image1"/> 
					<h1 className="absolute top-0 left-0 right-0 bottom-0 text-[#fff] font-bold text-5xl mt-[75vw] lg:text-6xl lg:mt-[17vw]"><em>International Sports Conference</em></h1> 
          <p className='text-white absolute top-[100vw] text-center mx-[5vw] text-[3.9vw] lg:top-[25vw] lg:text-[1.5vw] left-0 right-0 bottom-0 font-medium'>Join global leaders and experts as we unlock the secrets to success,<br/> foster innovation, and propel the next generation of athletes to Olympic glory.</p>
         <Link href ="/register"><button className='absolute top-[125vw] lg:top-[31vw] lg:text-[1.4vw] left-[42vw] border-[#fff] w-[34vw] h-[5vh] lg:h-[7vh] lg:w-[14vw] bg-[#fff] text-[#000] rounded-md'>Register</button>
</Link> 
				</div> 
				<div className='overflow-hidden h-screen z-10 object-cover relative'> 
					<img src="/image2.jpg" className='relative bg-center bg-cover inset-0 w-full h-full brightness-50 bg-blue-400' alt="image1"/> 
					<h1 className="absolute top-0 left-0 right-0 bottom-0 text-[#fff] font-bold text-[8vw] mt-[75vw] lg:text-[5vw] lg:mt-[17vw]"><em>International Sports Conference</em></h1> 
          <p className='text-white absolute top-[100vw] text-center mx-[5vw] text-[3.5vw] lg:top-[25vw] lg:text-[1.5vw] left-0 right-0 bottom-0 font-medium'>Join global leaders and experts as we unlock the secrets to success,<br/> foster innovation, and propel the next generation of athletes to Olympic glory.</p>
         <Link href ="/register"><button className='absolute top-[120vw] lg:top-[31vw] lg:text-[1.4vw] left-[42vw] right-0 bottom-0 border-[#fff] w-[34vw] h-[5vh] lg:h-[7vh] lg:w-[14vw] bg-[#fff] text-[#000] rounded-md'>Register</button>
</Link> 
				</div>  
				<div className='overflow-hidden h-screen z-10 object-cover relative'> 
					<img src="/image3.jpg" className='relative bg-center bg-cover inset-0 w-full h-full brightness-50 bg-blue-400' alt="image1"/> 
					<h1 className="absolute top-0 left-0 right-0 bottom-0 text-[#fff] font-bold text-[8vw] mt-[75vw] lg:text-[5vw] lg:mt-[17vw]"><em>International Sports Conference</em></h1> 
          <p className='text-white absolute top-[100vw] text-center mx-[5vw] text-[3.5vw] lg:top-[25vw] lg:text-[1.5vw] left-0 right-0 bottom-0 font-medium'>Join global leaders and experts as we unlock the secrets to success,<br/> foster innovation, and propel the next generation of athletes to Olympic glory.</p>
         <Link href ="/register"><button className='absolute top-[120vw] lg:top-[31vw] lg:text-[1.4vw] left-[42vw] right-0 bottom-0 border-[#fff] w-[34vw] h-[5vh] lg:h-[7vh] lg:w-[14vw] bg-[#fff] text-[#000] rounded-md'>Register</button>
</Link> 
				</div> 
        <div className='overflow-hidden h-screen z-10 object-cover relative'> 
					<img src="/image4.jpg" className='relative bg-center bg-cover inset-0 w-full h-full brightness-50 bg-blue-400' alt="image1"/> 
					<h1 className="absolute top-0 left-0 right-0 bottom-0 text-[#fff] font-bold text-[8vw] mt-[75vw] lg:text-[5vw] lg:mt-[17vw]"><em>International Sports Conference</em></h1> 
          <p className='text-white absolute top-[100vw] text-center mx-[5vw] text-[3.5vw] lg:top-[25vw] lg:text-[1.5vw] left-0 right-0 bottom-0 font-medium'>Join global leaders and experts as we unlock the secrets to success,<br/> foster innovation, and propel the next generation of athletes to Olympic glory.</p>
         <Link href ="/register"><button className='absolute top-[120vw] lg:top-[31vw] lg:text-[1.4vw] left-[42vw] right-0 bottom-0 border-[#fff] w-[34vw] h-[5vh] lg:h-[7vh] lg:w-[14vw] bg-[#fff] text-[#000] rounded-md'>Register</button>
</Link> 
				</div> 
			
    </Carousel> */}