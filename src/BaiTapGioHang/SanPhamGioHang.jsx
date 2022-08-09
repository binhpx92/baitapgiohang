import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const { prod } = this.props;
    const { themGioHang } = this.props;
    return (
      <div className="card text-white bg-dark">
        <img
          className="card-img-top"
          src={prod.hinhAnh}
          alt="Title"
          width={200}
          height={360}
        />
        <div className="card-body">
          <h4 className="card-title">{prod.tenSP}</h4>
          <button className="btn btn-danger" onClick={() => themGioHang(prod)}>
            Them vao gio hang
          </button>
        </div>
      </div>
    );
  }
}
