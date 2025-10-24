import { useCallback, useState, useEffect, useContext } from "react";
import {
  fetchExpenses,
  postExpense,
  patchExpense,
  deleteExpense,
} from "../services/api";
import { toast } from "react-toastify";
import { textErrors } from "../const";
import { ExpenseContext } from "./ExpenseContext";
import {AuthContext} from "../../src/context/AuthContext"

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  const {user} = useContext(AuthContext);
  
  const token = user.token;
  // const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

  const getExpenses = useCallback(async () => {
    try {
      const data = await fetchExpenses({ token });
      if (data) setExpenses(data);
    } catch (error) {
      setError(error.message);
    }
  }, [token]);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const addNewExpense = async ({ expense }) => {
    try {
      await postExpense({ token, expense });
      await getExpenses();
    } catch (error) {
      console.error(textErrors.addExpenseError, error);
      toast.error(textErrors.addExpenseError);
    }
  };

  const editExpense = async ({ expense, id }) => {
    try {
      await patchExpense({ token, id, expense });
      await getExpenses();
    } catch (error) {
      toast.error(textErrors.updateExpenseError);
      console.error(textErrors.updateExpenseError, error);
    }
  };

  const deleteExpenseByID = async ({ id }) => {
    try {
      await deleteExpense({ token: token, id });
      await getExpenses();
    } catch (error) {
      toast.error(textErrors.deleteExpenseError);
      console.error(textErrors.deleteExpenseError, error);
    }
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, error, addNewExpense, editExpense, deleteExpenseByID }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
