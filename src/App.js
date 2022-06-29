import "./App.scss";
import AllCars from "./components/AllCars";
import Header from "./components/Header";

function App() {
  let state = {
    auto: [
      {
        id: 1,
        make: "Volkswagen",
        model: "Passat",
        year: 2002,
        color: "gold",
        engine: "1.8T",
        transmission: "MT",
        img: "https://avatars.mds.yandex.net/get-autoru-vos/1889124/5e0d017628c09e90fd77df97f2c044b1/1200x900n",
        own: true,
      },
      {
        id: 2,
        make: "Volkswagen",
        model: "Passat",
        year: 2003,
        color: "black",
        engine: "4.0",
        transmission: "AT",
        img: "https://avatars.mds.yandex.net/get-autoru-vos/2197551/b323b76cfe463be50345519342b73e64/1200x900n",
        own: true,
      },
      {
        id: 3,
        make: "Газель",
        model: "3302",
        year: 2011,
        color: "white",
        engine: "2.8",
        transmission: "MT",
        img: "https://specteh-omsk.speczakaz.info/uploads/ob/300509/imag1.jpg",
        own: true,
      },
      {
        id: 4,
        make: "Газель",
        model: "3302",
        year: 2007,
        color: "blue",
        engine: "2.7",
        transmission: "MT",
        img: "https://avatars.mds.yandex.net/get-autoru-vos/2173187/5f9a522e6d980749734406c78ad37a3c/1200x900n",
        own: true,
      },
      {
        id: 5,
        make: "ВАЗ",
        model: "2114",
        year: 2004,
        color: "grey",
        engine: "1.6",
        transmission: "MT",
        img: "https://a.d-cd.net/3c3d44u/960.jpg",
        own: true,
      },
      {
        id: 6,
        make: "ВАЗ",
        model: "2114",
        year: 2011,
        color: "white",
        engine: "1.6",
        transmission: "MT",
        img: "https://a.d-cd.net/b3a1376s-960.jpg",
        own: false,
      },
      {
        id: 7,
        make: "Hyundai",
        model: "Sonata",
        year: 2002,
        color: "silver",
        engine: "2.4",
        transmission: "AT",
        img: "http://images.gtcarlot.com/pictures/81262324.jpg",
        own: false,
      },
      {
        id: 8,
        make: "Volvo",
        model: "s40",
        year: 2005,
        color: "grey",
        engine: "2.4",
        transmission: "AT",
        img: "https://puntr.org/pictures/2006-volvo-s40-repair-manual-2.jpg",
        own: false,
      },
    ],
  };

  let counter = 0;

  state.auto.map((car) => (car.own ? counter++ : counter));

  return (
    <div className="wrapper">
      <Header counter={counter} />
      <AllCars cars={state} />
    </div>
  );
}

export default App;
