import axios from "axios";
import { API_URL_NEW } from "../const";

export async function fetchExpenses({ token }) {
  try {
    const data = await axios.get(API_URL_NEW, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postExpense({ token, expense }) {
  try {
    const data = await axios.post(API_URL_NEW, expense, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function patchExpense({ token, id, expense }) {
  if (!id) {
    throw new Error("ID не передан в patchExpense!");
  }

  try {
    const response = await axios.patch(
      `${API_URL_NEW}/${id}`,
      expense,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Ошибка PATCH запроса:",
      error.response?.data || error.message
    );
    throw new Error(error.message);
  }
}

export async function deleteExpense({ token, id }) {
  try {
    const response = await axios.delete( `${API_URL_NEW}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
     return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

