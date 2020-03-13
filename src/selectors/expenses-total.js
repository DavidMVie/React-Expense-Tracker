
export default (expenses) => {
  return expenses
  .map((expense) => expense.amount)
  .reduce((sum, el) => {
    return sum + el
  }, 0)
}
