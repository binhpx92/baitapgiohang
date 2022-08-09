import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang } = this.props;
    const { xoaGioHang } = this.props;
    const { tangGiamSoLuong } = this.props;
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{ maxWidth: "800px", width: "800px" }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Ma SP</td>
                      <td>Hinh Anh</td>
                      <td>Ten SP</td>
                      <td>So Luong</td>
                      <td>Don Gia</td>
                      <td>Thanh Tien</td>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((prod, index) => {
                      return (
                        <tr key={index}>
                          <td>{prod.maSP}</td>
                          <td>
                            <img
                              src={prod.hinhAnh}
                              alt="..."
                              width={75}
                              height={80}
                            />{" "}
                          </td>
                          <td>{prod.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                tangGiamSoLuong(prod.maSP, true);
                              }}
                            >
                              +
                            </button>
                            {prod.soLuong}
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                tangGiamSoLuong(prod.maSP, false);
                              }}
                            >
                              -
                            </button>
                          </td>
                          <td>{prod.giaBan.toLocaleString()}</td>
                          <td>
                            {(prod.soLuong * prod.giaBan).toLocaleString()}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                xoaGioHang(prod.maSP);
                              }}
                            >
                              Xoa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tong Tien</td>
                      <td>
                        {gioHang
                          .reduce((tongTien, prod, index) => {
                            return (tongTien += prod.soLuong * prod.giaBan);
                          }, 0)
                          .toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
