'use client'
import User from "@/components/user";
import axios from "axios";
import React, { useState,useEffect } from "react";

function Users({users}) {
    // const [users, setUsers] = useState([]);

    // const getData = async ()=>{
    //     const options = {
    //                 method: 'GET',
    //                 url : 'https://jsonplaceholder.typicode.com/users'
    //             }
    //     const res = await axios.request(options);
    //     setUsers(res.data)
    //     console.log(res);
    // }
    // useEffect(()=>{
    //     getData();
    // },[])
  return (
    <div>
        <h1>Users</h1>
        {users.map((user)=> <User user={user}/>)}
    </div>
  );
}

export default Users;

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await data.json()
    console.log(res);
    return {
        props: {
            users: res
        }
    }
}
