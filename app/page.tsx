"use client";
import Image from "next/image";
import logo from "../public/images/logo.svg"
import logo1 from "../public/images/logo1.svg"
import heroImg from "../public/images/heroImg.svg"
import videoImg from "../public/images/video.svg";
import luxuryImg from "../public/images/luxuryImg.svg"
import precisionImg from "../public/images/precisionImg.svg"
import shoe from "../public/images/shoe.png"
import arrow from "../public/images/arrow.svg"
import arrow1 from "../public/images/arrow1.svg"
import sectionImg from "../public/images/sectionImg.svg"
import FCLogo from "../public/images/FCLogo.svg"
import heroImg1 from "../public/images/heroImg1.svg"
import shoe1 from "../public/images/shoe1.svg"
import luxury from "../public/images/luxury.svg"
import precision from "../public/images/precision.svg"
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { articleData, followData, testimonialData, workData } from "./data/homeData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fillProgress, setFillProgress] = useState(0);
  const workSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = workSectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      if (scrolled < 0) {
        setActiveIndex(0);
        setFillProgress(0);
        return;
      }

      const cardHeight = window.innerHeight;
      const index = Math.floor(scrolled / cardHeight);
      const clampedIndex = Math.max(0, Math.min(index, workData.length - 1));
      const progressWithinCard = ((scrolled % cardHeight) / cardHeight) * 100;

      setActiveIndex(clampedIndex);
      setFillProgress(progressWithinCard);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [shoeTravel, setShoeTravel] = useState(500);

  useEffect(() => {
    setShoeTravel(window.innerHeight * 0.6);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const shoeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const shoeEl = shoeRef.current;
      if (!section || !shoeEl) return;

      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const travel = window.innerHeight * 0.6;

      if (scrolled <= travel) {
        const progress = scrolled / travel;
        shoeEl.style.transform = `translateY(${progress * travel}px)`;
      } else {
        shoeEl.style.transform = `translateY(${travel}px)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div className="bg-white">
      <div className="bg-[#BA1F00] ">
        <div className="container relative mx-auto flex lg:px-0 px-[24px] py-[30px] justify-between items-center lg:items-start ">
          <a href="/">
            <Image src={logo} alt="" className="lg:max-w-full max-w-[300px]" />
          </a>
          <Menu className="cursor-pointer stroke-[#FFA06C] w-[46px] h-[46px] " />
        </div>
        <div className="absolute flex flex-col z-[1] ml-[20px] mt-18">
          <h2 className="font-[drukWide] text-[#FFA06C] font-[500] text-[30px] lg:text-[96px]">
            I AM -
          </h2>
          <h2 className="font-[drukWide] text-[#FFA06C] font-[500] text-[30px] lg:text-[96px]">
            ONE OF ONE
          </h2>
        </div>
        <div className="absolute right-0 flex flex-col mt-5">
          <Image src={heroImg1} loading="eager" alt="" className="lg:hidden " />
        </div>


        <div className="lg:flex items-center mt-5">

          <div className="flex flex-col mt-90  ml-[20px] ">
            <div className="flex flex-col gap-[20px]">
              <div>
                <div className="text-[#FFD1B9] text-[24px] lg:text-[32px] font-[500]">
                  Your life is unique—
                </div>
                <span className="text-[#FFD1B9] text-[24px] lg:text-[32px] font-[500]">your shoes should be, too.</span>
              </div>
              <div className="text-[#FFD1B9] font-[400] text-[15px] lg:text-[20px] lg:text-[24px]">
                1 out of every 4 people have been left behind by the footwear industry. Our solution is the MODEL T: AI-tailored, made-to-fit shoes built precisely for you, a TIME Best Invention.
              </div>
              <div className="flex gap-[14px]">
                <div className="bg-[#FFD1B9] hover:bg-[#BA1F00] cursor-pointer rounded-[6px] p-[10px] text-[#BA1F00] hover:text-[#FFD1B9] font-[400] text-[16px] hover:border-[#FFD1B9]  border-[2px] border-solid " >ORDER MODEL T</div>
                <div className="border-[#FFD1B9] hover:bg-[#FFD1B9] cursor-pointer border-[2px] border-solid rounded-[6px] p-[10px] text-[#FFD1B9] hover:text-[#BA1F00]  font-[400] text-[16px] " >LEARN MORE</div>
              </div>
            </div>
          </div>
          <Image src={heroImg} alt="" className="hidden lg:block -mt-[10rem]" />


        </div>
      </div>

      <div
        ref={workSectionRef}
        style={{ height: `${workData.length * 100}vh` }}
        className="bg-[#BA1F00] text-[#FFD1B9]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="lg:max-w-6xl mx-auto px-6 h-full flex lg:flex-row flex-col items-center justify-center gap-6 lg:gap-0">

            <div className="lg:hidden mt-10 w-full flex items-center justify-between">
              <h2 className="text-[48px] font-bold leading-none uppercase">
                HOW IT<br />WORKS
              </h2>

            </div>

            <div className="lg:hidden w-full flex items-center gap-4">
              <span className="text-[72px] font-[500] leading-none text-[#FFD1B980]">
                {workData[activeIndex].label}
              </span>

            </div>

            <div className="lg:w-[55%] w-full flex flex-col gap-4">
              <div className="rounded-lg overflow-hidden relative aspect-[4/3] w-full">
                <Image
                  src={workData[activeIndex].img}
                  alt={workData[activeIndex].title}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold">{workData[activeIndex].title}</h3>
              <p className="text-[14px] lg:text-[15px] text-[#FFD1B9cc]">{workData[activeIndex].desc}</p>
            </div>

            <div className="hidden lg:flex flex-col items-center px-10">
              <span className="text-[96px] font-[500] leading-none text-[#FFD1B980]">
                {workData[activeIndex].label}
              </span>
              <div className="relative w-[2px] h-[370px] bg-[#FFD1B930] mt-4 overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full bg-[#FFD1B9]"
                  style={{
                    height: `${Math.min(
                      (activeIndex * 100 + fillProgress) / ((workData.length - 1) * 100) * 100,
                      100
                    )}%`
                  }}
                />
              </div>
            </div>

            <div className="lg:flex lg:flex-1 flex-col gap-6">
              <h2 className="hidden lg:block text-[48px] font-bold leading-none uppercase">
                HOW IT<br />WORKS
              </h2>
              <button className="cursor-pointer border-[2px] border-solid border-[#FFD1B9] w-fit bg-[#FFD1B9] hover:bg-[#BA1F00] text-[#BA1F00] hover:text-[#FFD1B9] px-8 py-3 rounded-md uppercase tracking-widest transition-all duration-300 text-sm">
                Get Started
              </button>
            </div>

          </div>
        </div>
      </div>

      <section className="bg-[#BA1F00] flex items-center justify-center pt-[70px]">
        <Image src={videoImg} alt="" />
      </section>

      <section className="py-[70px] "
        style={{
          background: "linear-gradient(90deg, #000000 0%, #003A3A 26.74%, #C1ACFF 102.67%);"
        }}>
        <div className="container mx-auto flex flex-col lg:px-14 px-[24px] gap-[60px] lg:gap-[30px]">

          <div className="hidden lg:flex lg:flex-row  flex-col justify-between lg:items-center items-end py-[20px]">
            <Image src={luxury} alt="" className="lg:hidden block max-w-md" />

            <div className="flex flex-col gap-[10px] max-w-xl">
              <h2 className="text-white font-[500] text-[30px] lg:text-[48px]">
                I AM - <br />
                BESPOKE LUXURY
              </h2>

              <div className="font-[500] text-white text-[24px] lg:text-[32px]">
                Where New York City design <br /> meets Portuguese artistry.
              </div>

              <div className="font-[400] text-white text-[15px] lg:text-[20px]">
                Our signature napa leather shoes blend time-honored craftsmanship with modern sophistication, creating footwear exclusively for you. Masterfully constructed in Portugal using premium napa leather, each pair is tailored to your unique specifications, from foot measurements to lifestyle. These versatile classics support you from workdays to weekends with understated elegance and personalization - the new definition of luxury.
              </div>

              <div className="cursor-pointer hover:bg-[#003A3A] bg-[#B8A6F5] px-4 py-2 text-[#003A3A] hover:text-[#B8A6F5] hover:border-[#B8A6F5] hover:border-[2px] hover:border-solid text-[16px] w-fit rounded-md">
                CRAFT YOUR SIGNATURE PAIR
              </div>
            </div>

            <Image src={luxuryImg} alt="" className="lg:block hidden max-w-md" />

          </div>

          <div className="lg:hidden relative py-[20px]">


            <Image
              src={luxury}
              alt=""
              className="absolute right-0 top-4 max-w-md z-0"
            />

            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-[10px] mt-17">

              <h2 className="text-white font-[500] text-[50px] tracking-[0.03em] leading-tight">
                I AM - <br />
                BESPOKE <br /> LUXURY
              </h2>

              <div className="font-[500] text-white text-[24px] lg:text-[32px]">
                Where New York City design <br /> meets Portuguese artistry.
              </div>

              <div className="font-[400] text-white text-[15px] lg:text-[20px]">
                Our signature napa leather shoes blend time-honored craftsmanship with modern sophistication, creating footwear exclusively for you. Masterfully constructed in Portugal using premium napa leather, each pair is tailored to your unique specifications, from foot measurements to lifestyle. These versatile classics support you from workdays to weekends with understated elegance and personalization - the new definition of luxury.
              </div>

              <div className="cursor-pointer hover:bg-[#003A3A] bg-[#B8A6F5] px-4 py-2 text-[#003A3A] hover:text-[#B8A6F5] hover:border-[#B8A6F5] hover:border-[2px] text-[16px] w-fit rounded-md">
                CRAFT YOUR SIGNATURE PAIR
              </div>

            </div>
          </div>

          <div className="lg:hidden relative py-[20px]">
            <Image src={shoe1} alt="" className="moving-object absolute right-0 top-40 lg:hidden block max-w-md" />

            <div className="flex z-[1] flex-col gap-[10px]">
              <h2 className="text-white font-[500] text-[48px] tracking-[0.03em] leading-tight ">
                I AM __ <br />
                CUTTING <br /> EDGE <br /> SCIENCE &  <br />TECHNOLOGY
              </h2>

              <div className="font-[500] text-white text-[24px] lg:text-[32px]">
                A revolution in how shoes are <br />designed and made.
              </div>

              <div className="font-[400] text-white text-[15px] lg:text-[20px]">
                With over 3 years of research and 12 patent-pending inventions, our team of scientists, technologists, and designers has created the first shoes with AI-powered fit technology, tailored to your unique shape and lifestyle. We partner with leading foot health experts, including Dr. Hylton Menz—the world's #1 researcher studying footwear's impact on the human body. This expertise ensures every IAMBIC shoe is perfectly crafted for you.
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="cursor-pointer bg-[#B8A6F5] hover:bg-[#003A3A] hover:border-[#003A3A] hover:border-dashed hover:border-[2px] px-4 py-2 text-[#003A3A] hover:text-[#C1ACFF]  text-[16px] w-fit rounded-md">
                  EXPERIENCE THE MODEL T
                </div>
                <div className="cursor-pointer border-[#C1ACFF] hover:bg-[#B8A6F5] border-dashed border-[2px] px-4 py-2 text-[#C1ACFF] hover:text-[#003A3A] text-[16px] w-fit rounded-md">
                  HEAR FROM DR. MENZ
                </div>
              </div>
            </div>

          </div>


          <div className="hidden lg:block" ref={sectionRef} style={{ minHeight: `calc(100vh + ${shoeTravel}px)` }}>

            <div className="sticky top-0 h-screen flex lg:flex-row flex-col lg:items-center items-end lg:justify-between px-12 overflow-hidden">

              <div className="flex-[0_0_45%] flex  items-start justify-center h-full pt-16">
                <div
                  ref={shoeRef}
                  className="will-change-transform"
                  style={{ transition: 'transform 0.03s linear' }}
                >
                  <Image
                    src={shoe1}
                    alt="Bespoke shoe"
                    className="moving-object lg:hidden block max-w-md w-full drop-shadow-2xl"
                  />
                  <Image
                    src={shoe}
                    alt="Bespoke shoe"
                    className="moving-object max-w-md lg:block hidden w-full drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className=" flex flex-col gap-[14px]">
                <h2 className="text-white font-[500] text-[48px] leading-tight">
                  I AM — <br />
                  CUTTING EDGE <br /> SCIENCE & <br /> TECHNOLOGY
                </h2>

                <div className="font-[500] text-white text-[32px] leading-snug">
                  A revolution in how shoes are designed and made.
                </div>

                <div className="font-[400] text-white/70 text-[20px] leading-relaxed">
                  With over 3 years of research and 12 patent-pending inventions, our team of scientists, technologists, and designers has created the first shoes with AI-powered fit technology, tailored to your unique shape and lifestyle. We partner with leading foot health experts, including Dr. Hylton Menz—the world's #1 researcher studying footwear's impact on the human body. This expertise ensures every IAMBIC shoe is perfectly crafted for you.
                </div>

                <div className="flex gap-[20px]">
                  <div className="cursor-pointer bg-[#B8A6F5] hover:bg-[#003A3A] hover:border-[#003A3A] hover:border-dashed hover:border-[2px] px-4 py-2 text-[#003A3A] hover:text-[#C1ACFF]  text-[16px] w-fit rounded-md">
                    EXPERIENCE THE MODEL T
                  </div>
                  <div className="cursor-pointer border-[#C1ACFF] hover:bg-[#B8A6F5] border-dashed border-[2px] px-4 py-2 text-[#C1ACFF] hover:text-[#003A3A] text-[16px] w-fit rounded-md">
                    HEAR FROM DR. MENZ
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="hidden lg:flex lg:flex-row flex-col justify-between lg:items-center items-end py-[20px]">
            <Image src={precision} alt="" className="lg:hidden block max-w-md" />
            <div className="flex flex-col gap-[20px] max-w-xl">
              <h2 className="text-white font-[500] text-[30px] lg:text-[48px]">
                I AM - <br />
                PRECISION-FIT
              </h2>

              <div className="font-[500] text-white text-[24px] lg:text-[32px]">
                The best fitting pair of shoes <br />you’ve ever owned.
              </div>

              <div className="font-[400] text-white text-[15px] lg:text-[20px]">
                By combining advanced data analytics, smartphone foot scanning, and traditional Portuguese craftsmanship, we create shoes tailored to your unique foot shape—not just your size.

                At the core of every IAMBIC shoe lies our revolutionary Sole Print™, a proprietary three-layer system engineered for the perfect fusion of personalization, grip, and longevity. As you walk, the natural wear of the sole's distinctive ridges will reveal a pattern unique to your movement. Gradually, this wear reveals colored underlayers—creating a visual story of your walking pattern, balance, and alignment. While your first pair delivers comfort from day one, this data allows us to refine subsequent pairs, delivering shoes that evolve with you.              </div>

              <div className="flex lg:flex-row flex-col gap-[20px]">
                <div className="cursor-pointer bg-[#B8A6F5] hover:bg-[#003A3A] hover:border-[#003A3A] hover:border-dashed hover:border-[2px] px-4 py-2 text-[#003A3A] hover:text-[#C1ACFF]  text-[16px] w-fit rounded-md">
                  FIND YOUR PERFECT FIT
                </div>
                <div className="cursor-pointer border-[#C1ACFF] hover:bg-[#B8A6F5] border-solid border-[2px] px-4 py-2 text-[#C1ACFF] hover:text-[#003A3A] text-[16px] w-fit rounded-md">
                  LEARN MORE
                </div>
              </div>
            </div>

            <Image src={precisionImg} alt="" className="hidden lg:block max-w-md" />

          </div>

          <div className="lg:hidden relative py-[20px]">


            <Image
              src={precision}
              alt=""
              className="absolute right-0 top-4 max-w-md z-0"
            />

            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-[10px] mt-25">

              <h2 className="text-white font-[500] text-[50px] tracking-[0.03em] leading-tight">
                I AM - <br />
                PRECISION-FIT
              </h2>

              <div className="font-[500] text-white text-[24px] lg:text-[32px]">
                The best fitting pair of shoes <br />you’ve ever owned.
              </div>

              <div className="font-[400] text-white text-[15px] lg:text-[20px]">
                By combining advanced data analytics, smartphone foot scanning, and traditional Portuguese craftsmanship, we create shoes tailored to your unique foot shape—not just your size.

                At the core of every IAMBIC shoe lies our revolutionary Sole Print™, a proprietary three-layer system engineered for the perfect fusion of personalization, grip, and longevity. As you walk, the natural wear of the sole's distinctive ridges will reveal a pattern unique to your movement. Gradually, this wear reveals colored underlayers—creating a visual story of your walking pattern, balance, and alignment. While your first pair delivers comfort from day one, this data allows us to refine subsequent pairs, delivering shoes that evolve with you.
              </div>

              <div className="cursor-pointer hover:bg-[#003A3A] bg-[#B8A6F5] px-4 py-2 text-[#003A3A] hover:text-[#B8A6F5] hover:border-[#B8A6F5] hover:border-[2px] text-[16px] w-fit rounded-md">
                CRAFT YOUR SIGNATURE PAIR
              </div>

            </div>
          </div>
        </div>
      </section >

      <section className="bg-[#BA1F00] py-[70px]">
        <div className="container mx-auto flex flex-col gap-[40px]">
          <div className="flex justify-between lg:px-0 px-[24px] items-center ">
            <h2 className="font-[500] text-[30px] lg:text-[48px] text-[#FFD1B9]">I AM _______</h2>
            <button className="cursor-pointer hover:border-[#FFD1B9]  border-[2px] border-solid w-fit bg-[#FFD1B9] hover:bg-[#BA1F00] text-[#BA1F00] hover:text-[#FFD1B9] px-5 py-2 rounded-md  tracking-widest ">
              VIEW ALL
            </button>
          </div>

          <div className="relative px-[24px]">
            <div className="custom-prev absolute left-0 top-[110%] lg:px-0 px-[24px] -translate-y-1/2 z-10 cursor-pointer">
              <Image src={arrow} alt="" className="rotate-180" />
            </div>

            <div className="custom-next absolute right-0 top-[110%] lg:px-0 px-[24px] -translate-y-1/2 z-10 cursor-pointer">
              <Image src={arrow} alt="" />
            </div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1.25}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}

              onBeforeInit={(swiper) => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation.prevEl = ".custom-prev";
                  swiper.params.navigation.nextEl = ".custom-next";
                }
              }}
              breakpoints={{
                0: { slidesPerView: 1.25 },
                640: { slidesPerView: 1.25 },
                1024: { slidesPerView: 2.5 },
              }}

              className="w-full "
            >
              {testimonialData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col gap-[20px]">
                    <Image src={item.img} alt="" />
                    <h2 className="text-[#FFD1B9] font-[400] text-[16px]">{item.desc}</h2>
                    <p className="text-[#FFD1B9] font-[500] text-[18px]">{item.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>


        </div>

      </section>

      <section className="bg-[#BA1F00] flex items-center justify-center pt-[70px]">
        <Image src={sectionImg} alt="" />
      </section>

      <section className="bg-[#003A3A] py-40">
        <div className="container mx-auto relative flex flex-col items-center justify-center gap-[40px]">
          <div className="custom-prev absolute  lg:px-0 px-[24px] left-0 top-125 lg:top-1/2 lg:z-10 -translate-y-1/2 cursor-pointer">
            <Image src={arrow1} alt="" />
          </div>

          <div className="custom-next absolute  lg:px-0 px-[24px] right-0 top-125 lg:top-1/2 lg:z-10 -translate-y-1/2 cursor-pointer">
            <Image src={arrow1} alt="" className="rotate-180" />
          </div>

          <div className="flex flex-col items-center justify-center gap-[50px] text-center w-full lg:max-w-[800px] mx-auto">

            <Image src={FCLogo} alt="" />

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              onBeforeInit={(swiper) => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation.prevEl = ".custom-prev";
                  swiper.params.navigation.nextEl = ".custom-next";
                }
              }}
              className="w-full"
            >
              {articleData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center gap-[20px]">
                    {item.desc.map((data, i) => (
                      <h2
                        key={i}
                        className="leading-[100%] tracking-[0.29em] text-[#C1ACFF] font-[Apercu] font-[400] text-[16px] text-center"
                      >
                        {data}
                      </h2>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="cursor-pointer border border-[#C1ACFF] text-[#C1ACFF] px-6 py-2 rounded-md mt-4 hover:bg-[#C1ACFF] hover:text-[#003A3A] transition">
              READ ARTICLE
            </button>

          </div>
        </div>
      </section>

      <section className="" style={{
        background: "linear-gradient(90deg, #FF864D 0%, #A82502 100%)"
      }}>
        <div className="flex flex-col lg:gap-10 mb-10">
          <h2 className="text-[#FFFFFF] font-[500] px-10 py-10 lg:py-16 text-[24px] lg:text-[48px]">Follow us @weareiambic</h2>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}

            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 2.5 },
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4.5 },
            }}
            className="w-full"
          >
            {followData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex gap-[20px]">
                  <Image src={item.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col  gap-16  lg:px-0 px-[24px] py-[40px]">
            <div className="border-[#FFFFFF] border-[2px] rounded-[21px] p-[30px]">
              <div className="flex flex-col gap-[14px] lg:gap-[20px]">

                <h2 className="text-white font-[500] text-[24px] lg:text-[48px]">
                  A step towards better starts here.
                </h2>

                <p className="text-white font-[400] text-[15px] lg:text-[20px]">
                  Have a question? Curious about how you can get involved? We want to hear from you.
                </p>
                <div className="relative w-full p-[10px] rounded-[6px] bg-[#FF996E]">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pr-[120px] px-4 py-3 rounded-full outline-none border-none"
                  />

                  <button
                    className="hidden lg:block absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 bg-[#BA1F00] hover:border-[#BA1F00] hover:border-[2px] hover:border-solid hover:bg-[#FF996E]  text-[#FFA06C] hover:text-[#BA1F00] text-[16px] px-5 py-2 rounded-[6px] hover:bg-[#A82502] transition"
                  >
                    SUBMIT
                  </button>

                </div>
                <button
                  className="lg:hidden block w-fit cursor-pointer  bg-[#BA1F00] hover:border-[#BA1F00] hover:border-[2px] hover:border-solid hover:bg-[#FF996E]  text-[#FFA06C] hover:text-[#BA1F00] text-[16px] px-5 lg:py-2 py-3 rounded-[6px] hover:bg-[#A82502] transition"
                >
                  SUBMIT
                </button>

              </div>
            </div>
            <div className="flex lg:flex-row flex-col-reverse justify-between lg:items-end lg:gap-0 gap-[30px] mb-10">
              <a href="/">
                <Image src={logo1} alt="" />
              </a>
              <div className="flex gap-18 items-start">
                <div className="flex flex-col gap-[10px]">
                  <a className="cursor-pointer font-[400] text-[#FFFFFF] text-[16px] lg:text-[24px]">Linkedin</a>
                  <a className="cursor-pointer font-[400] text-[#FFFFFF] text-[16px] lg:text-[24px]">Instagram</a>
                  <a className="cursor-pointer font-[400] text-[#FFFFFF] text-[16px] lg:text-[24px]">Facebook</a>
                  <a className="cursor-pointer font-[400] text-[#FFFFFF] text-[16px] lg:text-[24px]">TikTok</a>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <a className="cursor-pointer font-[400] text-[#FFFFFF] text-[16px] lg:text-[24px]">Terms of Use</a>
                  <a className="cursor-pointer font-[400] text-[#FFFFFF] text-[16px] lg:text-[24px]">Privacy Policy</a>
                  <a className="cursor-pointer font-[400] text-[#FFFFFF] text-[16px] lg:text-[24px]">Disclaimer</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div >
  );
}
