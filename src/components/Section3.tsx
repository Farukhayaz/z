import Image from "next/image";
import React,{useState} from "react";

export default function Section3() {

    const sliderData = [
        {
          image1: '/images/11.png',
          image: '/images/DEX.png',

          alt: 'Image 1',
          text: 'DEV',
          text2:'Revolutionize your trading experience. Zenith DEX offers a secure, peer-to-peer marketplace for seamless crypto exchanges within the Zenith X Labs ecosystem.'
        },
        {
          image1: '/images/11.png',
            image: '/images/DexFreelancing.png',
            alt: 'Image 2',
            text: 'Private Blockchain',
            text2:'Zenith X Labs empowers businesses with secure, permissioned blockchains.  Our private networks foster trusted collaboration, streamline workflows, and enhance data privacy.'
          },
          {
          image1: '/images/11.png',
            image: '/images/Hardwallet.png',
            alt: 'Image 3',
            text: 'Hard & Soft Wallet',
            text2:'Hardware Wallet: Unparalleled security for your holdings. Offline storage keeps your crypto safe, even if your device is compromised. Software Wallet: Convenience and accessibility at your fingertips. Manage your crypto on the go and easily interact with the Zenith X Labs ecosystem.'

          }

        // Add more objects with image, alt, and text for each slider item
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const handleSlideChange = (index) => {
        setCurrentSlide(index);
      };
    
  return (
    <div className="bg-[#1d012c]  ">
      <div className="text-center w-[90%] mx-auto">
        <h1 className="eco pt-10 mb-8">Ecosystem</h1>
        <p className="ecop">
          Unleash the potential of a decentralized future with Zenith X Labs.
          Our interconnected platforms, powered by blockchain technology,
          transform how we work, shop, and play. Experience a secure,
          transparent, and user-controlled ecosystem that empowers individuals
          and fosters limitless possibilities.
        </p>
      </div>

      {/* <div className=" w-[90%]  flex mx-auto mt-[5%]">
        <div className="lg:w-[35%] ">
          <ul>
            <li className="flex mt-5  items-center text-white">
              <Image
                // layout="responsive"
                width={300}
                height={50}
                src="/images/box.png"
                alt="image1"
                className="h-[40px] w-[40px]"
              />
              <h1 className="ml-[10%] ecoh">Dev</h1>
            </li>
            <li className="flex mt-5  items-center text-white">
              <Image
                // layout="responsive"
                width={300}
                height={50}
                src="/images/box.png"
                alt="image1"
                className="h-[40px] w-[40px]"
              />
              <h1 className="ml-[10%] ecoh">Private Blockchain</h1>
            </li>
            <li className="flex mt-5  items-center text-white">
              <Image
                // layout="responsive"
                width={300}
                height={50}
                src="/images/box.png"
                alt="image1"
                className="h-[40px] w-[40px]"
              />
              <h1 className="ml-[10%] ecoh">Hard & Soft Wallet</h1>
            </li>
            <li className="flex mt-5  items-center text-white">
              <Image
                // layout="responsive"
                width={300}
                height={50}
                src="/images/box.png"
                alt="image1"
                className="h-[40px] w-[40px]"
              />
              <h1 className="ml-[10%] ecoh">Decentralized Freelancing</h1>
            </li>
            <li className="flex mt-5  items-center text-white">
              <Image
                // layout="responsive"
                width={300}
                height={50}
                src="/images/box.png"
                alt="image1"
                className="h-[40px] w-[40px]"
              />
              <h1 className="ml-[10%] ecoh">Decentralized Commerce</h1>
            </li>
            <li className="flex mt-5  items-center text-white">
              <Image
                // layout="responsive"
                width={300}
                height={50}
                src="/images/box.png"
                alt="image1"
                className="h-[40px] w-[40px]"
              />
              <h1 className="ml-[10%] ecoh">NFTs Membership</h1>
            </li>
            <li className="flex mt-5  items-center text-white">
              <Image
                // layout="responsive"
                width={300}
                height={50}
                src="/images/box.png"
                alt="image1"
                className="h-[40px] w-[40px]"
              />
              <h1 className="ml-[10%] ecoh">VR Battle Royal Game</h1>
            </li>
          </ul>
        </div>
        <div className="lg:w-[70%] flex justify-around ">
          <div className="flex w-[50%] justify-center  items-center" 
              style={{backgroundImage:"url(/images/11.png)" , backgroundSize:" 100% 100%"}}
              >
            <Image
              //   layout="responsive"
              width={300}
              height={100}
              src="/images/DEX.png"
              alt="image1"
              className=""
            />
           
          </div>
          <div className="  w-[50%] flex items-center">
            <h1 className="ecoh2 text-[25px]">
              Revolutionize your trading experience. Zenith DEX offers a secure,
              peer-to-peer marketplace for seamless crypto exchanges within the
              Zenith X Labs ecosystem.
            </h1>
          </div>
        </div>
      </div> */}
       <div className="w-[90%] pb-5 flex flex-wrap mx-auto mt-[5%]">
      <div className="lg:w-[30%]   w-[95%]">
        <ul>
          {/* Render the list items with images and text */}
          {sliderData.map((item, index) => (
           <li
           key={index}
           className={`ecoh text-[25px] flex mt-5 items-center text-white cursor-pointer ${
             index === currentSlide ? 'active' : ''
           }`}
           style={{ color: index === currentSlide ? '#5552F8' : 'white' }}
           onClick={() => handleSlideChange(index)}
         >
         
              <Image
                width={300}
                height={50}
                src="/images/box.png"
                alt={`image${index + 1}`}
                className="h-[40px] w-[40px]"
              />
              <h1 className="ml-[10%] ecoh">{item.text}</h1>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-[65%] flex  flex-wrap justify-around">
        <div
          className="flex lg:w-[50%]  justify-center items-center"
          style={{ backgroundImage: `url(${sliderData[currentSlide].image1})`, backgroundSize: '100% 100%' }}
        >
         <Image
  width={300}
  height={100}
  src={sliderData[currentSlide].image}
  alt={`image${currentSlide + 1}`}
  className=""
/>

        </div>
        <div className="lg:w-[50%]  flex items-center">
          <h1 className="ecoh2 text-[25px]">{sliderData[currentSlide].text2}</h1>
        </div>
      </div>
    </div>
    </div>
  );
}
