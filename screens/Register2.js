import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Register2 = () => {
  return (
    <View style={styles.register2}>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.signIn}>Sign In</Text>
      </View>
      <Text style={styles.doYouHave}>Do you have already an account?</Text>
      <Text
        style={styles.use8Or}
      >{`Use 8 or more characters with a mix of letters, numbers & symbols.`}</Text>
      <View style={styles.difficulty}>
        <View style={[styles.rectangle, styles.rectangleLayout1]} />
        <View style={[styles.rectangle1, styles.rectangleLayout]} />
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <View style={[styles.rectangle3, styles.rectangleLayout1]} />
      </View>
      <View style={[styles.inputpassword, styles.inputpasswordPosition]}>
        <Text style={styles.eMailAddress}>E-mail address</Text>
        <View style={styles.input} />
      </View>
      <View style={[styles.inputpassword1, styles.inputpasswordPosition]}>
        <Text style={styles.eMailAddress}>Password</Text>
        <View style={styles.input} />
      </View>
      <Image
        style={styles.assetslogoIcon}
        resizeMode="cover"
        source={require("../assets/assetslogo3.png")}
      />
      <View style={[styles.button1, styles.buttonFlexBox]}>
        <Text style={styles.signIn}>Get started, it’s free!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    width: 324,
    borderRadius: Border.br_980xl,
    position: "absolute",
  },
  rectangleLayout1: {
    width: 79,
    backgroundColor: Color.greyscaleGrey70,
    top: 0,
    height: 5,
    position: "absolute",
  },
  rectangleLayout: {
    width: 80,
    backgroundColor: Color.greyscaleGrey70,
    top: 0,
    height: 5,
    position: "absolute",
  },
  inputpasswordPosition: {
    left: 24,
    width: 326,
    position: "absolute",
  },
  signIn: {
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    textAlign: "left",
    color: Color.greyscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  button: {
    marginLeft: -162.5,
    top: 734,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: Padding.p_xs,
    left: "50%",
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    width: 324,
    borderRadius: Border.br_980xl,
  },
  doYouHave: {
    marginLeft: -112.5,
    top: 694,
    fontFamily: FontFamily.bodyLarge,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.greyscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
    position: "absolute",
  },
  use8Or: {
    marginLeft: -163.5,
    top: 444,
    width: 326,
    color: Color.greyscaleGrey50,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    letterSpacing: 0,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  rectangle: {
    left: 247,
    borderTopRightRadius: Border.br_4xs,
    borderBottomRightRadius: Border.br_4xs,
  },
  rectangle1: {
    left: 164,
  },
  rectangle2: {
    left: 82,
  },
  rectangle3: {
    left: 0,
    borderTopLeftRadius: Border.br_4xs,
    borderBottomLeftRadius: Border.br_4xs,
  },
  difficulty: {
    top: 423,
    height: 5,
    left: 24,
    width: 326,
    position: "absolute",
  },
  eMailAddress: {
    alignSelf: "stretch",
    color: Color.greyscaleGrey50,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    letterSpacing: 0,
    textAlign: "left",
  },
  input: {
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.greyscaleGrey70,
    borderWidth: 1,
    height: 48,
    marginTop: 4,
    alignSelf: "stretch",
  },
  inputpassword: {
    top: 247,
  },
  inputpassword1: {
    top: 331,
  },
  assetslogoIcon: {
    height: "2.96%",
    width: "38.93%",
    top: "7.14%",
    right: "30.67%",
    bottom: "89.9%",
    left: "30.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  button1: {
    top: 516,
    left: 25,
    backgroundColor: Color.colorSalmon,
    shadowColor: "rgba(255, 121, 102, 0.5)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_5xl,
  },
  register2: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Register2;
