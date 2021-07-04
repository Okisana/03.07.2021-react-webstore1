import { NavLink } from "react-router-dom";
import product7 from "../images/shop/dMidi.jpg";
import product8 from "../images/shop/dBlack.jpg";
import { useState } from "react";
function Tabs() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [total1, setTotal1] = useState(19.99);
  const [total2, setTotal2] = useState(22.99);
  const [totalAll, setTotalAll] = useState(42.98);

  const addCount1 = () => {
    setCount1(count1 + 1);
    setTotal1(((count1 + 1) * 19.99).toFixed(2));
  };

  const diminishCount1 = () => {
    if (count1 === 1) {
      return;
    }

    setCount1(count1 - 1);
    setTotal1(((count1 - 1) * 19.99).toFixed(2));
  };

  const addCount2 = () => {
    setCount2(count2 + 1);
    setTotal2(((count2 + 1) * 22.99).toFixed(2));
  };
  const diminishCount2 = () => {
    if (count2 === 1) {
      return;
    }

    setCount2(count2 - 1);
    setTotal2(((count2 - 1) * 22.99).toFixed(2));
  };

  const removeProduct = (event) => {
    event.target.closest(".productCart").remove();
  };

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
            Cart
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
          {/* Product TAB */}
          <div
            className="tab-pane fade show active"
            id="pills-product"
            role="tabpanel"
            aria-labelledby="pills-product-tab"
          >
            {/* <div className="row mt-3">
              <p className="fs-4">Chosen products</p>
            </div> */}
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
                  <span className="quantity">{count1}</span>
                  <button
                    onClick={diminishCount1}
                    className=" btn btn-danger fw-bold btnMinus mx-1"
                  >
                    -
                  </button>
                  <button
                    onClick={addCount1}
                    className=" btn btn-danger fw-bold btnPlus"
                  >
                    +
                  </button>
                </td>

                <td>
                  <span className="price">19.99</span>
                  <span>EUR</span>
                </td>
                <td>
                  <span className="totalOneProduct">{total1}</span>
                  <span>EUR</span>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={removeProduct}
                    className=" btn btn-danger fw-bold remove"
                  >
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
                  <span className="quantity">{count2}</span>
                  <button
                    onClick={diminishCount2}
                    className=" btn btn-danger fw-bold btnMinus mx-1"
                  >
                    -
                  </button>
                  <button
                    onClick={addCount2}
                    className=" btn btn-danger fw-bold btnPlus"
                  >
                    +
                  </button>
                </td>

                <td>
                  <span className="price">22.99</span>
                  <span>EUR</span>
                </td>
                <td>
                  <span className="totalOneProduct">{total2}</span>
                  <span>EUR</span>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={removeProduct}
                    className=" btn btn-danger fw-bold remove"
                  >
                    Remove
                  </button>{" "}
                </td>
              </tr>
            </table>

            <h3 className="bigTotal">
              Total: <span className="totalAll">{totalAll}</span> EUR
            </h3>

            <div className="epmty5"></div>
          </div>

          {/* Address TAB */}
          <div
            className="tab-pane fade"
            id="pills-address"
            role="tabpanel"
            aria-labelledby="pills-address-tab"
          >
            <div className="row mt-3" style={{ paddingLeft: "130px" }}>
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
                <p>Billing address</p>
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

            <div className="row my-5 " style={{ marginRight: "210px" }}>
              <h3 className="bigTotal">
                Total: <span className="totalAll">_</span> EUR
              </h3>
            </div>
          </div>

          {/* Summary TAB */}
          <div
            className="tab-pane fade"
            id="pills-summary"
            role="tabpanel"
            aria-labelledby="pills-summary-tab"
          >
            <div className="row mt-3">
              <div className="col-3">
                <div className="mt-2">
                  <p className="fs-5">Shipping address:</p>
                  <div>
                    <div> Lilu Due</div>
                    <div> Miera street 25</div>
                    <div> Riga</div>
                    <div> Latvia</div>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="fs-5">Billing address:</p>
                  <div>
                    <div> Max Rox</div>
                    <div> Salas street 100</div>
                    <div> Riga</div>
                    <div> Latvia</div>
                  </div>
                </div>
              </div>

              <div className="col-9">
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
                      <button className=" btn btn-danger fw-bold btnMinus">
                        -
                      </button>
                      <button className=" btn btn-danger fw-bold btnPlus mx-1">
                        +
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
                      <button className=" btn btn-danger fw-bold remove">
                        Remove
                      </button>
                    </td>
                  </tr>

                  <tr className="productCart">
                    <td>
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
                      <button className=" btn btn-danger fw-bold btnMinus ">
                        -
                      </button>
                      <button className=" btn btn-danger fw-bold btnPlus mx-1">
                        +
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
                      <button className=" btn btn-danger fw-bold remove">
                        Remove
                      </button>
                    </td>
                  </tr>
                </table>
                <div className="row my-5 mx-5">
                  <h3 className="bigTotal">
                    Total: <span className="totalAll">_</span> EUR
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tabs;
