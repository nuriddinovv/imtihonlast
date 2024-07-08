import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Resquet } from "../../components/axios/Axios";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await Resquet("https://admin.ht-med.uz/api/v1/banner-list/");
      setBannerData(data);
    }
    async function category() {
      const data = await Resquet(
        "https://admin.ht-med.uz/api/v1/category-image-list/"
      );
      setCategory(data.results);
    }
    category();
    fetchData();
  }, []);

  return (
    <div className="home bg-gray-100">
      <div className="container w-[80%] mx-auto">
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
          {bannerData?.map((item) => {
            return (
              <SwiperSlide key={item.id} className="cursor-pointer">
                <div className="homeSlide flex justify-between gap-4 items-center">
                  <div className="text w-full flex flex-col gap-6">
                    <h4 className="font-[700] text-[36px]">{item.title}</h4>
                    <p className="text-gray-500">{item.body}</p>
                    <button
                      onClick={() => {
                        navigate(`${item.id}`);
                      }}
                      className="w-[182px] h-[60px] flex justify-center items-center bg-gray-800 rounded-[72px] text-white"
                    >
                      {t("home.btn")}→
                    </button>
                  </div>
                  <div className="img h-[412px] w-full flex items-center justify-center">
                    <img className="h-full" src={item.image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="home_cards flex justify-between items-center gap-5">
          <div className="home_cards_item flex items-center p-[25px] rounded-[40px] w-full bg-[#87B7FF] h-28">
            <div className="text"></div>
            <img src="" alt="" />
          </div>
          <div className="home_cards_item flex items-center p-[25px] rounded-[40px] w-full bg-[#BDFF00] h-28"></div>
        </div>
        <div className="home_tools py-[66px]">
          <div className="header flex items-center font-[700] text-[32px] mb-8">
            <h3 className="w-auto mr-4">{t("home.tools")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          <div className="tools_card flex justify-center gap-[15px] flex-wrap">
            {category?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 toolCard p-[10px] bg-[#ededed] flex flex-col items-center rounded-[15px] gap-2 w-[225px]"
                >
                  <img className="w-[80px]" src={item.image} alt="" />
                  <h3 className="font-[600] text-[16px]">{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home_withus">
          <div className="header flex items-center font-[700] text-[32px] mb-8">
            <h3 className="w-auto mr-4">{t("home.withus")}</h3>
            <span className="bg-[#292929] h-[2px] flex-grow"></span>
          </div>
          <div className="withus_card flex justify-center gap-[15px] flex-wrap">
            <div className="card cursor-pointer hover:shadow-lg transition-all duration-300 p-[10px]  flex flex-col items-center rounded-[15px] gap-2">
              <img
                src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(2).png&w=96&q=75"
                alt=""
              />
              <div className="text">
                <h4>{t("home.cardtext")}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
