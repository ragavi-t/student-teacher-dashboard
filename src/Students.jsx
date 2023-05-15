import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Students() {
  const [Students, setStudents] = useState([]);
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        loadData()
    }, [])
    let loadData = async () => {
        setLoading(true)
        let Students = await axios.get("https://6301ec84c6dda4f287af4f45.mockapi.io/Students")
        setStudents(Students.data)
        setLoading(false)
    }
    let productDelete = async (id) => {
        
        try {
            let ask = window.confirm(`Do you want to delete?`)
        if(ask){ 
            await axios.delete(`https://6301ec84c6dda4f287af4f45.mockapi.io/Students/${id}`)
        loadData()
    }
           
        }
        catch (error) {

        }
    }
  return (
  <>
  <div className="container-fluid">
  <Link to="/portal/createproduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
      className="fas fa-download fa-sm text-white-50"></i> Create Details</Link>
  <br />
  {
      isLoading ? <span>Loading...</span> : <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
              <tr style={{textAlign:"center"}}>
                  <th>S.No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tfoot>
              <tr style={{textAlign:"center"}}>
                  <th>S.No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
              </tr>
          </tfoot>
          <tbody>
              {
                  Students.map((Student, index) => {
                      return (<tr style={{textAlign:"center"}}>
                          <td>{index + 1}</td>
                          <td>{Student.first_name}</td>
                          <td>{Student.last_name}</td>
                          <td>{Student.age}</td>
                          <td>{Student.phone_number}</td>
                          <td>{Student.address}</td>
                          
                          <td>
                              <button type="button" class="btn btn-primary mr-2"><Link style={{ color: "white" }} to={`${Student.id}`}>View</Link></button>
                              <button type="button" class="btn btn-warning mr-2"><Link style={{ color: "white" }} to={`edit/${Student.id}`}>Edit</Link></button>
                              <button type="button" onClick={() => productDelete(Student.id)} class="btn btn-danger mr-2" style={{ color: "white" }}>Delete</button>
                          </td>
                      </tr>
                      )
                  })

              }
          </tbody>
      </table>

  }


</div>

</>
)
   
  
}

export default Students;