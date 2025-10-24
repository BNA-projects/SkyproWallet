import axios from "axios";
import { API_URL, RoutesApp } from "../const";

export async function signIn(userData) {
  try {
    const data = await axios.post(`${API_URL}${RoutesApp.LOGIN}`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },

      }
    );
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

