import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lestro was born from a passion for creativity and a vision to
            redefine how people express themselves through fashion. Our journey
            began with a simple idea — to create a platform where style meets
            comfort, allowing everyone to discover, explore, and shop
            effortlessly from the comfort of their homes.
          </p>
          <p>
            Since our inception, Lestro has been dedicated to crafting a diverse
            range of high-quality apparel that suits every style and
            personality. From everyday essentials to statement pieces, we design
            collections that blend comfort, quality, and individuality — all
            made with care and attention to detail.
          </p>
          <b>Our Mission</b>
          <p>
            At Lestro, our mission is to empower individuals with confidence,
            comfort, and creativity through fashion. We’re committed to
            delivering a seamless shopping experience — from discovering your
            style to receiving your order — ensuring every step reflects
            quality, care, and innovation.
          </p>
        </div>
      </div>
      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSES US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
