import { NUZContext } from '@/context/NUZContext';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useContext } from 'react';
import Login from '../login';


export default function _layout() {
    const {token} = useContext(NUZContext);

     
  return (
    token === "" ? <Login /> : 
    <Tabs>
       
        <Tabs.Screen name="index" options={{
            headerShown: false, 
            title : 'Home',
            tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),}} />

        <Tabs.Screen name='assignment'
        options={{
            headerShown:false,
            title :'Assignment',
            tabBarIcon:({color, size})=>(
                <Ionicons name="clipboard-sharp" size={size} color={color} />
            )
        }} 
        />

        <Tabs.Screen name='offlineStudy'
        options={{
            headerShown:false,
            title :'Offline Study',
            tabBarIcon:({color, size})=>(
                <Ionicons name='download' size={size} color={color} />
            )
        }} 
        />

        <Tabs.Screen name='profile'
        options={{
            headerShown:false,
            title :'Profile',
            tabBarIcon:({color, size})=>(
                <Ionicons name='person' size={size} color={color} />
            )
        }} 
        />

    </Tabs>
    
  )
}