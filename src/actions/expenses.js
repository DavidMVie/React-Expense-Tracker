import database from '../firebase/firebase';


export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
}

export const startAddExpense = (expense) => {

  return  (dispatch) => {
  database.ref('expenses')
    .push(expense)
    .then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}


export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id))
    })
  }
} 

const editExpense = (id, updates) => {

  return {
    type: 'EDIT_EXPENSE',
    id, 
    updates
  }
}

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

// SET_EXPENSES
export const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES',
    expenses
  }

};

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
    .once('value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};

