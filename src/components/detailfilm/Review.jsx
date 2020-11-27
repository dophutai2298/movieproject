import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import admin from "../../assets/admin.jpg";

import {
  addComment,
  deleteComment,
  fetchComment,
} from "../../redux/actions/comment.action";

export default function Review(props) {
  const { maPhim } = props;
  const listComment = useSelector((state) => state.commentReducer.comment);
  const dispatch = useDispatch();
  const taiKhoan = useSelector((state) => state.userReducer.credentials);

  const [state, setState] = useState({
    hoTen: "",
    binhLuan: "",
    maPhim: maPhim,
    taiKhoan: "",
  });

  function handleChange(event) {
    let { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    dispatch(addComment(state));
  }

  // lấy user từ local
  const user1 = JSON.parse(localStorage.getItem("creadentials"));

  function handleDelete(id) {
    // duyệt
    let index = listComment.findIndex((comment) => comment.id === id);

    // nuế tìm thấy
    if (index !== -1) {
      // tìm đúng của mình
      if (listComment[index].taiKhoan === user1.taiKhoan) {
        dispatch(deleteComment(id, index));
      } else {
        alert("không phải tin của bạn");
      }
    } else {
      alert("không phải tin của bạn");
    }
  }

  useEffect(() => {
    dispatch(fetchComment());
  }, []);

  const renderComment = () => {
    return listComment.map((user, index) => {
      if (user.maPhim === maPhim) {
        return (
          <div className="media media-comment" key={index}>
            <div className="media-avatar">
              <img src={admin} alt="admin" />
            </div>
            <div className="media-body">
              <span>{user.hoTen}</span>
              {user1 ? (
                <button
                  style={{ float: "right", fontSize: "10px" }}
                  className="btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Xóa
                </button>
              ) : (
                ""
              )}
              <div className="media-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>{user.binhLuan}</p>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="introduce__title1__content2">
      <div className="avaluate">
        <div className="media-danhGia">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                name="binhLuan"
                style={{ padding: "25px" }}
                className="form-control"
                placeholder="ý kiến đánh giá"
                onChange={handleChange}
              />
              <div className="input-group-append">
                {taiKhoan !== null ? (
                  <button
                    onClick={() => {
                      setState({
                        ...state,
                        hoTen: taiKhoan.hoTen,
                        taiKhoan: taiKhoan.taiKhoan,
                      });
                    }}
                    className="input-group-text"
                  >
                    bình luận
                  </button>
                ) : (
                  <span className="input-group-text">bình luận</span>
                )}
              </div>
            </div>
          </form>
        </div>
        {renderComment()}
      </div>
    </div>
  );
}
