import React from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Editstudent() {
  const params = useParams()
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      age: "",
      address: "",
  
    },

    validate: (values) => {
      let errors = {}
      if (values.first_name === "") {
        errors.first_name = "Please enter valid first_name"
      }
      if (values.first_name.length < 5) {
        errors.first_name = "Please enter valid first_name"
      }
      if (values.last_name === "") {
        errors.last_name = "Please enter valid position last_name"
      }
      if (values.phone_number === "") {
        errors.phone_number = "Please enter valid contact number"
      }
      if (values.age < 18) {
        errors.age = "Please enter valid age"
        if (values.age === "") {
          errors.age = "Please enter valid age"
        }
      }
      if (values.address === "") {
        errors.address = "Please enter valid address"
      }
      return errors;

    },

    onSubmit: async (values) => {
      await axios.put(`https://6301ec84c6dda4f287af4f45.mockapi.io/Students/${params.id}`, values)
      navigate("/portal/Students")
    }
  })
  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {

    try {
      let user = await axios.get(`https://6301ec84c6dda4f287af4f45.mockapi.io/Students/${params.id}`)
      
      formik.setValues({
        first_name: user.data.first_name,
        last_name: user.data.last_name,
        phone_number: user.data.phone_number,
        age: user.data.age,
        address: user.data.address

      })
    }
    catch (error) {

    }
  }


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
              <input type="number" className="form-control" id="age" name="age"
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
          <input type="submit" vlaue="Submit" className="btn btn-primary mt-5"
            disabled={!formik.isValid} />

        </form>
      </div>
    </div>


  )
}

export default Editstudent