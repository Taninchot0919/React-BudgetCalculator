import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  isEdit,
}) => {
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="mr-10 ">
            <label>Charge</label> <br />
            <input
              type="text"
              placeholder="e.g. rent"
              className="bg-transparent border-b-2 border-black px-2 py-1"
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div>
            <label>Amount</label> <br />
            <input
              type="number"
              placeholder="e.g. 100"
              className="bg-transparent border-b-2 border-black px-2 py-1"
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>
        <div className="flex item-center justify-center mt-5">
          <button className="px-3 py-2 bg-red-500 flex items-center text-white">
            {isEdit ? "Edit" : "Send"} <MdSend className="ml-3" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
