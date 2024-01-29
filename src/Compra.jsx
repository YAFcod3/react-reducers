import { useReducer, useRef, useState } from "react";

const valorInicial = [
  { id: 1, nombre: "agua", cantidad: 3 },
  { id: 2, nombre: "pan", cantidad: 2 },
];

// const types={}

const reducer = (state, action) => {
  // let arr = [...state];
  // let updatedPrdouct;

  switch (action.type) {
    case "addProduct":
      // console.log(action.payload);
      return [...state, action.payload];
    // arr.push({
    //   nombre: action.payload,
    //   id: Math.floor(Math.random() * 1000),
    //   cantidad: 1,
    // });
    // console.log(arr);

    // return arr;
    case "deleteProduct":
      return state.filter((productos) => productos.id !== action.payload);
    // break;
    case "addCount":
      return state.map((producto) => {
        if (producto.id === action.payload) {
          return { ...producto, cantidad: producto.cantidad + 1 };
        }
        return producto;
      });

    case "subtractCount":
      return state.map((producto) => {
        if (producto.id === action.payload && producto.cantidad > 1) {
          return { ...producto, cantidad: producto.cantidad - 1 };
        }
        return producto;
      });

    default:
      return state;
  }
};

const Compra = () => {

  const inputName=useRef(null)
  const [miProducto, setMiProducto] = useState("");
  const [lista, dispatch] = useReducer(reducer, valorInicial);

  console.log(lista)

  // console.log(miProducto);

  return (
    <div className="compraContainer">
      <div className="compraForm">
        <label htmlFor="producto">Producto</label>
        <input
        ref={inputName}
          type="text"
          id="producto"
          value={miProducto}
          onChange={(e) => setMiProducto(e.target.value)}
        />
        <button
          onClick={() =>
            {dispatch({
              type: "addProduct",
              payload: {
                nombre: miProducto,
                id: Math.floor(Math.random() * 1000),
                cantidad: 1,
              },
            }),
            inputName.current.focus();setMiProducto("")
          }
          }
        >
          Anadir
        </button>
      </div>

      {lista?.map((producto) => (
        <div
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
          key={producto.id}
        >
          <h2>
            {producto.nombre} ({producto.cantidad} unidades)
          </h2>
          <button
            onClick={() =>
              dispatch({ type: "subtractCount", payload: producto.id })
            }
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "addCount", payload: producto.id })}
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch({ type: "deleteProduct", payload: producto.id })
            }
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default Compra;
