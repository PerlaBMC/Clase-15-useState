import { pintarGrafica } from "./pintar.js";

const consumirApi = async () => {
  const resp = await axios.get("https://ucamp-api.onrender.com/api/v1/scores");
  //   console.log(resp.data.data);
  pintarGrafica(resp.data.data);
};

export { consumirApi };
