import style from './ContactFilter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter} from '../../serviceAPI/filterSlice'
import { getFilter } from '../../serviceAPI/filterSlice';

export default function Filter () {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();


  return (
    <label>
      <p className={style.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.currentTarget.value))}
        className={style.input}
      ></input>
    </label>
  );
};

