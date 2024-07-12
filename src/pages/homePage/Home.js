import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCards, EffectFade } from "swiper/modules";
import { Resquet } from "../../components/axios/Axios"; // Check if this import is correct
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../components/loader/Loader";
import { FaCircleArrowRight, FaLocationDot } from "react-icons/fa6";
import tobottom from "../../assets/home/tobottom.png";
import totop from "../../assets/home/totop.png";
import toright from "../../assets/home/toright.png";
import end from "../../assets/home/endt.png";
import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import telegramicon from "../../assets/home/talegramicon.webp";
import whatsappicon from "../../assets/home/whatsappicon.webp";
import skypeicon from "../../assets/home/skype.webp";
import wechaticon from "../../assets/home/wechat.webp";
import youtubeicon from "../../assets/home/youtube.webp";
import facebookicon from "../../assets/home/facebook.webp";
import instaicon from "../../assets/home/instagram.webp";
import { TextField } from "@mui/material";
import Contact from "../contactPage/Contact";

export default function Home() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [bannerData, setBannerData] = useState([]);
  const [category, setCategory] = useState([]);
  const [partners, setPartners] = useState([]);
  const [loader, setLoader] = useState(true);
  const [commentData, setCommentData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Resquet("banner-list/");
        setBannerData(data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoader(false);
      }
    }
    async function commentData() {
      try {
        const data = await Resquet("comment-list/");
        setCommentData(data.results);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoader(false);
      }
    }

    async function fetchCategory() {
      try {
        const data = await Resquet("category-image-list/");
        setCategory(data.results);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setLoader(false);
      }
    }
    async function fetchPartners() {
      try {
        const data = await Resquet("partner-image-list/");
        setPartners(data.results);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setLoader(false);
      }
    }

    fetchCategory();
    fetchData();
    fetchPartners();
    commentData();
  }, [i18n.language]);
  console.log(commentData);
  const filterdata = bannerData?.filter(
    (item) => item.id === 8 || item.id === 10
  );
  return (
    <div className="home bg-gray-100">
      <div className="container w-[80%] mx-auto">
        {loader ? (
          <Loader />
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {bannerData?.map((item) => (
              <SwiperSlide key={item.id} className="cursor-pointer">
                <div className="homeSlide flex justify-between gap-4 items-center">
                  <div className="text w-full flex flex-col gap-6">
                    <h4 className="font-[700] text-[36px]">{item.title}</h4>
                    <p className="text-gray-500">{item.body}</p>
                    <button
                      onClick={() => navigate(`${item.id}`)}
                      className="w-[182px] h-[60px] flex justify-center items-center bg-gray-800 rounded-[72px] text-white"
                    >
                      {i18n.t("home.btn")}→
                    </button>
                  </div>
                  <div className="img h-[412px] w-full flex items-center justify-center">
                    <img className="h-full" src={item.image} alt={item.title} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="home_cards grid grid-cols-2 gap-5 my-4">
          {filterdata.map((item) => {
            return (
              <div
                key={item.id}
                className="home_cards_item flex items-center p-[25px] rounded-[40px] bg-[#87B7FF]"
              >
                <div className="text">
                  <h3 className="font-extrabold text-2xl mb-2 max-w-[150px]  text-ellipsis overflow-hidden whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#475d77]">{item.body}</p>
                  <Link to={"/"}>
                    <button className="flex items-center gap-1 my-3">
                      <span className="text-[38px]">
                        <FaCircleArrowRight />
                      </span>
                      {i18n.t("home.btn")}
                    </button>
                  </Link>
                </div>
                <img
                  className="max-w-[225px] min-w-[150px]"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="home_tools py-[66px]">
          <div className="header flex items-center font-[700] text-[32px] mb-8">
            <h3 className="w-auto mr-4">{i18n.t("home.tools")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          {loader ? (
            <Loader />
          ) : (
            <div className="tools_card flex justify-center gap-[15px] flex-wrap">
              {category?.map((item) => (
                <div
                  key={item.id}
                  className="card cursor-pointer hover:shadow-lg transition-all duration-300 toolCard p-[10px] bg-[#ededed] flex flex-col items-center rounded-[15px] gap-2 text-center w-[225px] "
                >
                  <img className="w-[80px]" src={item.image} alt={item.name} />
                  <h3 className="font-[600] text-[16px]">{item.name}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="home_withus">
          <div className="header flex items-center font-[700] text-[32px] mb-8">
            <h3 className="w-auto mr-4">{i18n.t("home.withus")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          <div className="withus_card flex justify-evenly gap-[15px] flex-wrap">
            <div className="card cursor-pointer hover:shadow-lg transition-all duration-300 p-[10px] max-w-[220px] border-solid border-2 border-gray-200 flex flex-col items-center rounded-[15px] gap-[20px]">
              <img
                src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(2).png&w=96&q=75"
                alt=""
              />
              <div className="text">
                <h4 className="text-center font-[600] text-[16px]">
                  {i18n.t("home.cardtext")}
                </h4>
                <p className="text-center mt-[10px] text-[14px]">
                  {i18n.t("home.cardp")}
                </p>
              </div>
            </div>
            <div className="card cursor-pointer hover:shadow-lg transition-all duration-300 p-[10px] max-w-[220px] border-solid border-2 border-gray-200 flex flex-col items-center rounded-[15px] gap-[20px]">
              <img
                src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(2).png&w=96&q=75"
                alt=""
              />
              <div className="text">
                <h4 className="text-center font-[600] text-[16px]">
                  {i18n.t("home.cardtext")}
                </h4>
                <p className="text-center mt-[10px] text-[14px]">
                  {i18n.t("home.cardp")}
                </p>
              </div>
            </div>
            <div className="card cursor-pointer hover:shadow-lg transition-all duration-300 p-[10px] max-w-[220px] border-solid border-2 border-gray-200 flex flex-col items-center rounded-[15px] gap-[20px]">
              <img
                src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(2).png&w=96&q=75"
                alt=""
              />
              <div className="text">
                <h4 className="text-center font-[600] text-[16px]">
                  {i18n.t("home.cardtext")}
                </h4>
                <p className="text-center mt-[10px] text-[14px]">
                  {i18n.t("home.cardp")}
                </p>
              </div>
            </div>
            <div className="card cursor-pointer hover:shadow-lg transition-all duration-300 p-[10px] max-w-[220px] border-solid border-2 border-gray-200 flex flex-col items-center rounded-[15px] gap-[20px]">
              <img
                src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(2).png&w=96&q=75"
                alt=""
              />
              <div className="text">
                <h4 className="text-center font-[600] text-[16px]">
                  {i18n.t("home.cardtext")}
                </h4>
                <p className="text-center mt-[10px] text-[14px]">
                  {i18n.t("home.cardp")}
                </p>
              </div>
            </div>
            <div className="card cursor-pointer hover:shadow-lg transition-all duration-300 p-[10px] max-w-[220px] border-solid border-2 border-gray-200 flex flex-col items-center rounded-[15px] gap-[20px]">
              <img
                src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(2).png&w=96&q=75"
                alt=""
              />
              <div className="text">
                <h4 className="text-center font-[600] text-[16px]">
                  {i18n.t("home.cardtext")}
                </h4>
                <p className="text-center mt-[10px] text-[14px]">
                  {i18n.t("home.cardp")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home_work min-h-[800px] hidden 2xl:block">
          <div className="header flex items-center font-[700] text-[32px] mb-8">
            <h3 className="w-auto mr-4 my-6">{i18n.t("home.work")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          <div className="worksection  relative justify-center ml-[100px] flex flex-wrap p-3">
            <div
              className="h-[360px] w-[225px] absolute top-0 left-0 pt-[29px] pr-[30px] pb-[55px] pl-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="contentwork w-[175px]">
                <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                  1
                </h1>
                <p className="text-center text-[14px]">{i18n.t("home.1")}</p>
              </div>
            </div>
            <div
              className="h-[360px]  absolute w-[255px] top-[330px] left-0 pt-[29px] pr-[30px] pb-[55px] pl-[20px]"
              style={{
                background: `url(${toright})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="contentwork w-[175px]">
                <h1 className="text-[64px] mt-3 font-sans mb-3 font-extrabold text-center">
                  2
                </h1>
                <p className="text-center text-[14px]">{i18n.t("home.2")}</p>
              </div>
            </div>
            <div
              className="h-[360px]  absolute w-[225px] top-[310px] left-[255px] pt-[29px] pr-[30px] pb-[55px] pl-[20px]"
              style={{
                background: `url(${totop})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="contentwork w-[175px]">
                <h1 className="text-[64px] mt-6 font-sans mb-3 font-extrabold text-center">
                  3
                </h1>
                <p className="text-center text-[14px]">{i18n.t("home.3")}</p>
              </div>
            </div>
            <div
              className="h-[360px]  absolute w-[265px] top-[-15px] left-[255px] pt-[29px] pr-[30px] pb-[55px] pl-[20px]"
              style={{
                background: `url(${toright})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
            >
              <div className="contentwork w-[175px]">
                <h1 className="text-[64px] mt-6 font-sans mb-3 font-extrabold text-center">
                  4
                </h1>
                <p className="text-center text-[14px]">{i18n.t("home.4")}</p>
              </div>
            </div>
            <div
              className="h-[360px] w-[225px] absolute top-0 left-[520px] pt-[29px] pr-[30px] pb-[55px] pl-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="contentwork w-[175px]">
                <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                  5
                </h1>
                <p className="text-center text-[14px]">{i18n.t("home.5")}</p>
              </div>
            </div>
            <div
              className="h-[360px]  absolute w-[255px] top-[330px] left-[520px] pt-[29px] pr-[30px] pb-[55px] pl-[20px]"
              style={{
                background: `url(${toright})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="contentwork w-[175px]">
                <h1 className="text-[64px] mt-3 font-sans mb-3 font-extrabold text-center">
                  6
                </h1>
                <p className="text-center text-[14px]">{i18n.t("home.6")}</p>
              </div>
            </div>
            <div
              className="h-[360px]  absolute w-[225px] top-[310px] left-[775px] pt-[29px] pr-[30px] pb-[55px] pl-[20px]"
              style={{
                background: `url(${totop})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="contentwork w-[175px]">
                <h1 className="text-[64px] mt-6 font-sans mb-3 font-extrabold text-center">
                  7
                </h1>
                <p className="text-center text-[14px]">{i18n.t("home.7")}</p>
              </div>
            </div>
            <div
              className="h-[360px] w-[225px] absolute top-[-20px] left-[775px] pt-[29px] pr-[30px] pb-[55px] pl-[20px]"
              style={{
                background: `url(${end})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="contentwork w-[175px] mt-6">
                <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                  8
                </h1>
                <p className="text-center text-[14px]">{i18n.t("home.8")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home_partners">
          <div className="header flex items-center font-[700] text-[32px] mb-8 mt-7">
            <h3 className="w-auto mr-4 my-6">{i18n.t("home.partner")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          <div className="partners_sect flex flex-wrap justify-center items-center gap-3 mb-5">
            {partners.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-center bg-white  rounded-[15px] hover:shadow-lg transition duration-300 w-[290px]"
                >
                  <img src={item.image} className="h-[175px]" alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="home_comment">
          <div className="header flex items-center font-[700] text-[32px] mb-8 mt-7">
            <h3 className="w-auto mr-4 my-6">{i18n.t("home.comment")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          <div className="">
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              loop={true}
              spaceBetween={30}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {commentData?.map((item) => {
                return (
                  <SwiperSlide>
                    <div className=" p-8">
                      <div className="title flex items-center pb-7 gap-3">
                        <div
                          className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <div className="">
                          <h4 className="font-bold text-[18px]">
                            {item.full_name}
                          </h4>
                          <p className="text-[14px]">{item.position}</p>
                        </div>
                      </div>
                      <div className="text-[14px]">
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}
