import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Resquet } from "../../components/axios/Axios"; // Check if this import is correct
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../components/loader/Loader";
import { FaCircleArrowRight } from "react-icons/fa6";
import tobottom from "../../assets/home/tobottom.png";
import totop from "../../assets/home/totop.png";
import toright from "../../assets/home/toright.png";
import end from "../../assets/home/endt.png";
import { Skeleton } from "@mui/material";
export default function Home() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [bannerData, setBannerData] = useState([]);
  const [category, setCategory] = useState([]);
  const [partners, setPartners] = useState([]);
  const [loader, setLoader] = useState(true);

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
  }, [i18n.language]);

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
        <div className="home_work">
          <div className="header flex items-center font-[700] text-[32px] mb-8">
            <h3 className="w-auto mr-4 my-6">{i18n.t("home.work")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          <div className="worksection grid grid-cols-4 gap-[60px] p-3">
            <div
              className="h-[360px]  p-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                1
              </h1>
              <p className="text-center text-[14px]">{i18n.t("home.1")}</p>
            </div>
            <div
              className="h-[360px]  p-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                4
              </h1>
              <p className="text-center text-[14px]">{i18n.t("home.4")}</p>
            </div>
            <div
              className="h-[360px]  p-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                5
              </h1>
              <p className="text-center text-[14px]">{i18n.t("home.5")}</p>
            </div>
            <div
              className="h-[360px]  p-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                8
              </h1>
              <p className="text-center text-[14px]">{i18n.t("home.8")}</p>
            </div>
            <div
              className="h-[360px]  p-[20px]"
              style={{
                background: `url(${toright})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                2
              </h1>
              <p className="text-center text-[14px]">{i18n.t("home.2")}</p>
            </div>
            <div
              className="h-[360px]  p-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                3
              </h1>
              <p className="text-center text-[14px]">{i18n.t("home.3")}</p>
            </div>
            <div
              className="h-[360px]  p-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                6
              </h1>
              <p className="text-center text-[14px]">{i18n.t("home.6")}</p>
            </div>
            <div
              className="h-[360px]  p-[20px]"
              style={{
                background: `url(${tobottom})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-[64px] font-sans mb-3 font-extrabold text-center">
                7
              </h1>
              <p className="text-center text-[14px]">{i18n.t("home.7")}</p>
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
          <div className=""></div>
        </div>
        <div className="home_contact">
          <div className="header flex items-center font-[700] text-[32px] mb-10 mt-7">
            <h3 className="w-auto mr-4 my-6">{i18n.t("home.contact")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          <div className="contact_about w-[631px]">

          </div>
          <div className="contact_message"></div>
          <iframe
            className="rounded-[25px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.9194707851482!2d69.255519!3d41.250574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b278f47926f%3A0x58c5ded3abff2147!2sHi-tech%20Orient%20Medical!5e0!3m2!1sen!2sus!4v1720526472472!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
