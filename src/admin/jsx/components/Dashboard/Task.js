import React, { useState} from 'react';
import { Link} from 'react-router-dom';
import {Dropdown, Modal} from 'react-bootstrap';
import swal from "sweetalert";
// import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table';

//Images
import card1 from './../../../images/task/image.png';
import card2 from './../../../images/task/image.png';
import card3 from './../../../images/task/image.png';
import card4 from './../../../images/task/image.png';
import card5 from './../../../images/task/image.png';
import card6 from './../../../images/task/image.png';
import card7 from './../../../images/task/image.png';
import card8 from './../../../images/task/image.png';
import user from './../../../images/task/image.png';

const CardListBlog = [
	// DriverId:'',
	// FullName:'',
	// PhoneNumber:'',
	// PhoneSecNumber:'',
	// BirthDate:'',
	// Address:'',
	// VehicleType:'',
	// BankCardNumber:'',
	// OrderLimit:'',
	// Password:'',

	{ 
		id:1, image: card1, DriverId:"0001",  FullName:"Abdullayev Abdulloh", PhoneNumber: "+998 123456789", PhoneSecNumber:"+998987654321", BirthDate:"05/09/2002", 
		Address:"Yunusobod t, Bog'ishamol k, N98, Toshkent", VehicleType:"Avtomobil", BankCardNumber:"8600986058358155", OrderLimit:"3", Password:"12345678"
	},
	{ 
		id:2, image: card2, DriverId:"0002", FullName:"Abdullayev Abdurohman", PhoneNumber: "+998 123456789", PhoneSecNumber:"+998987654321", BirthDate:"05/09/2002", 
		Address:"Yunusobod t, Bog'ishamol k, N98, Toshkent", VehicleType:"Skuter", BankCardNumber:"8600986058358155", OrderLimit:"2", Password:"12345678"
	},
	{ 
		id:3, image: card3, DriverId:"0003", FullName:"Abdullayev Abdurohim", PhoneNumber: "+998 123456789", PhoneSecNumber:"+998987654321", BirthDate:"05/09/2002", 
		Address:"Yunusobod t, Bog'ishamol k, N98, Toshkent", VehicleType:"Velosiped", BankCardNumber:"8600986058358155", OrderLimit:"2", Password:"12345678"
	},
	{ 
		id:4, image: card4, DriverId:"0004", FullName:"Abdullayev Abdumalik", PhoneNumber: "+998 123456789", PhoneSecNumber:"+998987654321", BirthDate:"05/09/2002", 
		Address:"Yunusobod t, Bog'ishamol k, N98, Toshkent", VehicleType:"Avtomobil", BankCardNumber:"8600986058358155", OrderLimit:"3", Password:"12345678"
	},
	{ 
		id:5, image: card5, DriverId:"0005", FullName:"Abdullayev MuhammadYahyo", PhoneNumber: "+998 123456789", PhoneSecNumber:"+998987654321", BirthDate:"05/09/2002", 
		Address:"Yunusobod t, Bog'ishamol k, N98, Toshkent", VehicleType:"Avtomobil", BankCardNumber:"8600986058358155", OrderLimit:"3", Password:"12345678"
	},
	{ 
		id:6, image: card6, DriverId:"0006", FullName:"Abdullayev Fayzulloh", PhoneNumber: "+998 123456789", PhoneSecNumber:"+998987654321", BirthDate:"05/09/2002", 
		Address:"Yunusobod t, Bog'ishamol k, N98, Toshkent", VehicleType:"Avtomobil", BankCardNumber:"8600986058358155", OrderLimit:"3", Password:"12345678"
	},
	{ 
		id:7, image: card7, DriverId:"0007", FullName:"Abdullayev Javohir", PhoneNumber: "+998 123456789", PhoneSecNumber:"+998987654321", BirthDate:"05/09/2002", 
		Address:"Yunusobod t, Bog'ishamol k, N98, Toshkent", VehicleType:"Avtomobil", BankCardNumber:"8600986058358155", OrderLimit:"3", Password:"12345678"
	},
	{ 
		id:8, image: card8, DriverId:"0008", FullName:"Abdullayev Timur", PhoneNumber: "+998 123456789", PhoneSecNumber:"+998987654321", BirthDate:"05/09/2002", 
		Address:"Yunusobod t, Bog'ishamol k, N98, Toshkent", VehicleType:"Avtomobil", BankCardNumber:"8600986058358155", OrderLimit:"3", Password:"12345678"
	} 
];

