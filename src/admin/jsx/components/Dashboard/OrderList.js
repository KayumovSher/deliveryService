import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Badge } from "react-bootstrap";
import { Axios } from "axios";
import axios from "axios";

const OrderList = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#order_list tbody tr")
  );
  const sort = 5;
  const activePag = useRef(0);
  const [joke, setJoke]=useState("");

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };

  const [text, setText] = useState('')
  const [showImg, setShowImg] = useState(true)

  

  // const getJoke = () => {
  //   axios
  //     .get("http://www.official-joke-api.appspot.com/random_joke")
  //     .then((response) => {
  //       setJoke(response.data.setup, response.data.punchline);
  //     })
  //     .catch((error) => console.error("Error fetching the joke: ", error));
  // };
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#order_list tbody tr"));
  }, []);

  useEffect(()=>{
    setTimeout(()=> {
      setShowImg(false)
      setText(
        'Driver Name'
      )
    }, 99999999999999)
  }, [])

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);

  const handleRowClick = (url) => {
    window.location.href = url;
  };




  return (
    <div style={{backgroundColor:"white"}}>
      <Fragment>
      
        {/* <div>
          <button onClick={getJoke}>Get Joke right now</button> 
          {joke && <p>{joke}</p>} 
        </div> */}
        <div className="form-head d-flex mb-3 align-items-start">
          <div className="me-auto d-none d-lg-block">
            <h2 className="text-black font-w600 mb-0">Заказы</h2>
          </div>
        </div>

        <div>
          <div className="input-group search-area" style={{width: '180px'}}>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Заказa ID"
                    aria-label="Search"
                    />
                    <span
                      className="input-group-text"
                      data-toggle="dropdown"
                    >
                  <Link to={"#"}>
                    <i  className="flaticon-381-search-2" />
                  </Link>
                </span>
          </div>
          <form style={{margin:'15px', height:'50px', width:'auto'}}>
              <button style={{width: '145px', textAlign:'initial', marginRight:'10px'}}className="border px-3 py-3 rounded-xl col-sm-4 mb-4">Новый -
              <Badge as="a" href="" bg="success">
                    23
                  </Badge></button>
              <button style={{width: '190px', textAlign:'initial', marginRight:'10px'}} className="border px-3 py-3 rounded-xl col-sm-4 mb-4">Перед заказ -
              <Badge as="a" href="" bg="success">
                    50
                  </Badge></button>
              <button style={{width: '180px', textAlign:'initial', marginRight:'10px'}} className="border px-3 py-3 rounded-xl col-sm-4 mb-4">У Вендора -
              <Badge as="a" href="" bg="success">
                    99+
                  </Badge></button>
              <button style={{width: '155px', textAlign:'initial', marginRight:'10px'}} className="border px-3 py-3 rounded-xl col-sm-4 mb-4">Прибыл -
              <Badge as="a" href="" bg="success">
                    99+
                  </Badge></button>
              <button style={{width: '150px', textAlign:'initial', marginRight:'10px'}} className="border px-3 py-3 rounded-xl col-sm-4 mb-4">В пути -
              <Badge as="a" href="" bg="success">
                    99+
                  </Badge></button>
              <button style={{width: '150px', color: 'grey', textAlign:'initial', marginRight:'10px'}} className="border px-3 py-3 rounded-xl col-sm-4 mb-4">Завершенный</button>
              <button style={{width: '150px', textAlign:'initial', color:'grey', marginRight:'10px'}} className="border px-3 py-3 rounded-xl col-sm-4 mb-4">Отмень заказ</button>
              <button style={{width: '190px', textAlign:'initial'}} className="border px-3 py-3 rounded-xl col-sm-4 mb-4">Не оплачено -
              <Badge as="a" href="" bg="danger">
                    99+
                  </Badge></button>
          </form>
        </div>

        <div className="row" style={{paddingTop:'100px'}}>
          <div className="col-12">
            <div className="table-responsive">
              <div id="order_list" className="dataTables_wrapper no-footer"
                style={{height:'650px', overflow:'auto'}}
              >
                <table
                  id="example"
                  className="display mb-4 dataTablesCard dataTable no-footer w-100 "
                  style={{ width:'100%', tableLayout:'fixed', minWidth:'1000px', borderCollapse:'collapse'}}
                  role="grid"
                  aria-describedby="example5_info"
                >
                  <thead style={{backgroundColor:"#15BE63"}}>
                    <tr 
                      role="row"
                      style={{ width: "71.3333px", position:'sticky', top:'0', fontSize:'15px'}}
                    >
                      <th
                        className="sorting_asc"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label="Order ID: activate to sort column descending"
                        style={{ width: "71.3333px"}}
                      >
                        Заказа ИД
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "89.3333px" }}
                      >
                        Статус
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Date: activate to sort column ascending"
                        style={{ width: "74.6667px" }}
                      >
                        Дата
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Date: activate to sort column ascending"
                        style={{ width: "74.6667px" }}
                      >
                        Передзаказ
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "98.6667px" }}
                      >
                        Номер клиента
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Customer Name: activate to sort column ascending"
                        style={{ width: "85.3333px" }}
                      >
                        Имя клиента
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 68 }}
                      >
                        Имя курьера
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 68 }}
                      >
                        Имя оператора
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example5"
                        rowSpan={1}
                        colSpan={1}
                        aria-label=": activate to sort column ascending"
                        style={{ width: 24 }}
                      />
                    </tr>
                  </thead>
                  <tbody
                    style={{wordBreak:'break-all'}}
                  >
                    <tr role="row" className="odd" style={{cursor: "pointer"}} onClick={() => handleRowClick('order')}>
                      <td className="sorting_1">#4546563</td>
                      <td>
                        <span className="btn btn-sm light btn-success">
                          Новый
                        </span>
                      </td>
                      <td>26-март 2023, 12:42</td>
                      <td></td>
                      <td>+998931550902</td>
                      <td>Shermuhammad</td>
                      <td>Xusan Valiyev</td>
                      <td>Диспетчер</td>
                      <td>
                        <Dropdown className="dropdown ms-auto text-right">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={5} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={19} cy={12} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-check-square scale5 text-primary me-2" />{" "}
                              Accept Order
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-times-circle scale5 text-danger me-2" />{" "}
                              Reject Order
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr role="row" className="even" style={{cursor: "pointer"}} onClick={() => handleRowClick('order')}>
                      <td className="sorting_1">#4546563</td>
                      <td>
                        <span className="btn btn-sm light btn-primary">
                          Передзаказ
                        </span>
                      </td>
                      <td>26-март 2023, 12:42</td>
                      <td>26-апрел 2023, 12:42</td>
                      <td>+998912345678</td>
                      <td>Shermukhammad</td>
                      <td>Jahongir To'lqinov</td>
                      <td>Шермухаммад</td>
                      <td>
                        <Dropdown className="dropdown ms-auto text-right">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={5} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={19} cy={12} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-check-square scale5 text-primary me-2" />{" "}
                              Accept Order
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-times-circle scale5 text-danger me-2" />{" "}
                              Reject Order
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr role="row" className="odd" style={{cursor: "pointer"}} onClick={() => handleRowClick('order')}>
                      <td className="sorting_1">#4546563</td>
                      <td>
                        <span className="btn btn-sm light btn-warning">
                          У вендора
                        </span>
                      </td>
                      <td>26-март 2023, 12:42</td>
                      <td></td>
                      <td>+998931234140</td>
                      <td>John Doe</td>
                      <td>
                        <div>
                          {
                            showImg ? (
                              <img src="./sp.svg" style={{width:"50px"}} / >
                            ) : (
                              <h6>{text}</h6>
                            )
                          }
                        </div>
                      </td>
                      <td>Диспетчер</td>
                      
                      
                      <td>
                        <Dropdown className="dropdown ms-auto text-right">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={5} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={19} cy={12} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-check-square scale5 text-primary me-2" />{" "}
                              Accept Order
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-times-circle scale5 text-danger me-2" />{" "}
                              Reject Order
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr role="row" className="even" style={{cursor: "pointer"}} onClick={() => handleRowClick('order')}>
                    <td className="sorting_1">#4546563</td>
                      <td>
                        <span className="btn btn-sm light btn-primary">
                          Прибыл
                        </span>
                      </td>
                      <td>26-март 2023, 12:42</td>
                      <td></td>
                      <td>+998912345678</td>
                      <td>Shermukhammad</td>
                      <td>Muhammadsodiq</td>
                      <td>Шермухаммад</td>
                      <td>
                        <Dropdown className="dropdown ms-auto text-right">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={5} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={19} cy={12} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-check-square scale5 text-primary me-2" />{" "}
                              Accept Order
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-times-circle scale5 text-danger me-2" />{" "}
                              Reject Order
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr role="row" className="odd" style={{cursor: "pointer"}} onClick={() => handleRowClick('order')}>
                      <td className="sorting_1">#5552351</td>
                      <td>
                        <span className="btn btn-sm light btn-primary">
                          В пути
                        </span>
                      </td>
                      <td>26-март 2023, 12:42</td>
                      <td></td>
                      <td>+998912345678</td>
                      <td>Shermukhammad</td>
                      <td>Muhammadyusuf</td>
                      <td>Шермухаммад</td>
                      <td>
                        <Dropdown className="dropdown ms-auto text-right">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={5} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={19} cy={12} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-check-square scale5 text-primary me-2" />{" "}
                              Accept Order
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" >
                              <i className="las la-times-circle scale5 text-danger me-2" />{" "}
                              Reject Order
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default OrderList;
