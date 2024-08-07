import { createStore, combineReducers } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "account/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 300 });
// console.log(store.getState());

// store.dispatch({
//     type: "account/requestLoan",
//     payload: { amount: 1000, purpose: "Buy a car" }
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

const deposit = (amount) => ({
  type: "account/deposit",
  payload: amount,
});

const withdraw = (amount) => ({
  type: "account/withdraw",
  payload: amount,
});

const requestLoan = (amount, purpose) => ({
  type: "account/requestLoan",
  payload: { amount, purpose },
});

const payLoan = () => ({
  type: "account/payLoan",
});

store.dispatch(deposit(1000));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a watermelon"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

const createCustomer = (fullName, nationalID) => ({
  type: "customer/createCustomer",
  payload: { fullName, nationalID, createdAt: new Date().toISOString() },
});

const updateName = (fullName) => ({
  type: "account/updateName",
  payload: fullName,
});

store.dispatch(createCustomer("Myles", "090909"));
store.dispatch(deposit(50));
console.log(store.getState());
