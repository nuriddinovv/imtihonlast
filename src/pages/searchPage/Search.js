import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Resquet } from "../../components/axios/Axios";
import Card from "../../components/searchCard/Card";
import Spinner from "../../components/spinner/Spinner";
import i18n from "../../i18n";

export default function Search() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  async function searchData() {
    const queryParameters = new URLSearchParams(location.search);
    const query = queryParameters.get("query");

    try {
      const response = await Resquet(
        `product-list/?limit=300&search=${query}&parent=&categories__slug=`
      );
      setData(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    searchData();
  }, [i18n.language, location.search]);

  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <Spinner />
        </div>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[80%] mx-auto">
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.poster_url}
              title={item.title}
              status={item.status}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center flex-col justify-between mt-4 min-h-[50vh]">
          <p>{i18n.t("search.noresult")}</p>
          <img
            className="w-[324px] h-[324px]"
            src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FnFcIlLI3sg%201.png&w=384&q=75"
            alt="No results found"
          />
        </div>
      )}
    </>
  );
}
