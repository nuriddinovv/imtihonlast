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
  useEffect(() => {
    async function fetchData() {
      const data = await Resquet("https://admin.ht-med.uz/api/v1/banner-list/");
      setBannerData(data);
    }

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
            delay: 3000,
            // disableOnInteraction: false,
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
          <div
            className="home_cards_item flex items-center p-[25px] rounded-[40px] w-full bg-[#87B7FF]
          h-28"
          ></div>
          <div
            className="home_cards_item flex items-center p-[25px] rounded-[40px] w-full bg-[#BDFF00]
          h-28"
          ></div>
        </div>
      </div>
    </div>
  );
}
