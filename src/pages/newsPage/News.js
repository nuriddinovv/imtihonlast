import { Pagination } from "@mui/material";
import i18n from "../../i18n";

export default function News() {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <h1 className="my-8 text-[18px] sm:text-[28px]">
        <Pagination count={2} variant="outlined"/>
        {i18n.t("news.title")}
      </h1>
    </div>
  );
}
