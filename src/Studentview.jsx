import axios from 'axios'
import React from 'react'
 import { useParams } from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'
import  { useEffect } from 'react'
import {useState} from 'react'


function Studentview() {
    const params=useParams()
    const [searchParams,setSearchParams]=useSearchParams()
    console.log(...searchParams)
    const[userData,setUserData]= useState({})
    useEffect(() => {
      loadUser()
    }, [])
    
    let loadUser = async ()=>{
      try{
        let user=await axios.get(`https://6301ec84c6dda4f287af4f45.mockapi.io/Students/${params.id}`)
        setUserData(user.data)
       
      }
      catch(error){

      }
    }
  return (
    <>
    <h3>First Name : {userData.first_name}</h3>
    <h3>Last Name : {userData.last_name}</h3>
    <h3>Age : {userData.age}</h3>
    <h3>Contact : {userData.phone_number}</h3>
    <h3>Address : {userData.address}</h3>
    </>
  )
}

export default Studentview