import Car from "./Car";
import "../components/AllCars.scss";

function AllCars(props) {
  let cars = props.cars.auto.map((car) => (
    <Car
      key={car.id}
      make={car.make}
      model={car.model}
      year={car.year}
      color={car.color}
      engine={car.engine}
      transmission={car.transmission}
      img={car.img}
    />
  ));
  return (
    <div className="cars">
      <h2 className="cars__title">Auto</h2>
      <div className="cars__items">{cars}</div>
    </div>
  );
}

export default AllCars;
