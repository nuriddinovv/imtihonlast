import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Resquet } from "../../components/axios/Axios";

export default function Search() {
  const location = useLocation();
  const [data, setData] = useState();
  const [loader, setLoader] = useState(true);
  async function searchData() {
    const queryParameters = new URLSearchParams(location.search);
    const query = queryParameters.get("query");

    try {
      const data = await Resquet(
        `product-list/?limit=300&search=${query}&parent=&categories__slug=`
      );
      setData(data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching banner data:", error);
      setLoader(false);
    }
  }
  useEffect(() => {
    searchData();
  }, [location.search]);
  return <div>Search</div>;
}
