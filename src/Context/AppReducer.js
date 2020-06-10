export default (state, action) => {
  const { type, payload } = action;
  // const newState = {..state};
  switch (type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== payload)
      }
    case 'ADD_ITEMS':
      payload.id = Math.random(7) + new Date().getTime()
      // console.log('Payload ==> ', payload)
      return {
        ...state,
        transactions: [payload, ...state.transactions]
      }
    default:
      return state;
  }
}