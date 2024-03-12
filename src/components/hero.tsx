// import React from "react";
// import Image from "next/image";
// import Slider from "./slider";
// export default function hero() {
//   return (
//     <>
//    <div className="bg-[#120022] pb-[100px]" >
//    <div
//         className="h-[auto]  "
//         style={{
//           backgroundImage: "linear-gradient(to right, #120022, #180028)",
//           backgroundSize: "100% 100%",
//         }}
//       >
//         <div className="lg:pt-[12%] pb-10 md:pt-[12%] pt-[30%] flex flex-wrap text-white lg:w-[90%] md:w-[95%] w-[95%] mx-auto  ">
//           <div className="lg:w-[50%]  md:w-[95%] w-[95%] lg:ml-0 md:ml-0 ml-1 ">
//             <h1 className="herotext mt-8  w-[95%] lg:text-[48px] md:text-[50px] text-[38px]">
//               A Decentralized Ecosystem For Web 3.0 Revolutions <br />(
//               <span className="text-[#F052CD]">Empowering </span>{" "}
//               <span className="text-[#23F9EC]"> the Next </span>{" "}
//               <span className="text-[#5552F8]"> Generation</span>)
//             </h1>
//             <p className="headerp mt-7 lg:w-[100%] md:w-[88%] w-[100%]">
//               Empowering the next generation of Web 3.0 pioneers to craft the
//               future of the decentralized digital world, where universal
//               prosperity is within reach for everyone
//             </p>
//             <div className="mt-10 flex flex-wrap justify-between lg:w-[70%] md:w-[50%] w-[100%]">
//               <button className="whitepaperbtn lg:w-[176px] text-[20px] p-3 lg:h-[55px]"
//               >
//               Tokenomics
//               </button>
//               <button className="whitepaperbtn2 lg:w-[176px] text-[20px] p-3 lg:h-[55px]">
//               WhitePaper
//               </button>
//             </div>
//           </div>
//           <div className="lg:w-[50%]  md:w-[90%] w-[90%] lg:ml-0  ml-[5%] flex jutify-center items-center ">
//        <Slider/>
//           </div>
//         </div>
//       </div>
//       <div className="d1   bg-[#120022] text-white p-6 ">
//         <p className="lg:w-[58%] md:w-[58%] w-[100%] lg:text-center md:text-center lg :text-[30px] md:text-[30px] text-[18px] mx-auto bar">
//         A Respected and Trusted Partner to Over 10+ Companies, With a Promising Array of New Collaborations Emerging on the Horizon.
//         </p>
//       </div>
//    </div>
//     </>
//   );
// }
import React from "react";
import Image from "next/image";
import Slider from "./slider";
export default function hero() {
  return (
    <>
      <div className="bg-[#170027] lg:pb-[100px] md:pb-[100px] pb-[40px] ">
        <div
          className="h-[auto]  "
          style={{
            backgroundImage: "linear-gradient(to right, #120022, #180028)",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="lg:pt-[12%] pb-10 md:pt-[12%] pt-[30%] flex flex-wrap text-white lg:w-[90%] md:w-[95%] w-[95%] mx-auto  ">
            <div className="lg:w-[50%]  md:w-[95%] w-[95%] lg:ml-0 md:ml-0 ml-1 ">
              <h1 className="herotext lg:mt-8 md:mt-8 mt-2 w-[95%] lg:text-[48px] md:text-[50px] text-[38px]">
                A Decentralized Ecosystem For Web 3.0 Revolutions <br />(
                <span className="text-[#F052CD]">Empowering </span>{" "}
                <span className="text-[#23F9EC]"> the Next </span>{" "}
                <span className="text-[#5552F8]"> Generation</span>)
              </h1>
              <p
                className="headerp mt-7 lg:w-[100%] md:w-[88%] w-[100%]"
                // style={{
                //   fontFamily: "Athiti, sans-serif",
                // fontWeight: "200",
                // fontStyle: "normal",
                // }}
              >
                Empowering the next generation of Web 3.0 pioneers to craft the
                future of the decentralized digital world, where universal
                prosperity is within reach for everyone
              </p>
              <div className="mt-10 flex flex-wrap justify-between lg:w-[70%] md:w-[50%] w-[100%]">
                <button
                  className="lg:w-[176px] text-[20px] p-3 lg:h-[55px]"
                  style={{
                    borderRadius: "100px",
                    fontFamily: "ABeeZee",
                    fontSize: "26px",
                    fontStyle: "normal",
                    fontWeight: "bolder",
                    lineHeight: "normal",
                    background: "linear-gradient(to right, #0085FF, #FF00F5)",
                    WebkitBackgroundClip:
                      "text" /* Clip text to the background */,
                    backgroundClip: "text",
                    border: "2px solid #0085FF",
                    color: "transparent" /* Make text color transparent */,
                    cursor: "pointer",
                    transition:
                      "background 0.3s ease, color 0.3s ease" /* Add color transition */,
                  }}
                >
                  Tokenomics
                </button>
                <button
                  style={{
                    borderRadius: "100px",
                    fontFamily: "ABeeZee",
                    fontSize: "26px",
                    fontStyle: "normal",
                    fontWeight: "bolder",
                    lineHeight: "normal",
                    background: "linear-gradient(to right, #0085FF, #FF00F5)",
                    WebkitBackgroundClip:
                      "text" /* Clip text to the background */,
                    backgroundClip: "text",
                    border: "2px solid #0085FF",
                    color: "transparent" /* Make text color transparent */,
                    cursor: "pointer",
                    transition:
                      "background 0.3s ease, color 0.3s ease" /* Add color transition */,
                  }}
                  className="lg:w-[176px] text-[20px] p-3 lg:h-[55px]"
                >
                  WhitePaper
                </button>
              </div>
            </div>
            <div className="lg:w-[50%] md:w-[90%] w-[90%] lg:ml-0  ml-[5%] flex jutify-center items-center ">
              <Slider />
            </div>
          </div>
        </div>
        <div className="d1   bg-[#120022] text-white p-6 ">
          <p
            className="lg:w-[58%] md:w-[58%] w-[100%] lg:text-[25px] md:text-[25px] text-[20px] lg:text-center md:text-center lg :text-[30px] md:text-[30px] text-[18px] mx-auto bar"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "ABeeZee",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            A Respected and Trusted Partner to Over 10+ Companies, With a
            Promising Array of New Collaborations Emerging on the Horizon.
          </p>
        </div>
      </div>
    </>
  );
}
