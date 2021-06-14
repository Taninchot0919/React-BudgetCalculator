import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;
  return (
    <div>
      <div className="border border-black px-3 py-2 mt-3">
        <div className="grid grid-cols-3 ">
          <p>{charge}</p>
          <p className="text-center">${amount}</p>
          <div className="flex justify-center">
            <button
              className="flex items-center mx-3"
              aria-label="edit button"
              onClick={() => {
                handleEdit(id);
              }}
            >
              <MdEdit />
            </button>
            <button
              className="flex items-center mx-3"
              aria-label="edit button"
              onClick={() => {
                handleDelete(id);
              }}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
