import { consumirApi } from "./llamadasApis.js";

// const ctx = document.getElementById("myChart");

// const consumirApi = async () => {
//   const resp = await axios.get("https://ucamp-api.onrender.com/api/v1/scores");
//   //   console.log(resp.data.data);
//   pintarGrafica(resp.data.data);
// };

// const pintarGrafica = (datos) => {
//   const calificaciones = datos.map((dato) => {
//     return dato.calificacion;
//   });

//   const nombres = datos.map((dato) => {
//     return dato.nombre;
//   });

//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: nombres,
//       datasets: [
//         {
//           label: "# of Votes",
//           data: calificaciones,
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// };

window.addEventListener("load", consumirApi());
// consumirApi();
