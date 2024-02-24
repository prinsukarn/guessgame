import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Android only property for shadow
    elevation: 4,
    marginTop: deviceWidth < 380 ? 18 : 36,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    // Shadow for IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
