import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {router} from "expo-router";

const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL;

type StudentInfo = {
  name?: string;
  studentID: string;
  password: string;
};

type NUZContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  studentInfo: StudentInfo;
  setStudentInfo: React.Dispatch<React.SetStateAction<StudentInfo>>;
  allStudent: any[];
  lessons: any[];
  getLessons: () => Promise<void>;
  loading: boolean;
  logout: () => Promise<void>;
};

export const NUZContext = createContext<NUZContextType>({
  token: "",
  setToken: () => {},
  studentInfo: {
    studentID: "",
    password : ""
  },
  setStudentInfo: () => {},
  allStudent: [],
  lessons: [],
  getLessons: async () => {},
  loading: true,
  logout: async () => {},
});

const NUZProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    studentID: "",
    password : ""
  });

  const [allStudent, setAllStudent] = useState<any[]>([]);
  const [lessons, setLessons] = useState<any[]>([]);

  // ---------------------------------------
  // Restore login when app starts
  // ---------------------------------------
  const restoreLogin = async () => {
    try {
      const savedToken = await SecureStore.getItemAsync("nuz_token");
      const savedStudent = await SecureStore.getItemAsync("nuz_student");
      

      if (savedToken) {
        setToken(savedToken);
      }

      if (savedStudent) {
        setStudentInfo(JSON.parse(savedStudent));
      }
    } catch (error) {
      console.log("Restore login error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------
  // Save login
  // ---------------------------------------
  const saveLogin = async (
    newToken: string,
    student: StudentInfo
  ) => {
    try {
      await SecureStore.setItemAsync("nuz_token", newToken);

      await SecureStore.setItemAsync("nuz_student",JSON.stringify(student)
      );

      setToken(newToken);
      setStudentInfo(student);
    } catch (error) {
      console.log("Save login error:", error);
    }
  };

  // ---------------------------------------
  // Logout
  // ---------------------------------------
  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("nuz_token");
      await SecureStore.deleteItemAsync("nuz_student");

      setToken("");
      setStudentInfo({
        studentID: "",
        password: ""
      });

       router.replace('/login')
       
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  // ---------------------------------------
  // Get students
  // ---------------------------------------
  const getStudentAccess = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/student/get"
      );

      if (response.data.success) {
        setAllStudent(response.data.student);
      }
    } catch (error) {
      console.log("Get student error:", error);
    }
  };

  // ---------------------------------------
  // Get lessons
  // ---------------------------------------
  const getLessons = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/lessons/getAllLessons"
      );

      if (response.data.success) {
        setLessons(response.data.lesson);
      }
    } catch (error) {
      console.log("Get lessons error:", error);
    }
  };

  // Send the token with every request whenever it changes
useEffect(() => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // if your backend reads it as `token` header instead, use:
    // axios.defaults.headers.common["token"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}, [token]);

// Restore login once
useEffect(() => {
  restoreLogin();
}, []);

// Load data AFTER the token is available
useEffect(() => {
  if (!loading && token) {
    getStudentAccess();
    getLessons();
  }
}, [loading, token]);


  const value = {
    token,
    setToken,
    studentInfo,
    setStudentInfo,
    allStudent,
    lessons,
    getLessons,
    loading,
    logout,
    saveLogin,
    backendUrl
  };

  return (
    <NUZContext.Provider value={value}>
      {children}
    </NUZContext.Provider>
  );
};

export default NUZProvider;
