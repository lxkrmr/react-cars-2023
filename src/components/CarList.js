import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
