import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_12_6}>
        <Text style={styles.Text_12_6}>welcome to hello app</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_13_2}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("4_2"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_14_9}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("4_2"))
        }
      >
        <Text style={styles.Text_14_9}>open hello app</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_12_6: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_12_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_13_2: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("67%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  TouchableOpacity_14_9: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_14_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
