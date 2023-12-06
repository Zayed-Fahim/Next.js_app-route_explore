import React, { forwardRef, useRef } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ closeModal, updateData, handleSubmit }, ref) => {
  const formRef = useRef(null);
  return (
    <dialog ref={ref} className="p-5 rounded">
      <div className="flex justify-end items-center">
        <button
          onClick={() => {
            closeModal();
            formRef.current.reset();
          }}
        >
          <IoClose />
        </button>
      </div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category_name"
          >
            Category Name
          </label>
          <input
            className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="category_name"
            defaultValue={updateData?.name}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category_Id"
          >
            Category ID
          </label>
          <input
            className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            readOnly
            name="category_Id"
            defaultValue={updateData?.id}
          />
        </div>
        <div className="flex justify-end items-center">
          <button
            className="bg-white py-1 px-2 drop-shadow-md rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default forwardRef(Modal);
