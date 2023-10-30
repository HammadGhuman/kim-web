"use client";
import Image from "next/image";
import React, { useState } from "react";

import Team1 from "@/public/team-1.jpg.png";
import Team2 from "@/public/team-2.jpg.png";
import Team3 from "@/public/team-3.jpg.png";
import Team1Land from "@/public/Team-1land.png";
import Partner1 from "@/public/logo 1.png";
import Partner2 from "@/public/logo 2.png";
import Partner3 from "@/public/Logo 3.png";
import Partner4 from "@/public/Logo 4.png";
import Partner5 from "@/public/Logo 5.png";
import Partner6 from "@/public/logo 6.png";

import Partner1Side from "@/public/Partner1side.png";

import ContactForm from "@/public/contact-form_1698477 1.png";
import Carousel from "react-simply-carousel";
import ReadMoreButton from "@/components/ReadMoreButton";
import Roadmap from "@/components/Roadmap";
import Arrow from "@/public/right-arrow.png";
function Page() {
  const [sidebarData, setSidebarData] = useState<any>({});
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center px-0 mx-0 font-Marsden drawer-content">
        <div className="w-[225px] md:w-full mt-[104px] text-center text-white text-[38px] md:text-[62px] font-medium  leading-10">
          Meet our
          <br className="md:hidden" />
          <span className="text-[#B77828]"> team</span>
        </div>

        <div className="w-[291px] md:w-[634px] mt-5 mb-[118px] text-center text-white text-lg font-normal md:text-lg md:leading-[27px]  leading-[25px]">
          Lorem Ipsum dolor sit amet sun progit droin qual de suis erestopius
          liqueenean sollicituin, lorem quis bibendum auct.
        </div>

        <div className="flex drawer-button flex-col xl:justify-center md:flex-row flex-wrap">
          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Team1Land,
                name: "Christian Krauter",
                position: "  Gründer & Geschäftsführer",
              })
            }
          >
            <div className="group relative">
              <Image
                className="md:w-[488px] md:h-[524px] cursor-pointer group-hover:opacity-50 transition-opacity duration-300"
                src={Team1}
                alt="team1"
              />
              <div className="absolute bottom-10 flex flex-col ml-10 items-start select-none w-full text-white text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-2xl font-medium font-Marsden  tracking-tight">
                  Christian Krauter
                </h1>
                <h1 className="text-yellow-600 text-2xl font-medium font-Marsden ">
                  Gründer & Geschäftsführer
                </h1>
              </div>
            </div>
          </label>

          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Team2,
                name: "Christian Krauter",
                position: "  Gründer & Geschäftsführer",
              })
            }
          >
            <div className="group relative">
              <Image
                className="md:w-[488px] md:h-[524px] cursor-pointer group-hover:opacity-50 transition-opacity duration-300"
                src={Team2}
                alt="team1"
              />
              <div className="absolute bottom-10 flex flex-col ml-10 items-start select-none w-full text-white text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-2xl font-medium font-Marsden  tracking-tight">
                  Christian Krauter
                </h1>
                <h1 className="text-yellow-600 text-2xl font-medium font-Marsden ">
                  Gründer & Geschäftsführer
                </h1>
              </div>
            </div>
          </label>

          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Team3,
                name: "Christian Krauter",
                position: "  Gründer & Geschäftsführer",
              })
            }
          >
            <div className="group relative">
              <Image
                className="md:w-[488px] md:h-[524px] cursor-pointer group-hover:opacity-50 transition-opacity duration-300"
                src={Team3}
                alt="team1"
              />
              <div className="absolute bottom-10 flex flex-col ml-10 items-start select-none w-full text-white text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-2xl font-medium font-Marsden  tracking-tight">
                  Christian Krauter
                </h1>
                <h1 className="text-yellow-600 text-2xl font-medium font-Marsden ">
                  Gründer & Geschäftsführer
                </h1>
              </div>
            </div>
          </label>

          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Team1,
                name: "Christian Krauter",
                position: "  Gründer & Geschäftsführer",
              })
            }
          >
            <div className="group relative">
              <Image
                className="md:w-[488px] md:h-[524px] cursor-pointer group-hover:opacity-50 transition-opacity duration-300"
                src={Team1}
                alt="team1"
              />
              <div className="absolute bottom-10 flex flex-col ml-10 items-start select-none w-full text-white text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-2xl font-medium font-Marsden  tracking-tight">
                  Christian Krauter
                </h1>
                <h1 className="text-yellow-600 text-2xl font-medium font-Marsden ">
                  Gründer & Geschäftsführer
                </h1>
              </div>
            </div>
          </label>

          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Team2,
                name: "Christian Krauter",
                position: "  Gründer & Geschäftsführer",
              })
            }
          >
            <div className="group relative">
              <Image
                className="md:w-[488px] md:h-[524px] cursor-pointer group-hover:opacity-50 transition-opacity duration-300"
                src={Team2}
                alt="team1"
              />
              <div className="absolute bottom-10 flex flex-col ml-10 items-start select-none w-full text-white text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-2xl font-medium font-Marsden  tracking-tight">
                  Christian Krauter
                </h1>
                <h1 className="text-yellow-600 text-2xl font-medium font-Marsden ">
                  Gründer & Geschäftsführer
                </h1>
              </div>
            </div>
          </label>

          <div className="hidden flex-col w-[488px] md:flex items-center justify-center">
            <div className="text-center text-white text-5xl font-semibold mt-10">
              Join Our <br />
              Team
            </div>
            <div className="mt-10">
              <Image width={74} height={74} src={ContactForm} alt="form" />
            </div>
            <div className="mt-10 hover:cursor-pointer">
              <ReadMoreButton text="Apply Here" />
            </div>
          </div>
        </div>

        <div className="md:hidden text-center text-white text-5xl font-semibold mt-10">
          Join Our <br />
          Team
        </div>

        <div className="md:hidden">
          <ReadMoreButton text="Apply Here" />
        </div>

        <div className="text-center text-white text-[62px] mt-[138px] font-medium font-['Marsden'] leading-[72px]">
          Partners
        </div>
        <div className="text-center mt-4 text-white text-lg font-normal font-Marsden leading-[27px]">
          Lorem Ipsum dolor sit amet sun progit droin qual de suis erestopius
          liqueenean
          <br />
          sollicituin, lorem quis bibendum auct.
        </div>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-3 place-items-center">
          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Partner1,
                name: "Partner1",
              })
            }
          >
            <Image
              width={200}
              className="rounded md:mx-10"
              src={Partner1}
              alt="partner1"
            />
          </label>
          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Partner2,
                name: "Partner2",
              })
            }
          >
            <Image
              width={200}
              className="rounded md:mx-10"
              src={Partner2}
              alt="Partner2"
            />
          </label>
          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Partner3,
                name: "Partner3",
              })
            }
          >
            <Image
              width={200}
              className="rounded md:mx-10"
              src={Partner3}
              alt="partner3"
            />
          </label>
          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Partner4,
                name: "Partner4",
              })
            }
          >
            <Image
              width={200}
              className="rounded md:mx-10"
              src={Partner4}
              alt="partner4"
            />
          </label>
          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Partner5,
                name: "Partner1",
              })
            }
          >
            <Image
              width={200}
              className="rounded md:mx-10 scale-[0.70]"
              src={Partner5}
              alt="partner1"
            />
          </label>
          <label
            htmlFor="my-drawer-1"
            onClick={() =>
              setSidebarData({
                img: Partner6,
                name: "Partner1",
              })
            }
          >
            <Image
              width={200}
              className="rounded md:mx-10"
              src={Partner6}
              alt="partner1"
            />
          </label>
        </div>
        <div
          id="roadmap"
          className="text-center mt-20 text-white text-5xl font-medium font-Marsden md:text-[62px]  leading-[72px]"
        >
          Roadmap
        </div>
        <p className="md:w-[700px] mt-4 mb-5 font-Montserrat text-white text-lg font-normal leading-7 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          iusto, nostrum molestiae odit earum eveniet dolores ut assumenda.
          Quaerat, libero.
        </p>
        <div className="relative mb-20">
          <div className="w-[1000px] h-[770px] mt-96 bg-blue-400 bg-opacity-50 blur-[1200px] absolute z-10" />
          <div className="flex items-center justify-center flex-col"></div>
          <div>
            <Carousel
              containerProps={{
                style: {
                  width: "100%",
                  justifyContent: "space-between",
                  userSelect: "none",
                },
              }}
              preventScrollOnSwipe
              swipeTreshold={60}
              activeSlideIndex={activeSlide}
              onRequestChange={setActiveSlide}
              forwardBtnProps={{
                children: (
                  <div className="border-[1px] mx-10 border-white group-hover:block bg-white/10 hover:bg-white/40 px-4 py-4 rounded-md  cursor-pointer text-white">
                    <Image
                      src={Arrow}
                      className="rotate-90"
                      alt="arrow"
                      width={20}
                    />
                  </div>
                ),
              }}
              backwardBtnProps={{
                children: (
                  <div className="border-[1px] mx-10 border-white group-hover:block bg-white/10 hover:bg-white/40 px-4 py-4 rounded-md  cursor-pointer text-white">
                    <Image
                      src={Arrow}
                      className="-rotate-90"
                      alt="arrow"
                      width={20}
                    />
                  </div>
                ),
              }}
              itemsToShow={1}
              speed={400}
              centerMode
            >
              {Array.from({ length: 10 }).map((item, index) => (
                <div key={index} className="flex flex-col mt-16  space-y-10 z-">
                  <Roadmap
                    date="2009"
                    title="Die Entstehung des Leadership Modells"
                    description="Ausgelöst durch die Finanzkrise erforschte Jörg Krauter die Frage: „Wie führt man wirksam in Krisen und extremen Situationen in einem volatilen, unsicheren, komplexen und mehrdeutigen Geschäftsumfeld?“. In seiner Promotion zum PhD, die er in 2018 abschloss, entwickelte er die Grundlage für das Leadership Modell, das wir heute in KI.m einsetzen."
                  />
                  <div className="w-[1232px] hidden md:block  border-t border-stone-300 relative ">
                    <div className="w-6 h-[5px] border-t-2 border-white absolute left-10 top-[-1.2px]" />
                    <div className="w-6 h-[5px] border-t-2 border-white absolute right-10 top-[-1.2px]" />
                  </div>

                  <div className="md:self-end md:w-[700px]">
                    <Roadmap
                      date="März 2020"
                      title="Corona Pandemie, die Theorie wird zu Praxis"
                      description="Die Corona Pandemie wird als Extremereignis in unsere Geschichte eingehen. Diesen Umstand nutzte Jörg, um anhand einer empirischen Studie die Erkenntnisse seiner bisherigen Forschungsarbeit zu überprüfen und um aktuelle Trends, wie Digitalisierung und agiles Arbeiten zu erweitern.  "
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-white min-h-full w-[718px]">
          <div className="flex flex-col items-center justify-center">
            <Image src={sidebarData.img} alt="partner1 side" />

            <div className="flex flex-col space-y-5 px-4 items-center justify-center mt-10">
              <h1 className="text-center text-black text-4xl font-bold font-Marsden leading-[27px]">
                Christian Krauter
              </h1>
              <h1 className="w-auto text-center text-yellow-600 text-2xl font-medium font-['Marsden'] leading-[37.50px]">
                Gründer & Geschäftsführer
              </h1>
              <h1 className="text-black text-base text-center font-light font-['Marsden'] leading-[27px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rutrum molestie facilisis. Quisque mollis quis velit nec
                sagittis. Nulla vehicula eleifend consectetur. Aenean laoreet
                mauris quis ante iaculis, ut venenatis enim iaculis. Sed at urna
                ut dui molestie finibus. Aliquam fringilla eros ac diam
              </h1>
              <h1 className="text-black text-[15px] font-light font-['Marsden'] leading-[27px]">
                DOB: Date
              </h1>
              <h1 className="text-black text-[15px] font-light font-['Marsden'] leading-[27px]">
                Educiaton: -
              </h1>
              <h1 className="text-black text-[15px] font-light font-['Marsden'] leading-[27px]">
                Phone: 0 123 456 789
              </h1>
              <h1 className="text-black text-[15px] font-light font-['Marsden'] leading-[27px]">
                Email: info@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
