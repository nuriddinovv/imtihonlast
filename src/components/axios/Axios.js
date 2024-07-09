import axios from "axios";

export async function Resquet(link) {
  const savedLanguage = localStorage.getItem("language") || "uz";

  try {
    const result = await axios.get(link, {
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
