import axios from "axios";

export async function Resquet(link) {
  try {
    const result = await axios.get(link);
    return result.data;
  } catch (error) {
    console.error(error);
  }
}
