import { StyleSheet } from "react-native"


export const globalStyles = StyleSheet.create({
  container: {
    paddingTop:20,
    padding:0,
    flex:1
  },
  // paragrahp1 :{
  //   fontFamily : "nunito-bold",
  //   fontSize : 18,
  //   color : "#120202"
  // },
  // paragrahp2 :{
  //   fontFamily : "nunito-bold",
  //   fontSize : 16,
  //   color : "#120202"
  // },


  // homeTitle: {
  //   marginTop: 26,
  //   marginBottom: 10,
  //   fontSize: 20,
  //   fontWeight: "normal",
  //   textAlign: "center",
  // },

  homeClassInfoCon: { 
    marginTop: 30, 
    marginBottom: 30,
  },

  homeClassName: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },

  homeCohort: {
    fontSize: 14,
    marginTop: 0,
    fontWeight: "500",
    textAlign: "center",
  },

  semesterCard:{
    backgroundColor : "#fff",
    padding : 20,
    borderRadius : 8,
    overflow : "hidden",
    marginTop: 10,
    marginBottom: 16,
    height: 'auto',
    minWidth: 250,
    maxWidth: 350,
    // width:320,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  }, 

  semesterCardHover: {
    transform: [{ translateY: -2 }],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 5,
  },

  semesterCardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },

  semesterCardImage:{
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },

  semesterCardTitle:{
    fontFamily: 'Roboto-Regular',
    fontSize : 18,
    fontWeight : "bold",
    color : "#120202"
  },

  semesterCardBut:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40, 
    width: 80,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#0a378c",
  },

  semesterCardButHover: {
    backgroundColor: "#082b70",
  },

  semesterCardButPressed: {
    backgroundColor: "#061f52",
    opacity: 0.9,
  },

  semesterCardContent: {
    display: "flex",  
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginLeft:18,
    marginRight:18,
    marginTop: 14,
    marginBottom: 0,
    height: 'auto',
    // backgroundColor: "yellow",
  },

   courseCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: 210,
    minWidth: 250,
    maxWidth: 350,
    // width:320,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingBottom: 8,
    paddingTop: 6
  },

  courseCon: {
    width: "100%",
    height: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",    
    flexDirection: "row",
    paddingTop: 8,
    marginBottom: 0,
    zIndex: 1,
  },

  courseImgCon: {
    width: "30%",
    height: 80, 
    paddingLeft: 10,
  },

  courseImage: {
    width: 80,
    height: '100%',
    resizeMode: "cover",
    borderRadius: 10,
  },

  courseTitleCon: {
    width: "70%",
    height: "100%",
    paddingLeft: 10,
    display: "flex",
    justifyContent: "center",
  },

  courseTextTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: "#060606",
  },

  courseSemester: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color:'#06060681',
  },

  courseTextCon: {
    width: "100%",
    height: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop:0,
    borderRadius: 8,
    margin:0
  },

  courseProgress: {
    width: '100%',
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
    // backgroundColor: "#e5e7eb",
  },

  courseBut: {
    fontFamily: 'Roboto-Regular',
    width: "100%",
    height:'auto',
    paddingTop:10,
    paddingBottom:10,
    marginBottom:5,
    marginTop:0,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#0a378c",
    color: 'white',
  },

  courseButHover: {
    backgroundColor: "#082b70",
  },

  courseButPressed: {
    backgroundColor: "#061f52",
    opacity: 0.9,
  },

  courseInfoTitle: {
    display:'flex',
    width:'auto',
    height:'auto',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    marginBottom:18,  
  },

  courseName: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  majorTitle: {
    fontSize: 16,
    color: '#4b5563',
    fontWeight: '500',
  },

  lecturerName: {
    fontSize: 14,
    color: '#4b5563',
    fontWeight: '500',
  },

  lessonCard: {
    backgroundColor : "#fff",
    height: 'auto',
    borderRadius : 8,
    overflow : "hidden",
    minWidth: 250,
    maxWidth: 350,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },

  lessonCardHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop:18,
    paddingBottom:18,
    backgroundColor: "#fff",
    borderWidth: 0.6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#d5d5d7",
  },

  lessonCardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    // paddingTop: 8,
    // gap:8,
    height: 'auto',
    },

    lessonList: {
      width: "100%",
      height:'auto', 
      paddingTop:16,
      paddingBottom:16,
      paddingLeft: 12,
      paddingRight: 10,
      backgroundColor: "#fcffff76",
      borderBottomWidth: 1,
      borderBottomColor: "#d5d5d7",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    lessonListActive: {
      backgroundColor: "#e5e7eb",
    },

  lessonCardHeaderText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    fontWeight: "bold",
    color : "#120202"
  },

  lessonListText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    height:'auto',
    color : "#120202",
    width: "88%",
  },

  lessonListTextActive: {
    color: "#0a378c",
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