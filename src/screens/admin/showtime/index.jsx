import React, { useEffect } from "react";
import HeaderAdmin from "../../../components/admin/header";
import ManageShowtime from "../../../components/admin/manageShowtime/ManageShowtime";
import { useParams } from "react-router-dom";
import MenuAdmin from "../../../components/admin/menu/MenuAdmin";
import { useDispatch } from "react-redux";
import { fetchTicketRoom } from "../../../redux/actions/booking.actions";
export default function ShowtimeScreen() {
  const dispatch = useDispatch();
  const { maLichChieu } = useParams();
  useEffect(() => {
    // dispatch(fetchTicketRoom(maLichChieu));
    // console.log(maLichChieu);
  }, []);
  return (
    <div>
      <HeaderAdmin />
      <div style={{ display: "flex" }}>
        <MenuAdmin />
        <ManageShowtime />
      </div>
    </div>
  );
}