const PostPage = () => {
	
    const [postModal, setPostModal] = useState(false);
    const [contacts, setContacts] = useState(CardListBlog);
    // delete data  
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];    
        const index = contacts.findIndex((contact)=> contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }
    
    //Add data 
    const [addFormData, setAddFormData ] = useState({
		DriverId:'',
		FullName:'',
        PhoneNumber:'',
		PhoneSecNumber:'',
        BirthDate:'',
		Address:'',
        VehicleType:'',
		BankCardNumber:'',
		OrderLimit:'',
        Password:'',
    }); 
    
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.DriverId === ""){
            error = true;
			errorMsg = 'Please fill Driver ID';
        }else if(addFormData.FullName === ""){
            error = true;
			errorMsg = 'Please fill driver Full Name.';
        }else if(addFormData.PhoneNumber === ""){
            error = true;
			errorMsg = 'Please fill Phone Number';
        }else if(addFormData.Address === ""){
            error = true;
			errorMsg = 'Please fill Address';
		}else if(addFormData.VehicleType === ""){
            error = true;
			errorMsg = 'Please fill Vehicle type';
		}else if(addFormData.BankCardNumber === ""){
            error = true;
			errorMsg = 'Please fill Bank Card name';
		}else if(addFormData.OrderLimit === ""){
            error = true;
			errorMsg = 'Please fill Order Limit';
		}else if(addFormData.Password === ""){
            error = true;
			errorMsg = 'Please fill Password';
		}

        if(!error){
            const newContact = {
                DriverId: addFormData.DriverId,
                FullName: addFormData.FullName,
                PhoneNumber:  addFormData.PhoneNumber,
                PhoneSecNumber:  addFormData.PhoneSecNumber ,
                BirthDate:  addFormData.BirthDate,
				Address: addFormData.Address,
				VehicleType: addFormData.VehicleType,
				BankCardNumber: addFormData.BankCardNumber,
				OrderLimit: addFormData.OrderLimit,
				Password:addFormData.Password,
            };
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
            setPostModal(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.Cust_Name = addFormData.Location = addFormData.Date_Join = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    }; 
    
    
    const [editModal, setEditModal] = useState(false);
    
    // Edit function editable page loop
    const [editContactId, setEditContactId] = useState(null);
   
    // Edit function button click to edit
    const handleEditClick = ( event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            DriverId: addFormData.DriverId,
            FullName: addFormData.FullName,
            PhoneNumber:  addFormData.PhoneNumber,
            PhoneSecNumber:  addFormData.PhoneSecNumber ,
            BirthDate:  addFormData.BirthDate,
			Address: addFormData.Address,
			VehicleType: addFormData.VehicleType,
			BankCardNumber: addFormData.BankCardNumber,
			OrderLimit: addFormData.OrderLimit,
			Password:addFormData.Password,
        }
        setEditFormData(formValues);
        setEditModal(true);
    };
    
    
    // edit  data  
    const [editFormData, setEditFormData] = useState({
        DriverId:'',
		FullName:'',
        PhoneNumber:'',
		PhoneSecNumber:'',
        BirthDate:'',
		Address:'',
        VehicleType:'',
		BankCardNumber:'',
		OrderLimit:'',
        Password:'',
    })
    
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            DriverId: addFormData.DriverId,
            FullName: addFormData.FullName,
            PhoneNumber:  addFormData.PhoneNumber,
            PhoneSecNumber:  addFormData.PhoneSecNumber ,
            BirthDate:  addFormData.BirthDate,
			Address: addFormData.Address,
			VehicleType: addFormData.VehicleType,
			BankCardNumber: addFormData.BankCardNumber,
			OrderLimit: addFormData.OrderLimit,
			Password:addFormData.Password,
        }
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
        setEditModal(false);    
    }
    
	//For Image upload in ListBlog
	const [file, setFile] = React.useState(null)
    const fileHandler = (e) => {
        setFile(e.target.files[0]);
		setTimeout(function(){
			var src = document.getElementById("saveImageFile").getAttribute("src");
			addFormData.image = src; 
		}, 200);
    }
	
    
    return(
        <>
			<div className="mb-sm-5 mb-3 d-flex flex-wrap align-items-center text-head">
				<Link className="btn btn-primary font-w600 mb-2 me-auto" onClick={()=> setPostModal(true)}>+ Добавить курьера</Link>
				 {/* <!-- Modal --> */}
				<Modal className="modal fade"  show={postModal} onHide={setPostModal} >
					<div className="" >
						<div className="">
						{/* <div>
							Поиск : {' '}
							<input className="ml-2 input-search form-control"
								value={filter || ''}  onChange={e => setFilter(e.target.value)} style={{width: "20%"}}
							/>
						</div> */}
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Добавить курьера</h4>
									<button type="button" className="btn close" onClick={()=> setPostModal(false)}>
										<span>×</span>
									</button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											<div className="image-placeholder">	
												<div className="avatar-edit">
													<input type="file" onChange={fileHandler} id="imageUpload" 
														onClick={(event) => setFile(event.target.value)}
													/> 					
													<label htmlFor="imageUpload" name=''></label>
												</div>
												<div className="avatar-preview">
													<div id="imagePreview">
														<img id="saveImageFile" src={file? URL.createObjectURL(file) : user} 
															alt={file? file.name : null}
														/>
													</div>
												</div>
											</div> 
											 <div className="form-group mb-3">
												<label className="text-black font-w500">ID курьер</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="DriverId" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="#1234"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Полное имя</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="FullName" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="имя и фамилия"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Номер телефона</label>
												<div className="contact-occupation">
													<input type="text"   autocomplete="off"
                                                        onChange={handleAddFormChange}
														name="PhoneNumber" required="required"
														className="form-control" placeholder="+998 123456789" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Второй номер телефона</label>
												<div className="contact-occupation">
													<input type="text"   autocomplete="off"
                                                        onChange={handleAddFormChange}
														name="PhoneSecNumber" required="required"
														className="form-control" placeholder="+998 123456789" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Дата рождения</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="BirthDate" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="05/09/2002" 
													/>
												</div> 
											</div> 
											<div className="form-group mb-3">
												<label className="text-black font-w500">Адрес</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="Address" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="Yunusobod t, Bog'ishamol ko'ch N98" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Тип транспортного средства</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="VehicleType" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="Avtomobil / Velosibed / Skuter" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Номер банковской карты</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="BankCardNumber" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="8600********8155" 
													/>
												</div> 
											</div> 
											<div className="form-group mb-3">
												<label className="text-black font-w500">Лимит заказа</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="OrderLimit" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="1 / 2 / 3" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Пароль для курера</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="Password" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="********" 
													/>
												</div>
											</div> 
										</div>
									</div>
								</div>
								<div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit}>Добавлять</button>  
                                    <button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Отказаться</button>      
								</div>
							</form>
						</div>
					</div>
				</Modal>
                <Modal className="modal fade"  show={editModal} onHide={setEditModal} >
					<div className="" role="document">
						<div className="">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Редактировать курьер</h4>
									<button type="button" className="btn close" onClick={()=> setEditModal(false)}>
										<span>×</span>
									</button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											<div className="form-group mb-3">
												<label className="text-black font-w500">ID курьер</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="DriverId" required="required"
                                                        value={editFormData.DriverId}
                                                        onChange={handleEditFormChange}
													/>
													<span className="validation-text"></span>
												</div>
											</div>
                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Полное имя</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="FullName" required="required"
                                                        value={editFormData.FullName}
                                                        onChange={handleEditFormChange}
													/>
													<span className="validation-text"></span>
												</div>
											</div>
                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Номер телефона</label>
												<div className="contact-occupation">
													<input type="text"   autocomplete="off"
                                                        value={editFormData.PhoneNumber}
                                                        onChange={handleEditFormChange}
														name="PhoneNumber" required="required"
														className="form-control" placeholder="+998 123456789" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Второй номер телефона</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="PhoneSecNumber" required="required"
														value={editFormData.PhoneSecNumber}
                                                        onChange={handleEditFormChange}
														className="form-control" placeholder="+998 123456789" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Дата рождения</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="BirthDate" required="required"
														value={editFormData.BirthDate}
                                                        onChange={handleEditFormChange}
														className="form-control" placeholder="05/09/2002" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Адрес</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="Address" required="required"
														value={editFormData.Address}
                                                        onChange={handleEditFormChange}
														className="form-control" placeholder="Yunusobod t, Bog'ishamol ko'ch N98" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Тип транспортного средства</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="VehicleType" required="required"
														value={editFormData.VehicleType}
                                                        onChange={handleEditFormChange}
														className="form-control" placeholder="Avtomobil / Velosibed / Skuter" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Номер банковской карты</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="BankCardNumber" required="required"
														value={editFormData.BankCardNumber}
                                                        onChange={handleEditFormChange}
														className="form-control" placeholder="8600********8155" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Лимит заказа</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="OrderLimit" required="required"
														value={editFormData.OrderLimit}
                                                        onChange={handleEditFormChange}
														className="form-control" placeholder="1 / 2 / 3" 
													/>
												</div>
											</div> 
											<div className="form-group mb-3">
												<label className="text-black font-w500">Пароль для курера</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="Password" required="required"
														value={editFormData.Password}
                                                        onChange={handleEditFormChange}
														className="form-control" placeholder="********" 
													/>
												</div>
											</div> 
										</div>
									</div>
								</div>
								<div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" onClick={handleEditFormSubmit}>Сохранять</button>  
                                    <button type="button" onClick={()=> setEditModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Отказаться</button>      
								</div>
							</form>
                            
						</div>
					</div>
				</Modal>
			</div>          
            <div className="row">
                {contacts.map((contact, index)=>(
                    <div  className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6" key={index}>
                        <div  className="card project-boxed">
							<div className="img-bx">
								<img src={contact.image} alt="" className=" me-3 card-list-img w-100" width="130" />
                            </div>								  
                            <div className="card-header align-items-start">
                                <Dropdown className="">
                                    <Dropdown.Toggle variant="" as="div" className="btn-link i-false" >	
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>                                    
									</Dropdown.Toggle>	
									{/* <h3 className='btn-link i-false'>{handleEditFormSubmit.DriverId}</h3> */}
                                    <Dropdown.Menu alignLeft={true} className="dropdown-menu-left">
                                        <Dropdown.Item 
                                            onClick={(event) => handleEditClick(event, contact)}
                                        >Редактировать
                                        </Dropdown.Item>
                                        <Dropdown.Item className="text-danger"
                                            onClick={()=>handleDeleteClick(contact.id)}
                                        >Удалить
                                        </Dropdown.Item>		
                                    </Dropdown.Menu>	
                                </Dropdown>
                            </div>
                            <div className="card-body p-0 pb-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="mb-0 ">ID курьер</span> :
                                        <span className="text-black ms-2">{contact.DriverId}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 ">Полное имя</span> :
                                         <span className="text-black ms-2">{contact.FullName}</span> 
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 ">Номер телефона</span> :
                                        <span className="text-black desc-text ms-2">{contact.PhoneNumber}</span>
                                    </li>
									<li className="list-group-item">
                                        <span className="mb-0 ">Второй номер телефона</span> :
                                        <span className="text-black ms-2">{contact.PhoneSecNumber}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 ">Дата рождения</span> :
                                         <span className="text-black ms-2">{contact.BirthDate}</span> 
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 ">Адрес</span> :
                                        <span className="text-black desc-text ms-2">{contact.Address}</span>
                                    </li>
									<li className="list-group-item">
                                        <span className="mb-0 ">Тип транспортного средства</span> :
                                        <span className="text-black ms-2">{contact.VehicleType}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 ">Номер банковской карты</span> :
                                         <span className="text-black ms-2">{contact.BankCardNumber}</span> 
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 ">Лимит заказа</span> :
                                        <span className="text-black desc-text ms-2">{contact.OrderLimit}</span>
                                    </li>
									<li className="list-group-item">
                                        <span className="mb-0 ">Пароль для курера</span> :
                                        <span className="text-black desc-text ms-2">{contact.Password}</span>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>            
                ))}  
            </div>
        </>
    );     
}

export default PostPage;