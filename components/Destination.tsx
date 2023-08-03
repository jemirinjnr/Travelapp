import { Text, View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from 'expo-image';
import { FontAwesome } from '@expo/vector-icons';

var screenWidth = Dimensions.get("screen").width;

const Destination = () => {
    return (
        <View>
            <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={require("../assets/data/image2.png")}
                        style={styles.imageStyle}
                    />
                    <View>
                        <Text style={styles.textStyle}>Yanam, India </Text>
                        <Text style={styles.icon}><FontAwesome name="star" size={15} color="#FB9C0A" /> 5.6</Text>
                        <View style={styles.circle}>
                            <View style={styles.circle1}>
                                <View style={styles.circle2}>
                                    <View style={styles.circle3}>
                                        <Text style={styles.circleText}>12+</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={require("../assets/data/image3.png")}
                        style={styles.imageStyle}
                    />
                    <View>
                        <Text style={styles.textStyle}>Chennai, India
                        </Text>
                        <Text style={styles.icon}><FontAwesome name="star" size={15} color="#FB9C0A" /> 5.6</Text>
                        <View style={styles.circle}>
                            <View style={styles.circle}>
                                <View style={styles.circle}>
                                    <View style={styles.circle}>
                                        <Text style={styles.circleText}>12+</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: "#F4F4F4",
    },
    card: {
        backgroundColor: "transparent",
        width: screenWidth * 0.55,
        padding: 10,
        flexDirection: 'row',
        height: 100,
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
    },
    cardElevated: {
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    imageStyle: {
        height: 80,
        width: 80,
        marginRight: 8.0,
        borderRadius: 10,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 15,
        color: "#FB9C0A",
        marginTop: 7,
    },
    circle: {
        backgroundColor: "gray",
        borderColor: "white",
        marginTop: 7,
        height: 30,
        borderRadius: 30,
        width: 30,
    },
    circle1: {
        backgroundColor: "gray",
        borderWidth: 2,
        borderColor: "white",
        left: 15,
        height: 35,
        borderRadius: 35,
        width: 35,
        bottom: 3,
    },
    circle2: {
        backgroundColor: "gray",
        borderWidth: 2,
        borderColor: "white",
        left: 15,
        height: 34,
        borderRadius: 34,
        width: 34,
        bottom: 2,
    },
    circle3: {
        backgroundColor: "#3265A4",
        borderWidth: 2,
        borderColor: "white",
        left: 15,
        height: 32,
        borderRadius: 32,
        width: 32,
        bottom: 1,
    },
    circleText: {
        top: 5,
        left: 2,
        color: 'white',
    }
})
export default Destination;