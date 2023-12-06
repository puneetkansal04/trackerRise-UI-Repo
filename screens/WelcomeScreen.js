import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const WelcomeScreen = () => {
  return (
    <View style={styles.welcomeScreen}>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.iHaveAn, styles.iHaveAnClr]}>
          I have an account
        </Text>
      </View>
      <View style={[styles.button1, styles.buttonFlexBox]}>
        <Text style={[styles.iHaveAn, styles.iHaveAnClr]}>Get started</Text>
      </View>
      <Image
        style={[styles.imageIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image6.png")}
      />
      <Image
        style={[styles.imageIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image6.png")}
      />
      <Image
        style={[styles.frameIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/frame7.png")}
      />
      <Text style={[styles.congueMalesuadaIn, styles.iHaveAnClr]}>
        Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna
        risus.
      </Text>
      <Image
        style={styles.frameIcon1}
        resizeMode="cover"
        source={require("../assets/frame8.png")}
      />
      <Image
        style={styles.imageIcon2}
        resizeMode="cover"
        source={require("../assets/image7.png")}
      />
      <Image
        style={styles.assetslogoIcon}
        resizeMode="cover"
        source={require("../assets/assetslogo2.png")}
      />
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
  iHaveAnClr: {
    color: Color.greyscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  iHaveAn: {
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    textAlign: "left",
  },
  button: {
    marginLeft: -162.5,
    top: 734,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: Padding.p_xs,
    left: "50%",
  },
  button1: {
    top: 670,
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
  imageIcon: {
    top: 120,
    width: 288,
    height: 219,
  },
  frameIcon: {
    top: 150,
    width: 375,
    height: 572,
    opacity: 0.25,
  },
  congueMalesuadaIn: {
    marginLeft: -144.5,
    top: 590,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyLarge,
    textAlign: "center",
    width: 290,
    left: "50%",
    position: "absolute",
  },
  frameIcon1: {
    top: 124,
    left: 9,
    width: 366,
    height: 476,
    position: "absolute",
  },
  imageIcon2: {
    top: 396,
    left: 262,
    width: 113,
    height: 355,
    position: "absolute",
  },
  assetslogoIcon: {
    height: "3.57%",
    width: "47.47%",
    top: "7.39%",
    right: "26.4%",
    bottom: "89.04%",
    left: "26.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  welcomeScreen: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WelcomeScreen;
