"use client";
import React, { useRef, useState, useTransition } from "react";
import Modal from "./Modal/Modal";
import { useRouter } from "next/navigation";
import useCategories from "@/hooks/useCategories";
import "@/app/globals.css";

const ManageCategories = () => {
  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);
  const { categories, error, isLoading, isValidating, mutate } =
    useCategories();
  //   const router = useRouter();
  //   const [isPending, startTransition] = useTransition();
  //   const [loading, setLoading] = useState(false);
  //   const isLoading = isPending || loading;

  const openModal = (category) => {
    setUpdateData(category);
    modalRef.current.showModal();
  };
  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.category_name.value;
    const id = form.category_Id.value;
    const data = {
      name,
      id,
    };

    if (name && id) {
      try {
        const res = await fetch(
          `http://localhost:5000/categories/${updateData?.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const updatedData = res.json();
        mutate();
        form.reset();
        closeModal();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/categories/${id}`, {
        method: "DELETE",
      });
      const updatedData = res.json();
      mutate();
      closeModal();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold pb-5">Manage Categories</h1>
      {isLoading ? (
        <div className="flex justify-center items-center w-full">
          <div className="loader_1 "></div>
        </div>
      ) : (
        <table
          className={`w-2/3 border text-left ${
            isValidating ? "opacity-30" : "opacity-100"
          }`}
        >
          <thead>
            <tr>
              <th className="px-3">Category Name</th>
              <th className="px-3 text-center">Category ID</th>
              <th className="px-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border">
                <td className="px-3">{category.name}</td>
                <td className="px-3 text-center">{category.id}</td>
                <td className="space-x-3 text-center">
                  <button
                    onClick={() => openModal(category)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category?.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ManageCategories;
