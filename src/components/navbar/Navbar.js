import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  console.log(i18n);
  const toggleLanguage = () => {
    const newLang = i18n.language === "uz" ? "ru" : "uz";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="nav">
      <div className="nav_container mx-auto">
        <div className="nav_container_content max-w-[1200px] mx-auto flex text-white justify-between items-center">
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
    </div>
  );
}
