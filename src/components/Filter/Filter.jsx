import { FilterBox, Label, Input } from './Filter.styled';
import { FiSearch } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterBox>
      <Label htmlFor="filter">
        <FiSearch color="#ff6c00" />
        Find contact by name
      </Label>
      <Input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      />
    </FilterBox>
  );
}
