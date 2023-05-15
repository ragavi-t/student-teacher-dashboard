import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Createstudent() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      age: "",
      address: ""
    },

    validate: (values) => {
      let errors = {}
      if (values.first_name === "") {
        errors.first_name = "Please enter valid first_name"
      }
      
      if (values.last_name === "") {
        errors.last_name = "Please enter valid model last_name"
      }
      if (values.phone_number === "") {
        errors.phone_number = "Please enter valid phone_number"
      }
      
        if (values.age === "") {
          errors.age = "Please enter age"
        }

      if (values.address === "") {
        errors.address = "Please enter valid address"
      }
      return errors;

    },

    onSubmit: async (values) => {
     let user = await axios.post("https://6301ec84c6dda4f287af4f45.mockapi.io/Students",values)
     navigate("/portal/Students")
    }
  })

  return (

    <div className='container col-lg-12  mt-5'>
      <div className='container col-lg-6  mt-5'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row '>
            <div className="col-lg-6">
              <label for="first_name" className="form-label">First Name</label>
              <input type={"text"} className="form-control" id="first_name" name="first_name"
                onChange={formik.handleChange}
                value={formik.values.first_name} />
              <span style={{ color: "red" }}>{formik.errors.first_name}</span>
            </div>
            <div className="col-lg-6">
              <label for="last_name" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="last_name" name="last_name"
                onChange={formik.handleChange}
                value={formik.values.last_name} />
              <span style={{ color: "red" }}>{formik.errors.last_name}</span>
            </div>
            <div className="col-lg-6">
              <label for="phone_number" className="form-label">Contact</label>
              <input type="text" className="form-control" id="phone_number" name="phone_number"
                onChange={formik.handleChange}
                value={formik.values.phone_number} />
              <span style={{ color: "red" }}>{formik.errors.phone_number}</span>
            </div>
            <div className="col-lg-6">
              <label for="age" className="form-label">Age</label>
              <input type="text" className="form-control" id="age" name="age"
                onChange={formik.handleChange}
                value={formik.values.age} />
              <span style={{ color: "red" }}>{formik.errors.age}</span>
            </div>
            <div className="col-lg-6">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name="address"
                onChange={formik.handleChange}
                value={formik.values.address} />
              <span style={{ color: "red" }}>{formik.errors.address}</span>
            </div>
          </div>
          <input type="submit"  vlaue="Submit"className="btn btn-primary mt-5" 
          disabled={!formik.isValid}/>
        
        </form>
      </div>
    </div>


  )
}

export default Createstudent;