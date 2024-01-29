import { useReducer, useState } from "react";

const currentTime = new Date();
const month = currentTime.getMonth(); //0,1,2,3,4,5,6,7,8,9,10,11
const year = currentTime.getFullYear();

//!initial value
const valorInicial = { mes: month, anio: year };

//!types
const types = {
  masM: "masM",
  menosM: "menosM",
  masY: "masY",
  menosY: "menosY",
};
//!reducer


const reducer = (state, action) => {

  
  console.log(action);
  // console.log(action.type)
  // console.log(action.payload)

  let newMonth = state.mes;
  let newYear = state.anio;

  switch (action.type) {
    // case "masM":
    case types.masM:
      // console.log(action.type)
      //si esta en diciembre,volver a enero si le doy +
      // return { mes: state.mes == 11 ? 0 : state.mes + 1, anio: state.anio };
      newMonth = newMonth == 11 ? 0 : newMonth + 1;
      break;
    case types.menosM:
      //si esta en enero,ir  a diciembre si le doy -
      // return { mes: state.mes == 0 ? 11 : state.mes - 1, anio: state.anio };
      newMonth = newMonth == 0 ? 11 : newMonth - 1;
      break;
    case types.masY:
      newYear += action.payload;
      break;
    case types.menosY:
      newYear -= action.payload;
      break;
  }

  return { mes: newMonth, anio: newYear };
};

//!meses
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//!component
const Calendario = () => {
  // const [fecha, dispatch] = useReducer(reducer, {m:month,a:year})

  const [fecha, dispatch] = useReducer(reducer, valorInicial);

  const [unidades, setUnidades] = useState(1);

  return (
    <div className="calendario">
      <div
        style={{
          marginBottom: "40px",
          fontSize: "30px",
          color:
            (fecha.mes <= month && fecha.anio <= year) || fecha.anio <= year
              ? "red"
              : "green",
        }}
      >
        {meses[fecha.mes]} - {fecha.anio}
      </div>

      <div className="controlCal"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div 
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          {/* boton - */}
          {/* <button onClick={() => dispatch({ type: "menosM" })}>-</button> */}
          <button  onClick={() => dispatch({ type: types.menosM })}>-</button>
          {/* boton + */}
          <span>Meses:</span>

          <button onClick={() => dispatch({ type: types.masM })}>+</button>
        </div>

        {/* anios */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {/* boton - */}
          <button
            onClick={() =>
              dispatch({ type: types.menosY, payload: Number(unidades) })
            }
          >
            -
          </button>
          <input
            min="1"
            style={{ width: "30px" }}
            type="number"
            value={unidades}
            onChange={(e) => setUnidades(e.target.value)}
          />
          <span>Anio:</span>
          {/* boton + */}

          <button
            onClick={() =>
              dispatch({ type: types.masY, payload: Number(unidades) })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
