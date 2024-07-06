import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [modalData, setModalData] = useState();

  const toggleLanguage = () => {
    const newLang = i18n.language === "uz" ? "ru" : "uz";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://admin.ht-med.uz/api/v1/category-list/"
        );
        setModalData(result.data.results);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="nav">
      <div className="nav_container mx-auto">
        <div className="nav_container_content max-w-[80%] mx-auto flex text-white justify-between items-center">
          <div className="nav_container_content_logo w-[270px] h-[145px] overflow-hidden flex justify-center items-center">
            <Link to={"/"}>
              <img
                src="https://ht-med.uz/_next/image?url=%2Fimg%2Flogo.png&w=384&q=75"
                className="w-[270px]"
              />
            </Link>
          </div>
          <div className="nav_container_content_link">
            <ul className="flex gap-[20px] items-center">
              <li>
                <NavLink to="/">{t("navbar.mainpage")}</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">{t("navbar.catalog")}</NavLink>
              </li>
              <li className="relative flex aboutlink cursor-pointer items-center">
                {t("navbar.about")}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <div className="aboutDropdown">
                  <ul>
                    <li>
                      <Link to={"/"}>{t("navbar.company")}</Link>
                    </li>
                    <li>
                      <Link to={"/"}>{t("navbar.winning")}</Link>
                    </li>
                    <li>
                      <Link to={"/"}>{t("navbar.team")}</Link>
                    </li>
                    <li>
                      <Link to={"/"}>{t("navbar.galery")}</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink to="/news">{t("navbar.news")}</NavLink>
              </li>
              <li>
                <NavLink to="/blog">{t("navbar.blog")}</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">{t("navbar.contacts")}</NavLink>
              </li>
              <li
                onClick={toggleLanguage}
                className="cursor-pointer flex items-center gap-[0.5rem]"
              >
                <img
                  src={
                    i18n.language === "uz"
                      ? "https://ht-med.uz/_next/image?url=%2Fimg%2Fuz.png&w=32&q=75"
                      : "https://ht-med.uz/_next/image?url=%2Fimg%2Fru.png&w=32&q=75"
                  }
                  alt=""
                />
                {t("navbar.language")}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav_search max-w-[80%] mx-auto flex items-center gap-4">
        <div className="nav_search_catalog">
          <button
            className="font-[500]"
            onClick={() => {
              setOpenMenuModal(true);
            }}
          >
            <HiMiniBars3BottomLeft />
            {t("home.catalog")}
          </button>
        </div>
        <div className="nav_search_input w-full ">
          <form
            className="flex "
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="w-full"
              placeholder={t("home.search")}
              type="text"
            />
            <button>
              <FiSearch />
            </button>
          </form>
        </div>
      </div>

      {openMenuModal && (
        <div
          onClick={() => {
            setOpenMenuModal(false);
          }}
          className="menuModal absolute top-0 w-[100vw] h-[100vh] flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="menuModalContent w-[80%] mx-auto bg-white rounded-lg px-[20px] py-[24px] z-50"
          >
            <div className="menuModalContentHeader text-end ">
              <span
                className="cursor-pointer flex justify-end mb-3 text-[24px]"
                onClick={() => {
                  setOpenMenuModal(false);
                }}
              >
                <IoMdClose />
              </span>
            </div>
            <div className="menuModalContentRow gap-4">
              {modalData?.map((item) => (
                <div
                  key={item.id}
                  className="card1 p-[20px] flex items-center justify-center gap-4 cursor-pointer rounded-[20px] hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-[80px] h-[80px] overflow-hidden">
                    <img src={item.image} className="w-full" alt="" />
                  </div>
                  <p className="flex text-center items-center font-[600]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
