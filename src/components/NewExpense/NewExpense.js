import React, { useState } from "react";
import "../NewExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) => {
  const [IsEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    prop.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const Startedithandler = () => {
    setIsEditing(true);
  };
  const Stopedithandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!IsEditing && <button onClick={Startedithandler}>Add Button</button>}
      {IsEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopEdit={Stopedithandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
