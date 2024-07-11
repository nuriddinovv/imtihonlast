import React, { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Resquet } from "../../components/axios/Axios";
import Spinner from "../../components/spinner/Spinner";
import { Link, NavLink } from "react-router-dom";
import Card from "../../components/searchCard/Card";
import i18n from "../../i18n";

export default function Catalog() {
  const lang = localStorage.getItem("language") || "uz";
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Resquet("category-list/");
        setData(data.results);
      } catch (error) {
        console.error("Error fetching category list", error);
      } finally {
        setLoader(false);
      }
    }
    async function cardData() {
      try {
        const data = await Resquet(
          "product-list/?limit=9&search=&parent=radiologiya&categories__slug="
        );
        setCardData(data.results);
      } catch (error) {
        console.error("Error fetching category list", error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
    cardData();
  }, [i18n.language]);
  console.log(data);
  return (
    <div className="w-[80%] mx-auto flex gap-6 catalog">
      <div className="hidden lg:block">
        {loader ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <Spinner />
          </div>
        ) : data.length > 0 ? (
          <div>
            {data.map((item) => (
              <Accordion key={item.id} className="my-5 border-none shadow-none">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel-content"
                  id={`panel-header-${item.id}`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-[45px]"
                      src={item.image}
                      alt={item.name}
                    />
                    <p>{item.name}</p>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  {item.child.map((child) => {
                    return (
                      <ul key={child.id}>
                        <li className="p-1">
                          <NavLink
                            className="m-2 text-[14px] text-[#555555] hover:text-red-500"
                            to={"#"}
                          >
                            {child.name}
                          </NavLink>
                        </li>
                      </ul>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        ) : (
          <div>Ma'lumotlar topilmadi</div>
        )}
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {cardData?.map((item) => {
          return (
            <Card
              key={item.id}
              image={item.poster_url}
              title={item.title}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
}
