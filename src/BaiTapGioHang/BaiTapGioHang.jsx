import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalGioHang from "./ModalGioHang";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
          soLuong: 1,
        },
      ],
    };
  }

  themGioHang = (prod) => {
    // console.log(prod)
    let spGioHang = {
      maSP: prod.maSP,
      tenSP: prod.tenSP,
      giaBan: prod.giaBan,
      hinhAnh: prod.hinhAnh,
      soLuong: 1,
    };
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  xoaGioHang = (maSP) => {
    // var gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    // if (index !== -1) {
    //   gioHangCapNhat.splice(index, 1);
    // }

    var gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tangGiamSoLuong = (msSP, tangGiam) => {
    // tangGiam === true: tang so luong, false giam so luong
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === msSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tongSoLuong, prod, index) => {
      return (tongSoLuong += prod.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center text-success">Bai Tap Gio Hang</h3>
        <ModalGioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <div className="text-end">
          <span
            className="text-danger display-4"
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Gio hang ({tongSoLuong}){" "}
          </span>
        </div>
        <DanhSachSanPham themGioHang={this.themGioHang} />
      </div>
    );
  }
}
