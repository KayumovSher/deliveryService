import React, { useState, useMemo } from 'react';
import { Badge } from "react-bootstrap";
import { YMaps, Map, Placemark, ZoomControl, SearchControl, ObjectManager, objectManagerFeatures, TrafficControl, TypeSelector, Circle, RouteEditor, RoutePanel} from '@pbe/react-yandex-maps';
import './order.css';
//Images

import pic1 from "../../../images/dish/pic1.jpg";
import pic2 from "../../../images/dish/pic2.jpg";
import pic3 from "../../../images/dish/pic3.jpg";
import { Link } from "react-router-dom";
const handleRowClick = (url) => {
  window.location.href = url;
};
const Order = () => {
  const [zoom, setZoom] = useState(11);
    const mapState = useMemo(
      () => ({ center: [41.312626349619556, 69.24959178515621], zoom }),
      [zoom]
    );
    const objectManagerFeatures = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: 1,
            geometry: {
              type: "Point",
              coordinates: [41.29699, 69.26001],
            },
            properties: {
              balloonContent: "Placemark 1",
              hintContent: "Hint 1",
            },
          },
          
        ],
    };

  return (
    <>
      <div className="form-head d-flex mb-3 align-items-start">
        <div className="me-auto d-none d-lg-block">
          <h2 className="text-black font-w600 mb-0">Заказa ID #5552351</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/order" className="text-primary">
                Дашбоард
              </Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to="/order">Деталь заказа</Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-xxl-4 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-xl-12 col-lg-6 ">
              <div className="card h-auto">
                <div className="card-body text-center">
                  <h3 className="mb-3 text-black font-w700">Курьер</h3>
                  <h4 className="mb-3 text-black font-w700">Xusan Valiyev </h4>
                  <h5>Тел:+998 912345678</h5>
                  <h5>+998 912345678</h5>
                  <h5>Автомобил</h5>
                  <h4>Статус</h4>
                  <h5>В пути</h5>
                </div>
                <div className="card-body text-center">
                  <h3 className="mb-3 text-black font-w700">Клиент</h3>
                  <h4 className="mb-3 text-black font-w700">Шермухаммад Каюмов</h4>
                  <h5>Тел:+998 931550902</h5>
                  <h5>+998 912345678</h5>
                  {/* If Customer is new the "New customer" must be shown */}
                  <Link>Новый клиент</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h3 className="card-title">Вендор</h3>
                </div>
                <div className="card-body">
                  <div className="widget-timeline-icon">
                    <ul className="timeline">
                      <li>
                        <div className="icon bg-primary" />
                        <Link className="timeline-panel text-muted" to="/order">
                        <div className="media">
                              <Link to="ecom-product-detail.html">
                                <img
                                  className="me-3 to=-fluid rounded"
                                  width={85}
                                  src={pic1}
                                  alt="pic1"
                                />
                              </Link>
                              <div className="media-body">
                                <h3 className="mt-0 mb-1 font-w500">
                                  <Link className="text-primary" to="/order">
                                    KFC
                                  </Link>
                                </h3>
                                <br></br>
                                <div className="star-review fs-14">
                                  <i className="fa fa-star text-orange" />{" "}
                                  <i className="fa fa-star text-orange" />{" "}
                                  <i className="fa fa-star text-orange" />{" "}
                                  <i className="fa fa-star text-gray" />{" "}
                                  <i className="fa fa-star text-gray" />
                                  <span className="ms-3 text-dark">
                                    451 reviews
                                  </span>
                                </div>
                              </div>
                            </div>
                            <br></br>
                        </Link>
                      </li>
                      <li>
                        <div className="icon bg-primary" />
                        <Link className="timeline-panel text-muted" to="/order">
                          <h4 className="mb-2">Тел:</h4>
                          <p className="fs-15 mb-0 ">
                            +998 912345678
                          </p>
                          <p className="fs-15 mb-0 ">
                            +998 912345678
                          </p>
                          <br></br>
                        </Link>
                      </li>
                      <li>
                        <div className="icon bg-primary" />
                        <Link className="timeline-panel text-muted" to="/order">
                          <button className="card" style={{cursor: "pointer"}} onClick={() => handleRowClick('Order')}>Setting</button>
                        </Link>
                      </li>
                      {/* <li>
                        <div className="icon bg-primary" />
                        <Link className="timeline-panel text-muted" to="/order">
                          <h4 className="mb-2">Order Created</h4>
                          <p className="fs-15 mb-0 ">
                            Thu, 21 Jul 2023, 11:49 AM
                          </p>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-xl-9 col-xxl-8 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body pt-2">
                  <div className="table-responsive ">
                    <YMaps>
                        <Map state={mapState} className='order_map'>

                          {/* Controls */}
                          <ZoomControl options={{ float: "right" }} />

                          {/* Traffic Control */}
                          <TrafficControl options={{ float: "right" }} />

                          {/* Type Celector */}
                          {/* <TypeSelector options={{ float: "right" }} /> */}

                          {/* Route Editor */}
                          <RouteEditor />

                          {/* Route Panel */}
                          <RoutePanel 
                            options={{ 
                              float: "right",            // Float panel to the right
                              type: "masstransit",       // Set type to mass transit (public transportation)
                              from: [41.26109, 69.26727], // Set the starting point coordinates
                              to: [41.30770789, 69.32495113], // Set the destination coordinates
                              routeActive: true,         // Enable the route display
                              fromEnabled: false,        // Disable the "from" input field (starting point fixed)
                              toEnabled: false,           // Enable the "to" input field (destination can be modified)
                            }} 
                          />

                          {/* Object Manager */}
                          <ObjectManager
                              options={{
                              clusterize: true,
                              gridSize: 32,
                              }}
                              objects={{
                              openBalloonOnClick: true,
                              preset: "islands#greenDotIcon",
                              }}
                              clusters={{
                              preset: "islands#redClusterIcons",
                              }}
                              filter={(object) => object.id % 2 === 0}
                              defaultFeatures={objectManagerFeatures}
                              modules={[
                              "objectManager.addon.objectsBalloon",
                              "objectManager.addon.objectsHint",
                              ]}
                          />
                      </Map>
                    </YMaps>
                    <table className="table items-table">
                      <tbody>
                        <h3>Состав заказ</h3>
                        <tr>
                          <th className="my-0 text-black font-w500 fs-20">
                            Items
                          </th>
                          <th
                            style={{ width: "10%" }}
                            className="my-0 text-black font-w500 fs-20"
                          >
                            Qty
                          </th>
                          <th
                            style={{ width: "10%" }}
                            className="my-0 text-black font-w500 fs-20"
                          >
                            Price
                          </th>
                          <th className="my-0 text-black font-w500 fs-20">
                            Total Price
                          </th>
                          <th />
                        </tr>
                        <tr>
                          <td>
                            <div className="media">
                              <Link to="ecom-product-detail.html">
                                <img
                                  className="me-3 to=-fluid rounded"
                                  width={85}
                                  src={pic1}
                                  alt="pic1"
                                />
                              </Link>
                              <div className="media-body">
                                <small className="mt-0 mb-1 font-w500">
                                  <Link className="text-primary" to="/order">
                                    BURGER
                                  </Link>
                                </small>
                                <h5 className="mt-0 mb-2 mb-4">
                                  <Link
                                    className="text-black"
                                    to="ecom-product-detail.html"
                                  >
                                    Chicken curry special with cucumber
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              3x
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $14.99
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $44.97
                            </h4>
                          </td>
                          <td>
                          <Badge as="a" href="" bg="info">Изменить</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="media">
                              <Link to="ecom-product-detail.html">
                                <img
                                  className="me-3 to=-fluid rounded"
                                  width={85}
                                  src={pic2}
                                  alt="pic2"
                                />
                              </Link>
                              <div className="media-body">
                                <small className="mt-0 mb-1 font-w500">
                                  <Link className="text-primary" to="/order">
                                    PIZZA
                                  </Link>
                                </small>
                                <h5 className="mt-0 mb-2 text-black mb-4">
                                  <Link
                                    className="text-black"
                                    to="ecom-product-detail.html"
                                  >
                                    Italiano pizza with garlic
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              1x
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $4.12
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $4.12
                            </h4>
                          </td>
                          <td>
                          <Badge as="a" href="" bg="info">Изменить</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="media">
                              <Link to="ecom-product-detail.html">
                                <img
                                  className="me-3 to=-fluid rounded"
                                  width={85}
                                  src={pic3}
                                  alt="pic3"
                                />
                              </Link>
                              <div className="media-body">
                                <small className="mt-0 mb-1 font-w500">
                                  <Link className="text-primary" to="/order">
                                    JUICE
                                  </Link>
                                </small>
                                <h5 className="mt-0 mb-2 text-black mb-4">
                                  <Link
                                    className="text-black"
                                    to="ecom-product-detail.html"
                                  >
                                    Watermelon juice with ice
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              2x
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $15.44
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $15.44
                            </h4>
                          </td>
                          <td>
                          <Badge as="a" href="" bg="info">Изменить</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
