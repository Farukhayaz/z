import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <>
      <div className="bg-[#1d012c] pb-5 ">
        <div className=" flex lg:w-[90%] md:w-[90%] w-[95%] mx-auto  flex-wrap">
          <div
            className="lg:w-[50%] md:w-[50%] w-[90%]  mx-auto "
            style={{
              backgroundImage: "url(/images/21.png)",
              // backgroundImage:"radial-gradient(#812478, #251631)",
              backgroundSize: "100% 100%",
            }}
          >
            <Image
              //   layout="responsive"
              width={540}
              height={550}
              src="/images/17.png"
              alt="image1"
              className=" mx-auto"
            />
          </div>
          <div className="lg:w-[50%] md:w-[50%] w-[90%] ">
            <h1
              style={{
                color: "#FE006A",
                fontFamily: "Arbutus Slab",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                background:
                  "linear-gradient(90deg, rgba(254, 0, 106, 1.00) 0%, #0085FF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="w-[90%] mx-auto lg:text-[44px] md:text-[44px] text-[33px]"
            >
              Empowering the Next Generation of Web 3.0 Users.
            </h1>
            <p
              className="lg:w-[80%] md:w-[80%] w-[100%]  lg:text-[25px] md:text-[25px] text-[20px] lg:ml-10 md:ml-10 ml-4 mt-10"
              style={{
                color: "#FFF",
                fontFamily: "Arbutus Slab",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Zenith X Labs is redefining the digital future through innovation
              and a commitment to excellence. Our journey is marked by
              pioneering partnerships and a relentless drive to shape the
              evolving{" "}
              <span className="text-[#5552F8]">digital landscape.</span>
            </p>
            <p
            className="lg:w-[80%] md:w-[80%] w-[100%] lg:text-[25px] md:text-[25px] text-[20px] lg:ml-10 md:ml-10 ml-4 mt-10"
              style={{
                color: "#FFF",
                fontFamily: "Arbutus Slab",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}>
              At Zenith X Labs, we’re passionate about Web 3.0 innovation and
              the endless possibilities it holds. Our dedication to
              collaboration and progress is evident in our journey, where we
              continually explore new horizons in the <span className="text-[#5552F8]"> digital realm. </span>
            </p>
            <button
            style={{
                color:"white", 
                borderRadius: "100px",
border: "1px solid #0029FF",
background: "#000",
            }}
            className="p-3 px-5 mt-5 lg:ml-[50px] md:ml-[50px]"
            >
                Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
