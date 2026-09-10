import { NUZContext } from "@/context/NUZContext";
import { globalStyles } from "@/styles/global";
import { Picker } from "@react-native-picker/picker";
import { useContext, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
//import { lessons } from "../../../assets/products";
import VideoPlayers from "../../components/VidoePlayers";
import "../../styles/global.css";
import Login from "../login";

export default function Index() {
  const [semester, setSemester] = useState("");
  const [module, setModule] = useState("");
  const [lesson, setLesson] = useState("");

  const { token, studentInfo, lessons } = useContext(NUZContext);

  // --------------------------------
  // Get student class and batch
  // --------------------------------

 
   const studentClass = studentInfo?.studentID?.slice(2, 6).includes("DSSS")? studentInfo?.studentID?.slice(2, 6) : studentInfo?.studentID?.slice(2, 5);

  const studentBatch = studentInfo?.studentID
    ? (Number(studentInfo.studentID.slice(0, 2)) - 24).toString()
    : "";

  // --------------------------------
  // Lessons for this student
  // --------------------------------

  const filteringLessonByStudentID = useMemo(() => {
    return lessons.filter(
      (item) =>
        item.course === studentClass &&
        item.batch === Number(studentBatch)
    );
  }, [studentClass, studentBatch]);

  // --------------------------------
  // Different Semesters
  // --------------------------------

  const differentSemesters = useMemo(() => {
    return [
      ...new Set(
        filteringLessonByStudentID.map((item) => item.semester)
      ),
    ];
  }, [filteringLessonByStudentID]);

  // --------------------------------
  // Different Modules
  // Based on selected semester
  // --------------------------------

  const differentModules = useMemo(() => {
    return [
      ...new Set(
        filteringLessonByStudentID
          .filter(
            (item) => item.semester === Number(semester)
          )
          .map((item) => item.module)
      ),
    ];
  }, [filteringLessonByStudentID, semester]);

  // --------------------------------
  // Different Lessons
  // Based on semester + module
  // --------------------------------

  const differentLessons = useMemo(() => {
    return [
      ...new Set(
        filteringLessonByStudentID
          .filter(
            (item) =>
              item.semester === Number(semester) &&
              item.module === module
          )
          .map((item) => item.lesson)
      ),
    ];
  }, [filteringLessonByStudentID, semester, module]);

  // --------------------------------
  // Selected Video
  // --------------------------------

  const selectedVideos = useMemo(() => {
    return filteringLessonByStudentID.filter(
      (item) =>
        item.semester === Number(semester) &&
        item.module === module &&
        item.lesson === Number(lesson)
    );
  }, [
    filteringLessonByStudentID,
    semester,
    module,
    lesson,
  ]);

  // --------------------------------
  // If not logged in
  // --------------------------------

  if (token === "") {
    return <Login />;
  }

  return (
    <ScrollView>
      <Text style={globalStyles.title}>
        Continous your study!
      </Text>

      <View style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={globalStyles.paragrahp1}>
          Class: {studentClass}
        </Text>

        <Text style={globalStyles.paragrahp2}>
          Batch: {studentBatch}
        </Text>
      </View>

      {/* =========================
          Semester
      ========================= */}

      <View>
        <Text>Semester</Text>

        <View style={{ marginBottom: 5 }}>
          <Picker
            style={globalStyles.input}
            selectedValue={semester}
            onValueChange={(value) => {
              setSemester(value);
              setModule("");
              setLesson("");
            }}
          >
            <Picker.Item
              label="Select Semester"
              value=""
            />

            {differentSemesters.map((item) => (
              <Picker.Item
                key={item}
                label={`Semester ${item}`}
                value={item.toString()}
              />
            ))}
          </Picker>
        </View>
      </View>

      {/* =========================
          Modules
      ========================= */}

      <View>
        <Text>Modules</Text>

        <View style={{ marginBottom: 5 }}>
          <Picker
            style={globalStyles.input}
            selectedValue={module}
            onValueChange={(value) => {
              setModule(value);
              setLesson("");
            }}
          >
            <Picker.Item
              label="Select Module"
              value=""
            />

            {differentModules.map((item) => (
              <Picker.Item
                key={item}
                label={item}
                value={item}
              />
            ))}
          </Picker>
        </View>
      </View>

      {/* =========================
          Lessons
      ========================= */}

      <View>
        <Text>Lessons</Text>

        <View style={{ marginBottom: 5 }}>
          <Picker
            style={globalStyles.input}
            selectedValue={lesson}
            onValueChange={(value) => setLesson(value)}
          >
            <Picker.Item
              label="Select Lesson"
              value=""
            />

            {differentLessons.map((item) => (
              <Picker.Item
                key={item}
                label={`Lesson ${item}`}
                value={item.toString()}
              />
            ))}
          </Picker>
        </View>
      </View>

      {/* =========================
          Videos
      ========================= */}

      <View>
        {selectedVideos.length > 0 ? (
          selectedVideos.map((video) => (
            <VideoPlayers
              key={video.id}
              video={video}
            />
          ))
        ) : (
          <Text>
            Please select Semester, Module and Lesson.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}