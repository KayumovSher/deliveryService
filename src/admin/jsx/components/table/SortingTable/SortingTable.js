import React, { useState } from 'react';
import PageTitle from "../../../layouts/PageTitle";
import YandexMap from './YandexMap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  SplitButton,
} from 'react-bootstrap'

export const SortingTable = () => {    
    const [search, setSearch]= useState('')
    return (
        <>
            {/* Adjusted Grid Layout */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr auto 1fr', 
                gap: '25%', 
                width: '95%',
                alignItems:'center'
                }}>

                <form style={{ width: '200px' }}>
                    <InputGroup>
                        <Form.Control 
                        onChange={(e)=>setSearch(e.target.value)} 
                        placeholder='Driver ID' 
                        />
                    </InputGroup>
                </form>
                <Card.Body>
                    <div className='basic-dropdown'>
                        <Dropdown>
                        <Dropdown.Toggle variant='primary'>
                            Settings
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='#'>Hide Courer</Dropdown.Item>
                            <Dropdown.Item href='#'>Hide Restaurant</Dropdown.Item>
                            {/* <Dropdown.Item href='#'>Link 3</Dropdown.Item> */}
                            <div className='dropdown-divider'></div>
                            <Dropdown.Item href='#'>Another link</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Card.Body>
                <form style={{ width: '200px' }}>
                    <InputGroup>
                        <Form.Control placeholder='Restaurant name' />
                    </InputGroup>
                </form>
            </div>

            <hr/>

            {/* YandexMap Component Integration */}
            <div className="card">
                <div>
                    <YandexMap />                     
                </div>
            </div>
        </>
    );
};

export default SortingTable;
