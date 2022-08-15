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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d44238e1-abc8-4ee9-a21d-e93ea079daa3"
        }}
        style={styles.ImageBackground_11_2}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b7d883c-5b28-45e2-b8d7-b89e7cd9688b"
        }}
        style={styles.TouchableOpacity_11_3}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_11"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_11_4}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_11"))
        }
      >
        <Text style={styles.Text_11_4}>+</Text>
      </TouchableOpacity>
      <View style={styles.View_14_2} />
      <View style={styles.View_14_3}>
        <Text style={styles.Text_14_3}>welcome!</Text>
      </View>
      <View style={styles.View_14_4}>
        <Text style={styles.Text_14_4}>we hope you enjoy hello app</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_14_5}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_11"))
        }
      >
        <Text style={styles.Text_14_5}>x</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  ImageBackground_11_2: {
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
  TouchableOpacity_11_3: {
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
  TouchableOpacity_11_4: {
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
  Text_11_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_2: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%")
  },
  View_14_3: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_14_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_4: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_14_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_14_5: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_14_5: {
    color: "rgba(255, 255, 255, 1)",
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
