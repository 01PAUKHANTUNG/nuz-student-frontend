import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';
import CourseCard from '../../../components/cards/courseCard';
import { globalStyles } from '@/styles/global';

export default function semOne() {
  return (
    <ScrollView 
      contentContainerStyle={{ paddingBottom: 100 }} 
      showsVerticalScrollIndicator={false} 
    >
      <View style={globalStyles.container}>
        {/* Public Management */}
            <CourseCard
                courseImg={require('./../../../../assets/mpa/courses/pm.jpg')} 
                courseTitle="Public Management"
                comPer={80}
                onPress={() => router.push('/screens/semOne/pm/pm')}
                semester='First'
            />

            <CourseCard
                courseImg={require('./../../../../assets/mpa/courses/pp.jpg')} 
                courseTitle="Public Policies"
                comPer={60}
                onPress={() => router.push('/screens/semOne/pm/pm')}
                semester='First'
            />

              <CourseCard
                courseImg={require('./../../../../assets/mpa/courses/e.jpg')} 
                courseTitle="Ethics and Governance"
                comPer={0}
                onPress={() => router.push('/screens/semOne/pm/pm')}
                semester='First'
            />           
      </View>
    </ScrollView>
  )
}