import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'


const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL;


type NUZContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  studentInfo: {
    name: string;
    email: string;
    studentID: string;
    password: string;
  };
  setStudentInfo: React.Dispatch<React.SetStateAction<{
    studentID: string;
    password: string;
  }>>;
};

export const NUZContext = createContext<NUZContextType>({token: "", setToken: () => {}});

const NUZProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState('');
  const [studentClass, setStudentClass] = useState();

  const [studentInfo, setStudentInfo] = useState({
    studentID: "" ,
    password: ""
  });

 const [allStudent, setAllStudent] = useState([]);
 const [lessons, setLessons] = useState([]);
 
 const getStudentAccess = async ()=>{
  console.log("helo")
   let response = await axios.get(backendUrl + '/api/student/get');
     if(response.data.success){    
     setAllStudent(response.data.student)
   }
 }

 const getLessons = async ()=>{
   let response = await axios.get(backendUrl + '/api/lessons/getAllLessons');
     if(response.data.success){
     setLessons(response.data.lesson)
   }
 }

useEffect(()=>{
  getStudentAccess();
  getLessons();
},[]);



  const value = {
    token,setToken, studentInfo, setStudentInfo, allStudent, getLessons, lessons};

  

  return (
    <NUZContext.Provider value={value}>
      {children}
    </NUZContext.Provider>
  );
};

export default NUZProvider;
