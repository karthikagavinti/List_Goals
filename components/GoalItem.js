import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
        <Pressable android_ripple={{color:"#dddddd"}} onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=>pressed && styles.pressedItem}
          
          >
        <Text style={styles.goaltext}>{props.text}</Text>
        </Pressable>
      </View>
 
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    // color: "white",
  },

  pressedItem:{
opacity:0.3
  },
  goaltext: {
    padding: 8,
    color: "white",
  },
});
