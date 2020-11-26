import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ManageShowtime() {
  const listChair = useSelector((state) => state.bookingReducer.danhSachGhe);

  const renderChair = () => {
    return listChair?.map((ghe, index) => {
      return <p>{ghe.tenGhe}</p>;
    });
  };
  return (
    <div className="manageruser dashboard">
      <h1>Quản lý Rạp chiếu</h1>
    </div>
  );
}
