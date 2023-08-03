import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import { Image } from 'expo-image';


const Places = () => {
    return (
        <View>
            <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={require("../assets/data/image.png")}
                        style={{
                            height: 200,
                            width: 220,
                            left: 15,
                            bottom: 40,
                            borderRadius: 10,

                        }} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        left: 15,
                        bottom: 30,
                    }}>Hogenakkal India</Text>
                    <Text style={{
                        fontSize: 20,
                        color: "#3265A4",
                        left: 15,
                        bottom: 15,
                    }}>$ 100.00 <Entypo name="circle-with-plus" size={24} color="#3265A4" /></Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={require("../assets/data/image1.png")}
                        style={{
                            height: 200,
                            width: 220,
                            left: 15,
                            bottom: 40,
                            borderRadius: 10,

                        }} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        left: 15,
                        bottom: 30,
                    }}>Tuticorin, India</Text>
                    <Text style={{
                        fontSize: 20,
                        color: "#3265A4",
                        left: 15,
                        bottom: 15,
                    }}>$ 100.00 <Entypo name="circle-with-plus" size={24} color="#3265A4" /></Text>

                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: "#F4F4F4",
    },
    card: {
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        width: 250,
        height: 300,
        borderRadius: 15,
        margin: 20,
        bottom: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    cardElevated: {
        backgroundColor: '#fff',
    },

})
export default Places;