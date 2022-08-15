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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d9cb887-45ee-4410-87f7-e57e20bed030"
        }}
        style={styles.ImageBackground_14_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/351cb0e7-82f6-4f36-9604-8d5da61fd819"
        }}
        style={styles.ImageBackground_14_13}
      />
      <View style={styles.View_14_14}>
        <Text style={styles.Text_14_14}>+</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66a42f7e-de4d-47af-93bd-f8cae38e83c8"
        }}
        style={styles.ImageBackground_14_25}
      />
      <View style={styles.View_14_27}>
        <Text style={styles.Text_14_27}>start</Text>
      </View>
      <View style={styles.View_14_28} />
      <View style={styles.View_14_29}>
        <Text style={styles.Text_14_29}>top apps</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  ImageBackground_14_12: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%")
  },
  ImageBackground_14_13: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("85%")
  },
  View_14_14: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_14_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_25: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_14_27: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_14_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_28: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    backgroundColor: "rgba(192, 192, 192, 1)"
  },
  View_14_29: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_14_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
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
