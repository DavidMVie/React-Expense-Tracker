import React from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';


const ExpenseItem = ({id, description, amount, createdAt}) => {

  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
      <p>{numeral(amount / 100).format('$0,0.00')}</p>
      <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
  )
}

export { ExpenseItem as default }