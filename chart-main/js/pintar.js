const ctx = document.getElementById("myChart");

const pintarGrafica = (datos) => {
  const calificaciones = datos.map((dato) => {
    return dato.calificacion;
  });

  const nombres = datos.map((dato) => {
    return dato.nombre;
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: nombres,
      datasets: [
        {
          label: "# of Votes",
          data: calificaciones,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export { pintarGrafica };
