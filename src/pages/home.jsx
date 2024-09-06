import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage from "../assets/background.svg";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowAltCircleUp } from "react-icons/fa";
import myVideo from "../assets/medium.mp4";
const image1 = require("../assets/sbis2.jpg");
const ol1 = require("../assets/ol1.webp");
const ol2 = require("../assets/ol2.webp");
const waterCleaningImage = require("../assets/coils_cleaning_with_water.jpg");
const waterLeakage = require("../assets/water_leakage.JPG");
const industry = require("../assets/industry.jpg");
const firmName = require("../assets/sbis_logo_4.png");
const waterSplash = require("../assets/water_splash.jpg");
const water = require("../assets/water.jpg");
const food = require("../assets/food.jpg");
const oil = require("../assets/oil.jpg");
const power = require("../assets/power.jpg");
const cement = require("../assets/cement.jpg");
const jsw = require("../assets/company_logos/jsw_logo.png");

export const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col w-full h-full">
          <div className="flex h-auto w-full">
            <div
              className="w-1/2 bg-cover bg-center p-10 justify-center flex flex-col items-center"
              style={{ backgroundImage: "url('../assets/background.svg')" }}
            >
              <div className="relative">
                {/* Video Element */}
                <video
                  src={myVideo}
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-80 scale-110"
                  style={{
                    filter: "blur(4px)",
                    borderRadius: "50%", // Adds blur to the video
                    transform: "scale(1.2)",
                  }}
                />
                {/* Text Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                  <h1 className="text-center text-4xl font-bold mb-4">
                    Welcome to SB Industrial Solutions
                  </h1>
                  <p className="text-center text-2xl font-semibold mb-4">
                    Innovative Solutions for Industrial Challenges
                  </p>
                </div>
                {/* Darkening Overlay (Optional for better text contrast) */}
                <div className="absolute top-0 left-0 w-full h-full"></div>
              </div>

              {/* <label className="text-center text-xl font-bold mb-4">Welcome to SB Industrial Solutions</label>
            <p className="text-center text-lg font-semibold mb-4">Solutions to any type of leakage and hydro cleaning</p> */}
            </div>
            <Carousel
              autoPlay
              interval={3000}
              infiniteLoop
              className="w-1/2 p-4 carousel-container"
            >
              <div className="flex items-center justify-center">
                <img
                  src={industry}
                  alt="backgroundImage"
                  className="object-contain"
                />
                <div className="text-overlay absolute bg-bluish flex">
                  <div className="text-white flex p-2 font-semibold text-xl max-sm:text-lg">
                    Heavy-Duty Blockage Solutions
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={waterLeakage}
                  alt="backgroundImage"
                  className="object-contain"
                />
                <div className="text-overlay absolute bg-7680B4 flex">
                  <div className="text-white p-2 font-semibold text-xl max-sm:text-lg">
                    Uninterrupted Leak Repair
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={waterCleaningImage}
                  alt="backgroundImage"
                  className="object-contain"
                />
                <div className="text-overlay absolute bg-7680B4 flex">
                  <div className="text-white p-2 font-semibold text-xl max-sm:text-lg">
                    Hydro Clean Solutions
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div
            id="about"
            className="w-full  justify-center flex flex-col items-center p-10"
          >
            <label className="text-lg font-bold mb-4 text-center text-bluish">
              About Us
            </label>
            <p className="text-justify">
              <span className="font-semibold">
                Shree Ballaleshwar Industrial Solutions
              </span>{" "}
              formerly known as{" "}
              <span className="italic">Shree Ballaleshwar Hydrocleaners</span>,
              was founded in 2009 with a vision to provide top-tier cleaning
              services for chemical industries. Today, we stand as a
              quality-driven leader in industrial automation, offering
              comprehensive solutions that include integrated automation
              systems, expert consultation, and seamless project execution for
              both new and existing facilities.
            </p>

            <p className="text-justify pt-4">
              At SB Industrial Solutions, we pride ourselves on driving
              operational efficiency and reducing costs for our clients across a
              wide range of industries. Our expertise spans sectors such as
              energy, water & wastewater, cement, food & beverage, electrical &
              power, and oil & gas. With a proven track record of delivering
              projects on time, within budget, and exceeding expectations, we
              are committed to delivering superior results through innovation
              and precision.
            </p>
          </div>
        </div>

        <div
          id="services"
          className="w-full  justify-center flex flex-col items-center p-10"
        >
          <label className="text-lg font-bold mb-4 text-center text-bluish">
            Our Services
          </label>
          <p className="text-justify">
            We are proud to deliver our services to a diverse range of satisfied
            clients, including industry leaders such as{" "}
            <span className="font-semibold">Laxmi Organics</span> (both units),{" "}
            <span className="font-semibold">Sudarshan</span> (Mahad & Roha),{" "}
            <span className="font-semibold">Privi</span>,{" "}
            <span className="font-semibold">IPCA</span>,{" "}
            <span className="font-semibold">Aquapharm</span>,{" "}
            <span className="font-semibold">Prasol</span>,{" "}
            <span className="font-semibold">Bec Chemicals</span> (Roha),{" "}
            <span className="font-semibold">Clean Science</span> (Kurkumbh),{" "}
            <span className="font-semibold">Jarandeshwar Sugar Mills</span>{" "}
            (Distillery Unit),{" "}
            <span className="font-semibold">Aastride Life Sciences</span> and
            many more. Our proven expertise and commitment to excellence have
            earned the trust of these top companies.
          </p>
          <p className="text-justify pt-4">
            In addition to our core services, we also offer{" "}
            <span className="font-semibold">online leakage sealing</span>, an
            innovative solution that prevents energy loss and eliminates the
            need for costly and disruptive shutdowns. This leak-sealing
            technology ensures operational continuity, maximizing efficiency
            while safeguarding both your resources and equipment.
          </p>
        </div>

        <div className="w-full flex flex-col items-center p-10">
          <label className="text-lg font-bold mb-4 text-center text-bluish">
            Focused Industries
          </label>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="relative w-[31%] hover:opacity-80">
              <img
                src={water}
                alt="Water Industry"
                className="object-contain transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 font-semibold text-xl max-sm:text-lg text-center">
                Water & Waste Water
              </div>
            </div>
            <div className="relative w-[31%] hover:opacity-80">
              <img
                src={power}
                alt="Power Industry"
                className="object-contain transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 font-semibold text-xl max-sm:text-lg text-center">
                Energy & Power
              </div>
            </div>
            <div className="relative w-[31%] hover:opacity-80">
              <img
                src={food}
                alt="Food & Beverages"
                className="object-contain transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 font-semibold text-xl max-sm:text-lg text-center">
                Food & Beverages
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-between space-x-6 pt-8">
            <div className="relative w-[48%] hover:opacity-80">
              <img
                src={oil}
                alt="Oil Industry"
                className="object-contain transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 font-semibold text-xl max-sm:text-lg text-center">
                Oil & Gas
              </div>
            </div>
            <div className="relative w-[48%] hover:opacity-80">
              <img
                src={cement}
                alt="Cement"
                className="object-contain transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 font-semibold text-xl max-sm:text-lg text-center">
                Cement
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  justify-center flex flex-col items-center p-10">
          <label className="text-lg font-bold mb-4 text-center text-bluish">
            Our Clients
          </label>
          <div className="flex flex-row flex-wrap justify-between space-x-6">
            <img
              src={jsw}
              alt="Oil Industry"
              className="object-contain transition-opacity duration-300 w-[18%] h-20"
            />
            <img
              src={oil}
              alt="Oil Industry"
              className="object-contain transition-opacity duration-300 w-[18%] h-20"
            />
            <img
              src={oil}
              alt="Oil Industry"
              className="object-contain transition-opacity duration-300 w-[18%] h-20"
            />
            <img
              src={oil}
              alt="Oil Industry"
              className="object-contain transition-opacity duration-300 w-[18%] h-20"
            />
            <img
              src={oil}
              alt="Oil Industry"
              className="object-contain transition-opacity duration-300 w-[18%] h-20"
            />
          </div>
        </div>

        <footer className="flex w-full bg-gray-800 text-white p-6" id="contact">
          <div className="container mx-auto flex h-auto w-full space-x-8 items-center">
            <img
              src={firmName}
              alt="Firm Name"
              className="w-1/3 pl-5 h-24 flex flex-col"
            />
            <div className="w-px h-48 w-1 bg-bluish"></div>{" "}
            {/* Vertical line separator */}
            <div className="w-1/3 flex flex-col">
              <p className="text-lg font-semibold mb-2">
                Shree Ballaleshwar Industrial Solutions
              </p>
              <p className="text-md font-thin">Prakash P Patil</p>
              <p className="text-md font-thin">
                Near ESSAR Petrol Pump, Opp. MIDC Police Station
              </p>
              <p className="text-md font-thin">Nangalwadi Phata, MIDC Mahad,</p>
              <p className="text-md font-thin">
                Tal: Mahad Dist : Raigad (402309)
              </p>
              <p className="text-md font-thin flex items-center">
                <IoCallOutline className="mr-2" /> +91-9423376674 /
                +91-8600664690
              </p>
              <p className="text-md font-thin flex items-center">
                <MdOutlineEmail className="mr-2" /> pppatil335@gmail.com
              </p>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 SB Industrial Solutions. All rights reserved.
              </p>
              {/* <div className="flex space-x-4 mt-2">
        <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
        <a href="#" className="hover:text-yellow-500">Terms of Service</a>
        <a href="#" className="hover:text-yellow-500">Contact Us</a>
      </div> */}
            </div>
          </div>
        </footer>
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-black-50 text-white p-3 rounded-full shadow-lg hover:bg-bluish"
          >
            <FaArrowAltCircleUp />
          </button>
        )}
      </div>
    </div>
  );
};
