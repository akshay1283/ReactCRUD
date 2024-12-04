import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';


const GetAxios = () => {
    const url="https://jsonplaceholder.typicode.com/users"
    const [data,setData]=useState('')
    const [my_name,setName]=useState('')
    const [my_email,setEmail]=useState('')
    const [my_pass,setPass]=useState('')
    const [my_age,setAge]=useState('')
    const [my_class,setClass]=useState('')
    const [my_marks,setMarks]=useState('')

    useEffect(()=>{
       Axios.get(url).then((response)=>{
        console.log(response.data);
        setData(response.data)
       }).catch((err)=>{console.log(err);
       })
    },[])
    const Handle=(e)=>{
        e.preventDefault();
        Axios.post(url,
            {name:my_name,
            age:my_age,
            class:my_class,
            marks:my_marks
        })
        .then((response)=>{
            console.log(response.data);
        }).catch((err)=>{console.log(err);
        })
    }
    //const arr=[10,20,30]
    return (
        <div>
          {/* <form onSubmit={Handle}>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" onChange={(e)=>{setPass(e.target.value)}}/>
            <input type='submit' value="submit"/>
          </form> */}
        <form onSubmit={Handle}>
          Teacher: <input className="form-control" type="text" value="Mrs Jenny" aria-label="readonly input example" readOnly/>
            Enter Name: <input className="form-control form-control-lg" type="text" placeholder="your name" aria-label=".form-control-lg example" onChange={(e)=>{setName(e.target.value)}}/>
            Enter Age: <input className="form-control form-control-lg" type="text" placeholder="your age" aria-label=".form-control-lg example" onChange={(e)=>{setAge(e.target.value)}}/>
            Enter Class: <input className="form-control form-control-lg" type="text" placeholder="your class" aria-label=".form-control-lg example" onChange={(e)=>{setClass(e.target.value)}}/>
            Enter Marks: <input className="form-control form-control-lg" type="text" placeholder="your marks" aria-label=".form-control-lg example" onChange={(e)=>{setMarks(e.target.value)}}/>
            <input type='submit' value="submit"/>
        </form>
        </div>
    );
}

export default GetAxios;
