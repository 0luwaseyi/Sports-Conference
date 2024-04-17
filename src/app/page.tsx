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
          particleDensity={70}
          className="w-full h-full z-10"
          particleColor="#fff"
        />
      </div>
            <Carousel autoPlay infiniteLoop interval={8000} showIndicators={false} showStatus={false} verticalSwipe="natural" swipeable   showArrows={false} showThumbs={false}>
                {[ 
                    <div className='overflow-hidden  h-screen z-10 object-cover relative back-img bg-center bg-cover' key="image1"> {/* Provide a unique key */}
                    </div>,

                      <div className='overflow-hidden transition ease-in delay-1000 duration-1000 h-screen z-10 object-cover relative back-pic' key="image1"> {/* Provide a unique key */}

                      </div>,

                    <div className='overflow-hidden transition ease-in delay-1000 duration-1000 h-screen z-10 object-cover relative backer-img' key="image1"> {/* Provide a unique key */}

                    </div>,
 
                      <div className='overflow-hidden transition ease-in delay-1000 duration-1000 h-screen z-10 object-cover relative backer-pic' key="image1"> {/* Provide a unique key */}
 
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
                <p className="text-[#fff] mx-[5vw] text-md lg:text-xl text-center">Join global leaders and experts as we unlock the secrets to success,<br className="hidden lg:block"/> foster innovation, and propel the next generation of athletes to Olympic glory.</p>
              </div>

              <div className="p-5">
                <Link href="/register">
                 <button className="flex part-link p-5 relative justify-center items-center p-3 text-[#000] border-[#fff] bg-[#fff] rounded-md">Register</button>
                 </Link>
              </div>
            </div>

            <div className="absolute justify-start top-0  ml-[5vw] my-[3vw] lg:my-[2vw] ">
              <Image src="/logo.png" alt = "logo" width={70} height={70}/>

            </div>
            
            <div className="absolute flex justify-end top-0 right-0 mr-[5vw] my-[0.2vw] lg:my-[0.6vw] ">
              <Image src="/logoone.png" alt = "logo" width={95} height={90}/>

            </div>
        </div>
    );
};

export default Home;




	