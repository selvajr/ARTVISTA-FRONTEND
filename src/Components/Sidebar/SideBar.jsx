import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'
const SideBar = () => {
    return (
        <div >
             <div className='sidebar '>
            <div className="sidebar-options">
                <NavLink to='/admin/add' className="sidebar-option">
                <i className="ri-add-circle-fill"></i>
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/admin/list' className="sidebar-option">
                <i className="ri-file-list-line"></i>
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/admin/edit/:id' className="sidebar-option">
                <i className="ri-file-list-line"></i>
                    <p>Update Items</p>
                </NavLink>
                <NavLink to='/admin/orders' className="sidebar-option">
                <i className="ri-archive-2-line"></i>
                    <p>Orders</p>
                </NavLink>
            </div>
          
        </div>
       
        </div>
    );
};

export default SideBar;