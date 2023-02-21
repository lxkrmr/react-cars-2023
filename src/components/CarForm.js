import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return state.form;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    dispatch(changeCost(event.target.value));
  };

  return (
    <div className="panel is-link">
      <p className="panel-heading">Add Car</p>
      <div className="panel-block">
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <div className="field">
              <label className="label">Name</label>
              <input
                className="input is-expanded"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="field">
              <label className="label">Cost</label>
              <input
                type="number"
                className="input is-expanded"
                value={cost || ''}
                onChange={handleCostChange}
              />
            </div>
          </div>
          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarForm;
