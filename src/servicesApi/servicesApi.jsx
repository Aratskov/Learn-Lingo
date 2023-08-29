import axios from "axios";

const API_KEY = "AIzaSyC0YX03IrGL1C3-UQoJ4Tvt8cPxvbTjRfE";

const baseUrl = {
  DB: "https://learnlingo-ac0c7-default-rtdb.europe-west1.firebasedatabase.app",
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  REFRESH_TOKEN: "https://securetoken.googleapis.com/v1",
};

const setBaseUrl = (url) => {
  axios.defaults.baseURL = url;
};

export const getTeachersApi = async () => {
  setBaseUrl(baseUrl.DB);
  const { data } = await axios.get("/teachers.json");
  return data;
};

export const registerUserApi = async ({
  email,
  password,
  userName: displayName,
}) => {
  setBaseUrl(baseUrl.AUTH);
  const { data } = await axios.post(
    "/accounts:signUp",
    { email, password, returnSecureToken: true },
    {
      params: {
        key: API_KEY,
      },
    }
  );
  const { localId, idToken, refreshToken } = data;

  return { displayName, email, localId, idToken, refreshToken };
};

export const loginUserApi = async ({ email, password }) => {
  setBaseUrl(baseUrl.AUTH);
  const { data } = await axios.post(
    "/accounts:signInWithPassword",
    { email, password, returnSecureToken: true },
    {
      params: {
        key: API_KEY,
      },
    }
  );

  const { localId, idToken, refreshToken } = data;
  return { localId, email, idToken, refreshToken };
};

export const getUserDataApi = async (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  const { data } = await axios.post(
    "/accounts:lookup",
    { idToken },
    {
      params: {
        key: API_KEY,
      },
    }
  );

  const { localId, email } = data.users[0];
  return { localId, email };
};

export const addFavoritesAPI = async ({ favorite, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  const { data } = await axios.post(
    `/users/${localId}/favorite.json`,
    favorite,
    { params: { auth: idToken } }
  );

  return { ...favorite, id: data.name };
};

export const getFavoritesAPI = async ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  const { data } = await axios.get(`/users/${localId}/favorite.json`, {
    params: { auth: idToken },
  });
  const res = Object.entries(data).map(([id, favorite]) => ({
    ...favorite,
    id,
  }));

  return res;
};

export const removeFavoriteApi = async ({ id, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  console.log(id);
  const { data } = await axios.delete(`/users/${localId}/favorite/${id}.json`, {
    params: {
      auth: idToken,
    },
  });

  console.log("data remove", data);
  return data;
};

export const refreshTokenAPI = async (refToken) => {
  setBaseUrl(baseUrl.REFRESH_TOKEN);
  const { data } = await axios.post(
    "/token",
    { grant_type: "refresh_token", refresh_token: refToken },
    { params: { key: API_KEY } }
  );

  const { id_token: idToken, refresh_token: refreshToken } = data;
  return { idToken, refreshToken };
};
