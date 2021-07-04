import { NavLink } from "react-router-dom";
import product7 from "../images/ddress2.jpeg";
import product8 from "../images/shop/dBlack.jpg";
function Tabs() {
  return (
    <div className="container">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Categories
          </li>
        </ol>
      </nav>

      <div>
        {/* <div className="container"> */}
        <ul
          className="nav nav-pills mb-3 bg-light border-bottom"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs active"
              id="pills-product-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-product"
              type="button"
              role="tab"
              aria-controls="pills-product"
              aria-selected="true"
            >
              Products
            </button>
          </li>
          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs"
              id="pills-address-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-address"
              type="button"
              role="tab"
              aria-controls="pills-address"
              aria-selected="false"
            >
              Address
            </button>
          </li>
          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs"
              id="pills-summary-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-summary"
              type="button"
              role="tab"
              aria-controls="pills-summary"
              aria-selected="false"
            >
              Summary
            </button>
          </li>
        </ul>

        <div className="tab-content pb-3" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-product"
            role="tabpanel"
            aria-labelledby="pills-product-tab"
          >
            <div className="row mt-3">
              <p className="fs-4">Chosen products</p>
            </div>
            <table style={{ width: "100%" }}>
              <tr className="trTop">
                <th></th>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>

              <tr className="productCart">
                <td>
                  <img
                    className=" img-fluid tdImage"
                    src={product7}
                    alt="product image"
                  />
                </td>
                <td>Floral dress</td>
                <td className="qF">
                  <span className="quantity">1</span>
                  <button className=" btn btn-danger fw-bold btnPlus">+</button>
                  <button className=" btn btn-danger fw-bold btnMinus">
                    -
                  </button>
                </td>

                <td>
                  <span className="price">19.99</span>
                  <span>EUR</span>
                </td>
                <td>
                  <span className="totalOneProduct">19.99</span>
                  <span>EUR</span>
                </td>
                <td>
                  {" "}
                  <button className=" btn btn-danger fw-bold remove">
                    Remove
                  </button>{" "}
                </td>
              </tr>

              <tr className="productCart">
                <td>
                  {" "}
                  <img
                    className=" img-fluid tdImage
                    "
                    src={product8}
                    alt="product image"
                  />
                </td>
                <td>Classic black dress</td>
                <td className="qB">
                  <span className="quantity">1</span>
                  <button className=" btn btn-danger fw-bold btnPlus">+</button>
                  <button className=" btn btn-danger fw-bold btnMinus">
                    -
                  </button>
                </td>

                <td>
                  <span className="price">22.99</span>
                  <span>EUR</span>
                </td>
                <td>
                  <span className="totalOneProduct">22.99</span>
                  <span>EUR</span>
                </td>
                <td>
                  {" "}
                  <button className=" btn btn-danger fw-bold remove">
                    Remove
                  </button>{" "}
                </td>
              </tr>
            </table>

            <h3 className="bigTotal">
              Total: <span className="totalAll">_</span> EUR
            </h3>

            <div className="epmty5"></div>
          </div>

          {/* SECOND TAB */}
          <div
            className="tab-pane fade"
            id="pills-address"
            role="tabpanel"
            aria-labelledby="pills-address-tab"
          >
            <div className="row mt-3">
              <div className="col-6">
                <p>Shipping address</p>
                <textarea
                  style={{
                    resize: "both",
                    height: "200px",
                    width: "300px",
                    magrin: "20px",
                  }}
                />
              </div>
              <div className="col-6">
                <p>Shipping address</p>
                <textarea
                  style={{
                    resize: "both",
                    height: "200px",
                    width: "300px",
                    magrin: "20px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* THIRD TAB */}
          <div
            className="tab-pane fade"
            id="pills-summary"
            role="tabpanel"
            aria-labelledby="pills-summary-tab"
          >
            <div className="row mt-3">
              <p className="fs-4">WORLD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tabs;
