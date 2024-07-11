import { Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.webp";
import i18n from "../../i18n";
import { BiSupport } from "react-icons/bi";
import facebook from "../../assets/footer/facebook.png";
import telegram from "../../assets/footer/telegram.png";
import instagram from "../../assets/footer/instagram.png";
import youtube from "../../assets/footer/youtube.png";
export default function Footer() {
  return (
    <div className="">
      <div className="footer py-[63px] text-white">
        <div className=" w-[95%] md:w-[80%] mx-auto block md:grid grid-cols-3 ">
          <div
            className="flex flex-col items-center "
            style={{ borderBottom: "1px dotted white" }}
          >
            <img className="w-[200px] md:w-[270px]" src={logo} alt="" />
            <p className=" font-semibold text-center md:text-start mb-2">
              {i18n.t("footer.title")}
            </p>
            <div className=" gap-3 hidden  sm:flex p-5 bg-white/10 rounded-2xl">
              <span className="text-green-500 text-[40px]">
                <BiSupport />
              </span>
              <div className="">
                <p className="text-[14px]">{i18n.t("footer.support")}</p>
                <Link className="text-[20px]" to={"tel:999999999"}>
                  +998 (99) 311 25 52
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col  mt-8"
            style={{ borderBottom: "1px dotted white" }}
          >
            <h1 className="text-[20px] ">{i18n.t("footer.menu")}</h1>
            <div className="grid grid-rows-5 grid-cols-2 gap-[15px] mt-3">
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.mainpage")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.catalog")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.about")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.news")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.blog")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.contacts")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.company")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.winning")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.team")}
                </Link>
              </span>
              <span>
                <Link className="" style={{ borderBottom: "1px dotted green" }}>
                  {i18n.t("footer.galery")}
                </Link>
              </span>
            </div>
          </div>
          <div
            className="flex flex-col mt-8"
            style={{ borderBottom: "1px dotted white" }}
          >
            <h1 className="text-[20px] ">{i18n.t("footer.newstext")}</h1>
            <p>{i18n.t("footer.newsp")}</p>
            <div className="icons relative h-[200px] w-[200px] mx-auto">
              <Link to={"#"} className="absolute left-[55px]">
                <img className="w-[88px]" src={facebook} alt="" />
              </Link>
              <Link to={"#"} className="absolute top-[45px]">
                <img className="w-[88px]" src={telegram} alt="" />
              </Link>
              <Link to={"#"} className="absolute top-[45px] left-[110px]">
                <img className="w-[88px]" src={youtube} alt="" />
              </Link>
              <Link to={"#"} className="absolute top-[45%] left-[55px]">
                <img className="w-[88px]" src={instagram} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
