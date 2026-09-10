import { StyleSheet } from "react-native"


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#e7e7ed",
  },
  paragrahp1 :{
    fontFamily : "nunito-bold",
    fontSize : 18,
    color : "#120202"
  },
  paragrahp2 :{
    fontFamily : "nunito-bold",
    fontSize : 16,
    color : "#120202"
  },

 title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  
  input:{
    borderWidth : 1,
    borderColor : "#3b0505",
    padding: 10,
    borderRadius: 6
  },
   profileHeader: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 25,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 5,
  },

  studentId: {
    fontSize: 14,
    color: "#777",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 25,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  label: {
    fontSize: 12,
    color: "#888",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 3,
  },

  downloadButton: {
    height: 55,
    backgroundColor: "#20d538",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    
  },

  downloadText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },

  loginButton: {
    backgroundColor: "#2563eb",
  },

  logoutButton: {
    height: 55,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#dc2626",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  }
  
})