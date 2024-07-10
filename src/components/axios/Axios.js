import axios from "axios";

export async function Resquet(link) {
  const savedLanguage = localStorage.getItem("language") || "uz";
  const baseUrl = "https://admin.ht-med.uz/api/v1/";
  try {
    const result = await axios.get(baseUrl + link, {
      headers: {
        "Accept-Language": savedLanguage,
      },
    });
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
