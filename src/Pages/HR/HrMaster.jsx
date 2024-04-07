import React, {useState} from "react"
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function HrMaster() {
 const [data, setData] = useState([{}])
 const [data2, setData2] = useState([{}])
const columns = [
  {
   name: "firstName",
   label: "Name",
   options: {
    filter: false,
    sort: true,
   }
  },
  {
   name: "lastName",
   label: "Company",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "email",
   label: "City",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
  },
  {
    name: "address",
    label: "Address",
  },
  {
    name: 'joiningDate',
    label: 'Joining Date'
  }
 ];
 
 
 fetch('http://localhost:5000/emp/getemp').then(response => response.json()).then(datas => {
  setData(datas)
} );

// post request to approve or reject leave

const approveLeave = (leaveId, approvalStatus) => {
 fetch('http://localhost:5000/emp/updateleave', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({leaveId: leaveId, approvalStatus: approvalStatus})
}).then(response => response.json()).then(datas => {
  console.log(datas)
} );
}

fetch('http://localhost:5000/emp/allleave').then(response => response.json()).then(datas => {
  let newData = datas.map(data => {
    data.action = <ButtonGroup>
      <Button variant="contained" color="success"
        onClick={(data) =>  approveLeave(data.leaveId, 'Approved')}
      >Approve</Button>
      <Button variant="contained" color="error"
      onClick={(data) => approveLeave(data.leaveId, 'Rejected')}
      >Reject</Button>

    </ButtonGroup>
    return data
  });
  setData2(newData)
} );


 const columns2 = [
  {
   name: "employeeEmail",
   label: "MAIL",
   options: {
    filter: false,
    sort: true,
   }
  },
  {
   name: "reason",
   label: "reason",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "startDate",
   label: "Date",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "endDate",
    label: "Emd Date"
  },
  {
    name: "reason",
    label: "reason"
  },
  {
    name: "applicationDate",
    label: "Application Date"
  },
  {
   name: "approvalStatus",
   label: "Status",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "action",
    label: "action",
  }
 ];

  return (
    <>
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      isRowSelectable={false}
    />


    <MUIDataTable
        title={"Employee Requests"}
        data={data2}
        columns={columns2}
        isRowSelectable={false}
    />
    </>
  )
}
