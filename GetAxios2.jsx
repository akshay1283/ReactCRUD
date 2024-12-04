
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GetAxios2 = () => {
    
    const [formData,setFormData]=useState({
        uname:'',
        uemail:'',
        umobile:'',
        index:''
    
    })
    const getValue=(e)=>{
       var oldData={...formData}
        var inputName=e.target.name;
        var inputValue=e.target.value;
        oldData[inputName]=inputValue;
        setFormData(oldData);
       // console.log(oldData);
        
    }
    const[userData,setUserData]=useState([])

    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(" Name:" + formData.uname + "\n Email:" + formData.uemail + "\n Mobile:" + formData.umobile);
       
        
        let validData=userData.filter((v)=>v.uemail==formData.uemail||v.umobile==formData.umobile)

        //console.log(validData);
        if(formData.index===""){

        if(validData.length==1){
            // alert("user already exist")
            toast.error("user already exist");
        }else{
            let currentUser={
                index:formData.index,
                uname:formData.uname,
                uemail:formData.uemail,
                umobile:formData.umobile
            }
            var olduser=[...userData,currentUser]
            setUserData(olduser)
            console.log(olduser);
            console.log(userData.length);

        }
        setFormData({
                uname:'',
                uemail:'',
                umobile:'',
                index:''
        
        })
    }
    else{
        //console.log(formData.uid);
        let editIndex=formData.index;
        let oldData=userData;
        // [{},{},{}]
        oldData[editIndex]['uname']=formData.uname
        oldData[editIndex]['uemail']=formData.uemail
        oldData[editIndex]['umobile']=formData.umobile
        setUserData(oldData)
        setFormData({
            uname:'',
            uemail:'',
            umobile:'',
            index:''
        })
    }
    }
    var deleteRow=(indexNumber)=>{
        let deleteUser=userData.filter((v,i)=>i!=indexNumber)
        console.log("delete index "+deleteUser.length);
        setUserData(deleteUser)
        toast.success("user deleted");

    }
    var editRow=(indexNumber)=>{
        let editUser=userData.filter((v,i)=>i==indexNumber)[0]
        //console.log(editUser);
        editUser['index']=indexNumber;
        setFormData(editUser)
        console.log(editUser);
        
    }
    return (
        <div>
            <ToastContainer position="top-center"/>
            <form onSubmit={handleSubmit}>
               
                Name:<input type="text" name='uname' value={formData.uname} onChange={getValue}/><br/>
                Email:<input type="email" name='uemail' value={formData.uemail} onChange={getValue}/><br/>
                Mobile no:<input type="tel" name='umobile' value={formData.umobile} onChange={getValue}/><br/>
                <button>{
                    formData.index!==""?"update":"save"
                    }</button>
            </form>
            <table className='table'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {userData.length>=1 ?
                    userData.map((x,index)=>{
                return (<tr key={index}>
                    <td>{index+1}</td>
                    <td>{x.uname}</td>
                    <td>{x.uemail}</td>
                    <td>{x.umobile}</td>
                    <td><button onClick={()=>{editRow(index)}}>edit</button>
                    <button onClick={()=>deleteRow(x.index)}>delete</button></td>
                    </tr>)
                    }) :
                    <tr>
                        <td colSpan={6}>NO DATA FOUND</td>
                    </tr>
                    }
               
                  
                    
                </tbody>
            </table>
        </div>
    );
}

export default GetAxios2;
