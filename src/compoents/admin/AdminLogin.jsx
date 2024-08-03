import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function AdminLogin() {
  const navigate = useNavigate();
  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const credential = localStorage.getItem("user");

    if( credential != null)
      {
        navigate("/admin")
      }
  },[]);


  // useEffect(() => {
  //   const credential = localStorage.getItem("user");

  //   if (credential != null) {
  //     navigate("/admin")
  //   }
  // }, []);

  function handleLogin(e) {
    e.preventDefault();

    // console.log(user, password)
    if (user === "admin" && password === "admin") {

      localStorage.setItem("user", user);
      // localStorage.setItem("password", password)
      navigate("/admin")
    } else {
      // alert("Invalid Credential")
      Swal.fire("Invalid Credential !!!");
      setUser("")
      setPassword("")
    }

  }


  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <form action="">
                       <div className='card-body p-1 text-center'>
                        <label htmlFor="">username</label>
                        <input value={user} onChange={(e) => setUser(e.target.value)} type="text" className='form-control form-control-lg'/>

                       </div>
                       <div className='card-body p-1 text-center'>
                        <label htmlFor="">password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='form-control form-control-lg'/>

                       </div>
                       <button onClick={(e) => handleLogin(e) }   className='btn  btn-md' style={{backgroundColor: "rgb(136, 200, 188)"}}>Login</button>

                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    </div>
  );
}
