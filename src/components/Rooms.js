import React, { Fragment, useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import SortIcon from "@mui/icons-material/ArrowDownward";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Header from './layout/Header';
//action
import { getUsers } from '../redux/auth/actions';
//hook
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//web3

function Rooms() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const usersData = useSelector(state => state.auth.users);

  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true
    },
    {
      name: "Action",
      sortable: false,
      selector: null,
      cell: (d) => [
        <PlayArrowIcon 
          style={{ cursor: 'pointer' }}
          key={d._id+'1'}
          onClick={handleClick.bind(this, d._id)}
          className="first fas fa-pen"
        />,
      ]
    }
  ];
  
  const handleClick = (id) => {
    console.log(`You clicked me! ${id}`);
    navigate(`/battle/${id}`);
  };
  
  const isIndeterminate = (indeterminate) => indeterminate;
  const selectableRowsComponentProps = { indeterminate: isIndeterminate };
  

  useEffect(async () => {
    dispatch(getUsers());
  }, []);

  if (isAuthenticated !== null) {
    if (isAuthenticated === false) {
      return <Navigate to="/login" />
    }
  }
  
  return (
    <Fragment>
      <Header />
      <div className='container' style={{ paddingTop: '50px' }}>
        <Paper>
          <DataTable
            title="User List"
            columns={columns}
            data={usersData}
            defaultSortField="title"
            sortIcon={<SortIcon />}
            pagination
            // selectableRows
            // selectableRowsComponent={Checkbox}
            // selectableRowsComponentProps={selectableRowsComponentProps}
          />
        </Paper>
      </div>
    </Fragment>
  );
}

export default Rooms;
