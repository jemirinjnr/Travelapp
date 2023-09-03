import { StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function Tz() {
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={{ backgroundColor: "#F4F4F4" }}>
          <View style={{ backgroundColor: "#F4F4F4" }}>
            <View style={styles.page}>
              <Text style={styles.header}>Best, <Text style={styles.header1}>Destination </Text></Text>
              <Ionicons name="settings-outline" size={23} color="#6B6C6C" />
            </View>
            <Pressable>
              <View style={[styles.card, styles.cardElevated]}>
                <Image
                  source={require("../(tabs)/images/image4.png")}
                  style={{
                    height: 190,
                    width: 350,
                    marginLeft: 15,
                    borderRadius: 10,

                  }} />
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  marginBottom: 10,
                  marginTop: 10,
                }}>Pondicherry - French Colony            <Entypo name="circle-with-plus" size={33} color="#3265A4" /></Text>
                <Text style={{
                  fontSize: 15,
                  color: "#3265A4",
                  marginLeft: 15,
                  marginBottom: 10,
                }}>5 Days To Go</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                <Image
                  source={require("../(tabs)/images/Image5.png")}
                  style={{
                    height: 190,
                    width: 350,
                    marginLeft: 15,
                    borderRadius: 10,
                  }} />
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  marginBottom: 10,
                  marginTop: 1,
                }}>Mudumalai- Ancient Hills                   <Entypo name="circle-with-plus" size={33} color="#3265A4" /></Text>
                <Text style={{
                  fontSize: 15,
                  color: "#3265A4",
                  marginLeft: 15,
                  marginBottom: 10,
                }}>5 Days To Go</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                <Image
                  source={require("../(tabs)/images/image6.png")}
                  style={{
                    height: 190,
                    width: 350,
                    marginLeft: 15,
                    borderRadius: 10,

                  }} />
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  marginBottom: 10,
                  marginTop: 10,
                }}>Pondicherry - French Colony             <Entypo name="circle-with-plus" size={33} color="#3265A4" /></Text>
                <Text style={{
                  fontSize: 15,
                  color: "#3265A4",
                  marginLeft: 15,
                  marginBottom: 10,
                }}>5 Days To Go</Text>
              </View>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
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
  },
  header1: {
    color: '#4269A1',
    fontSize: 25,
  },
  card: {
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    width: 380,
    height: 280,
    borderRadius: 15,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 30,
  },
  cardElevated: {
    backgroundColor: '#fff',
  },
});
