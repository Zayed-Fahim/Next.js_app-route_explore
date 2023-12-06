"use client";
import { useRef, useState, useTransition } from "react";
import Modal from "./Modal/Modal";
import { useRouter } from "next/navigation";

const ManageProducts = ({ products }) => {
  const modalRef = useRef(null);
  const router = useRouter();
  const [updateData, setUpdateData] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const isLoading = isPending || loading;

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };
  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const data = { title, price };
    if (title && price) {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5000/products/${updateData?.id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const updatedData = await res.json();
        form.reset();
        closeModal();
        setLoading(false);
        startTransition(() => {
          router.refresh();
        });
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      const deletedData = res.json();
      setLoading(false);
      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold pb-5">Manage Products</h1>
      <table
        className={`border w-full text-center ${
          isLoading ? "opacity-30" : "opacity-100"
        }`}
      >
        <thead className="border">
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border">
              <td>{product.title}</td>
              <td>{product.id}</td>
              <td>{product.price}</td>
              <td className="space-x-5">
                <button
                  onClick={() => openModal(product)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product?.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        ref={modalRef}
        updateData={updateData}
      />
    </div>
  );
};

export default ManageProducts;
