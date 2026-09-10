import DownloadVideo from '@/components/DownloadVideo';
import { NUZContext } from '@/context/NUZContext';
import { deleteDownloadedVideo, getDownloadedVideos } from '@/database/videoDatabase';
import { globalStyles } from '@/styles/global';
import { Picker } from '@react-native-picker/picker';
import { useContext, useEffect, useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function OfflineStudy() {
  const [semester, setSemester] = useState('');
  const [module, setModule] = useState('');
  const [lesson, setLesson] = useState('');

  const [downloadvideos, setDownloadVideos] = useState<any[]>([]);

  const { studentInfo } = useContext(NUZContext);

  // --------------------------------
  // Load downloaded videos
  // --------------------------------

  const loadDownloadVideo = async () => {
    try {
      const videos = await getDownloadedVideos();

      console.log('Downloaded videos:', videos);

      setDownloadVideos(videos);
    } catch (error) {
      console.error('Failed to load downloaded videos:', error);
    }
  };

  useEffect(() => {
    loadDownloadVideo();
  }, []);

  // --------------------------------
  // Get student's class
  // --------------------------------

  const studentClass =
    studentInfo?.studentID?.slice(2, 5) ?? '';

  // --------------------------------
  // Get student's batch
  // --------------------------------

  const studentBatch = studentInfo?.studentID
    ? (
        Number(studentInfo.studentID.slice(0, 2)) - 24
      ).toString()
    : '';

  // --------------------------------
  // Debug
  // --------------------------------

  console.log('Student ID:', studentInfo?.studentID);
  console.log('Student Class:', studentClass);
  console.log('Student Batch:', studentBatch);

  // --------------------------------
  // Filter videos by student
  // --------------------------------

  const filteringLessonByStudentID = useMemo(() => {
    return downloadvideos.filter(
      (item) =>
        item.course === studentClass &&
        item.batch === Number(studentBatch)
    );
  }, [
    downloadvideos,
    studentClass,
    studentBatch,
  ]);

  // --------------------------------
  // Different Semesters
  // --------------------------------

  const differentSemesters = useMemo(() => {
    return [
      ...new Set(
        filteringLessonByStudentID.map(
          (item) => item.semester
        )
      ),
    ];
  }, [filteringLessonByStudentID]);

  // --------------------------------
  // Different Modules
  // Based on Semester
  // --------------------------------

  const differentModules = useMemo(() => {
    return [
      ...new Set(
        filteringLessonByStudentID
          .filter(
            (item) =>
              item.semester === Number(semester)
          )
          .map((item) => item.module)
      ),
    ];
  }, [
    filteringLessonByStudentID,
    semester,
  ]);

  // --------------------------------
  // Different Lessons
  // Based on Semester + Module
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
  }, [
    filteringLessonByStudentID,
    semester,
    module,
  ]);

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

 
 

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 50,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Offline Study
      </Text>

      {/* ================================
          SEMESTER
      ================================= */}

      <View>
        <Text>Semester</Text>

        <View style={{ marginBottom: 5 }}>
          <Picker
            style={globalStyles.input}
            selectedValue={semester}
            onValueChange={(value) => {
              setSemester(value);
              setModule('');
              setLesson('');
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

      {/* ================================
          MODULE
      ================================= */}

      <View>
        <Text>Modules</Text>

        <View style={{ marginBottom: 5 }}>
          <Picker
            style={globalStyles.input}
            selectedValue={module}
            onValueChange={(value) => {
              setModule(value);
              setLesson('');
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

      {/* ================================
          LESSON
      ================================= */}

      <View>
        <Text>Lessons</Text>

        <View style={{ marginBottom: 5 }}>
          <Picker
            style={globalStyles.input}
            selectedValue={lesson}
            onValueChange={(value) => {
              setLesson(value);
            }}
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

      {/* ================================
          VIDEO
      ================================= */}

      <View style={{ marginTop: 20 }}>
        {selectedVideos.length > 0 ? (
          selectedVideos.map((video) => (
            <DownloadVideo
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