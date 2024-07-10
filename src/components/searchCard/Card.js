import { useTranslation } from "react-i18next";

export default function Card({ image, title, status }) {
  const { t } = useTranslation();

  return (
    <div className="card rounded-3xl border border-solid border-gray-300 cursor-pointer">
      <img className="w-auto mx-auto h-[220px]" src={image} alt="" />
      <div className="cardBody p-4 flex flex-col h-[127px] justify-between ">
        <p className="text-[14px] font-semibold">{title}</p>
        {status === "sotuvda" ? (
          <p className="flex gap-2 text-[12px] text-gray-00 items-center">
            <span className=" w-[10px] h-[10px] rounded-full bg-green-500 "></span>
            {t("search.sotuvda")}
          </p>
        ) : (
          <p className="flex gap-2 text-[12px] text-gray-00 items-center">
            <span className=" w-[10px] h-[10px] rounded-full bg-blue-500"></span>
            {t("search.zakaz")}
          </p>
        )}
      </div>
    </div>
  );
}
