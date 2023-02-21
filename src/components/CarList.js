import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    console.log(form.name);

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const isSimilarToNewEntry =
      name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={car.id}
        className={`panel ${isSimilarToNewEntry && 'is-warning'}`}
      >
        <p className="panel-heading">
          {car.name} - ${car.cost}
          <button
            onClick={() => handleCarDelete(car)}
            className="button is-danger"
          >
            Delete
          </button>
        </p>
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
