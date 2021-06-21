import React from "react";
import PropTypes from 'prop-types';


import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Label:{
    display: 'inline-block',
    marginBottom: 16,
    width: 200,
    fontSize: 16,
    color: '#171718',
    cursor: 'pointer',
    }, 
         
  Input: {
    color: '#171718',
    font: 'inherit',
    fontSize: '0.9rem',
    marginTop: 6,
    borderRadius: 4,
    border: '1px solid #9e9d9d',
    width: 200,
    outline: 0,
      '&:focus': {
        border: '2px solid blue',
        boxShadow: '1px 1px 3px 1px rgba(41, 107, 250, 0.14)',
        },
    }
});


// Приймаємо Подію з поля фільтра    в props: value і onChangeFilter            const Filter = ({ value, onChangeFilter }) => { 
function Filter({ value, onChangeFilter }) {
    const classes = useStyles();
 
  return (
    <div className = {classes.Label}>
      Find contacts by name
      <input className = {classes.Input}
             type="text"
             value={value}
             onChange={onChangeFilter}
             name="filter"                                     //і'мя inputa
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
             required
      />
    </div>
  );
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};

export default Filter;