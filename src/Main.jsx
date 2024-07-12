import React from "react";
import ReactDOM from "react-dom/client";
import { heroes } from "./data/heroes";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/*<CounterApp value={1}/> 
   <Posts/>*/}
    {/*{ users.map((u, i) => {
      return (
        <div key={ i }>
          <h1>{ u.name }</h1>
          <img src={ u.image }/>
        </div>
      );
    })}*/}
    <App/>
  </>
);

//objects
const persona = {
  name: "Pepe",
  lastname: "Ortega",
  email: "pepe@correo.com",
  addres: {
    street: 73,
    number: 89,
    city: "PopaYork",
  },
};
console.log(persona);

const users = [
  {
    name: "Rango",
    image: "https://robohash.org/user1",
  },
  {
    name: "Ler",
    image: "https://robohash.org/user2",
  },
  {
    name: "Toin",
    image: "https://robohash.org/user7",
  },
];

//arrays
const array = [1, 2, 3, 4];
console.log(array);

const array2 = [...array, 5]; //spreed operator
console.log(array2);

//map method
const array3 = array2.map(function (n) {
  return n * 2;
});
console.log(array3);

//functions
const getUser = (name) => ({ uid: "12345", username: name });
const user1 = getUser("Richard");
console.log(user1);

//Destructuring
const person = {
  name: "Ler",
  edad: 22,
  clave: "123",
};

const useContext = ({ name, edad, clave }) => {
  return {
    namePerson: name,
    anios: edad,
    latlng: {
      lat: 12.3434,
      lng: -14.7878,
    },
  };
};

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("hello world");
    },
  ];
};

const [nombre, setNombre] = useState("Ler");
console.log(nombre);
setNombre();

const {
  namePerson,
  anios,
  latlng: { lat, lng },
} = useContext(person);
console.log(namePerson, anios);
console.log(lat, lng);

const getElementById = (id) => {
  return heroes.find((e) => e.id === id);
};

const getElementByOwner = (owner) => {
  return heroes.filter((e) => e.owner === owner);
};

console.log(getElementById(2));
console.log(getElementByOwner("DC"));
