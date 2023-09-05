import { StyleSheet, Pressable, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import ScrollTabs from '@/components/Scroll';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Places from '@/components/Places';
import Destination from '@/components/Destination';

export default function TabOneScreen() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={{ backgroundColor: "#F4F4F4" }}>
            <View style={{ backgroundColor: "#F4F4F4" }}>
              <View style={styles.page}>
                <Text style={styles.header}>Hello, <Text style={styles.header1}>Samuel </Text></Text>
                <Feather name="user" size={30} color="black" />
              </View>
              <View style={styles.scroll}>
                <TextInput placeholder='Search a Place Here...' clearButtonMode='always' placeholderTextColor={"gray"} />
                <Entypo name="magnifying-glass" size={24} color="grey" />
              </View>
            </View>

            <View style={{ backgroundColor: "transparent" }}>
              <View style={{ marginVertical: 20.0, backgroundColor: "transparent" }}>
                <ScrollTabs />
              </View>
              <View style={styles.container}>
                <Text style={styles.travelplaces}
                >   Travels Places </Text>
                <Text style={styles.show}
                >Show More <MaterialCommunityIcons name="greater-than" size={15} color="gray" /></Text>
              </View>
              <View>
                <Places />
              </View>
              <View style={styles.container1}>
                <Text style={styles.travelplaces}
                >Best Destination </Text>
                <Text style={styles.show1}
                >Show More <MaterialCommunityIcons name="greater-than" size={15} color="gray" /></Text>
              </View>
              <View>
                <ScrollView>
                  <Destination />
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  page: {
    marginLeft: 5,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#F4F4F4",
    marginTop: 20,
  },
  header: {
    marginLeft: 15,
    fontSize: 25,
    color: 'black'
  },
  header1: {
    color: '#4269A1',
    fontSize: 25,
  },
  scroll: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: "white" 
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    bottom: 20,
  },
  container1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    bottom: 20,
  },
  travelplaces: {
    fontSize: 20,
    marginLeft: 15,
    color: 'gray'
  },
  show: {
    fontSize: 20,
    color: 'grey',
    marginRight: 15,
  },
  show1: {
    fontSize: 20,
    color: 'grey',
    marginRight: 15,
  },
});
