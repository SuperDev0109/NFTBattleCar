import React, { Fragment } from 'react';
import DataTable from "react-data-table-component";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import SortIcon from "@mui/icons-material/ArrowDownward";
import data from "./data";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Header from './layout/Header';

//hook
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//web3

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
        key={d.title+'1'}
        onClick={handleClick.bind(this, d.email)}
        className="first fas fa-pen"
      />,
    ]
  }
];

const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

function Rooms() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

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
            data={data}
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
