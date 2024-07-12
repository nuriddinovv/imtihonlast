import React from "react";
import i18n from "../../i18n";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { TextField } from "@mui/material";
import telegramicon from "../../assets/home/talegramicon.webp";
import whatsappicon from "../../assets/home/whatsappicon.webp";
import skypeicon from "../../assets/home/skype.webp";
import wechaticon from "../../assets/home/wechat.webp";
import youtubeicon from "../../assets/home/youtube.webp";
import facebookicon from "../../assets/home/facebook.webp";
import instaicon from "../../assets/home/instagram.webp";
export default function Contact() {
  return (
    <div>
      <div className="home_contact w-[95%] md:w-[80%] mx-auto">
        <div className="header flex items-center font-[700] text-[32px] mb-10 mt-7">
          <h3 className="w-auto mr-4 my-6">{i18n.t("home.contact")}</h3>
          <span className="bg-[#292929] h-[2px] flex-grow"></span>
        </div>
        <div className="md:flex justify-between gap-7 gap-y-3.5">
          <div className="contact_about flex flex-col sm:flex-row justify-between gap-7 w-full md:w-[631px] p-[31px] bg-gray-200/60 rounded-3xl">
            <div className="flex flex-col ">
              <div className="address flex gap-4">
                <div className="icon">
                  <FaLocationDot />
                </div>
                <div className="text justify-between mb-3">
                  <h4 className="text-gray-400 mb-2">
                    {i18n.t("home.address")}
                  </h4>
                  <p className="text-[14px]">{i18n.t("home.address1")}</p>
                </div>
              </div>
              <div className="mail flex gap-4">
                <div className="icon">
                  <IoMailOutline />
                </div>
                <div className="text justify-between mb-3">
                  <h4 className="text-gray-400 mb-2">{i18n.t("home.mail")}</h4>
                  <p className="text-[14px]">
                    <Link to={"mailto:hi-tech_orient_medical@mail.ru"}>
                      hi-tech_orient_medical@mail.ru
                    </Link>
                  </p>
                </div>
              </div>
              <div className="address flex gap-4">
                <div className="icon">
                  <IoIosPhonePortrait />
                </div>
                <div className="text justify-between mb-3">
                  <h4 className="text-gray-400 mb-2">
                    {i18n.t("home.phoneNum")}
                  </h4>
                  <Link className="font-bold" to={"tel:998971210789"}>
                    +998 (97) 131 07 89
                  </Link>{" "}
                  <br />
                  <Link className="font-bold" to={"tel:998971210789"}>
                    +998 (97) 131 07 89
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[473px]">
              <div className="">
                <h4 className="text-[18px] font-bold mb-3">
                  {i18n.t("home.contactus")}
                </h4>
                <div className="icons grid grid-cols-4 w-[70%] sm:w-full gap-1 sm:gap-4 ">
                  <Link to={"#"} className="w-[50px]">
                    <img
                      src={telegramicon}
                      alt="telegram"
                      className="w-[50px] sm:w-full"
                    />
                  </Link>
                  <Link to={"#"} className="w-[50px]">
                    <img
                      src={whatsappicon}
                      alt="telegram"
                      className="w-[50px] sm:w-full"
                    />
                  </Link>
                  <Link to={"#"} className="w-[50px]">
                    <img
                      src={skypeicon}
                      alt="telegram"
                      className="w-[50px] sm:w-full"
                    />
                  </Link>
                  <Link to={"#"} className="w-[50px]">
                    <img
                      src={wechaticon}
                      alt="telegram"
                      className="w-[50px] sm:w-full"
                    />
                  </Link>
                </div>
              </div>
              <div className="">
                <h4 className="text-[18px] font-bold mb-3">
                  {i18n.t("home.socials")}
                </h4>
                <div className="iconslogo grid grid-cols-4 gap-1 sm:w-full sm:gap-4 w-[70%]">
                  <Link to={"#"} className="w-[50px]">
                    <img
                      src={youtubeicon}
                      alt="telegram"
                      className="w-[50px] "
                    />
                  </Link>
                  <Link to={"#"} className="w-[50px]">
                    <img
                      src={whatsappicon}
                      alt="telegram"
                      className="w-[50px] "
                    />
                  </Link>
                  <Link to={"#"} className="w-[50px]">
                    <img
                      src={facebookicon}
                      alt="telegram"
                      className="w-[50px] "
                    />
                  </Link>
                  <Link to={"#"} className="w-[50px]">
                    <img src={instaicon} alt="telegram" className="w-[50px] " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_message w-full sm:w-[519px] px-[42px] py-[33px] bg-gray-200/60  rounded-3xl">
            <h2 className="text-2xl font-bold">{i18n.t("home.application")}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <TextField
                className="w-full p-2"
                label={i18n.t("home.name")}
                variant="standard"
              />
              <TextField
                className="w-full p-2"
                label={i18n.t("home.num")}
                variant="standard"
              />
              <TextField
                className="w-full p-2"
                label={i18n.t("home.text")}
                variant="standard"
              />
              <button className="px-[30px] py-[10px] rounded-2xl bg-[#298dc6] text-white mt-5">
                {i18n.t("home.sendbtn")}
              </button>
            </form>
          </div>
        </div>
        <iframe
          className="rounded-[25px] mt-8"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.9194707851482!2d69.255519!3d41.250574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b278f47926f%3A0x58c5ded3abff2147!2sHi-tech%20Orient%20Medical!5e0!3m2!1sen!2sus!4v1720526472472!5m2!1sen!2sus"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
