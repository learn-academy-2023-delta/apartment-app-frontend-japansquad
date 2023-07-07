import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const formRef = useRef()
  const navigate = useNavigate ()
  
  const handleSubmit = (e) => {
    e.preventDefault()
  
    const formData = new FormData(formRef.current)
    const data = Object.fromEntires(formData)
    const userInfo = {
      "user" : {email: data.email, password: data.password}
    }
    console.log(userInfo)
    navigate("/")
    e.target.reset()
  }
  return (
    <>
      <form ref={formRef} >
        Email: <input type="email" name="email" placeholder="ex@example.com"/>
        Password: <input type="password" name="password" placeholder='password'/>
        Confirm Password: <input type="password" name="password_confirmation" placeholder='confirm password'/>
        <input type='submit' value="Submit" />
      </form>
    </>
  )
}

export default SignUp