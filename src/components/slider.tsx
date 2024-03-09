import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class Slider extends Component {
  render() {
    return (
      <div
        className=" mx-auto  lg:h-[500px] md:h-[500px] h-[350px] lg:mt-4 md:mt-10 mt-10  w-[550px] overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, #2d163b, #3b164c)",
          backgroundSize: "100% 100%",
          borderRadius: "100px",
        }}
      >
        <Carousel  autoPlay infiniteLoop showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
        <div style={{ width: '100%', height: '100%' }}>
  <Image layout="responsive" width={200} height={200} src="/images/12.png" alt="image1" />
</div>
<div style={{ width: '100%', height: '100%' }}>
  <Image layout="responsive" width={200} height={200} src="/images/13.png" alt="image1" />
</div>
<div style={{ width: '100%', height: '100%' }}>
  <Image layout="responsive" width={200} height={200} src="/images/14.png" alt="image1" />
</div>
<div style={{ width: '100%', height: '100%' }}>
  <Image layout="responsive" width={200} height={200} src="/images/15.png" alt="image1" />
</div>
        </Carousel>
      </div>
    );
  }
}
