import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const NewSubscription = () => {
  return (
    <View style={styles.newSubscription}>
      <View style={[styles.plus, styles.plusLayout]}>
        <View style={styles.plusBg} />
        <Image
          style={[styles.iconsplus, styles.rectanglePosition]}
          resizeMode="cover"
          source={require("../assets/iconsplus.png")}
        />
      </View>
      <View style={[styles.minus, styles.plusLayout]}>
        <View style={styles.plusBg} />
        <Image
          style={[styles.iconsplus, styles.rectanglePosition]}
          resizeMode="cover"
          source={require("../assets/iconsminus.png")}
        />
      </View>
      <View style={styles.price}>
        <View style={[styles.line, styles.lineBorder]} />
        <Text style={[styles.text, styles.textFlexBox]}>$5.99</Text>
        <Text style={styles.mothlyPrice}>Mothly price</Text>
      </View>
      <View style={styles.inputdescription}>
        <View style={styles.autoLayoutVertical}>
          <Text style={[styles.description, styles.newFlexBox]}>
            Description
          </Text>
          <View style={[styles.input, styles.lineBorder]} />
        </View>
      </View>
      <View style={[styles.lightBg, styles.rectanglePosition]} />
      <Text style={[styles.hgboGo, styles.hgboGoTypo]}>HGBO GO</Text>
      <View style={[styles.spotifyLogo, styles.logoLayout]}>
        <View style={[styles.rectangle, styles.logoLayout]} />
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame6.png")}
        />
      </View>
      <Image
        style={[styles.onedriveLogoIcon, styles.logoLayout]}
        resizeMode="cover"
        source={require("../assets/onedrive-logo1.png")}
      />
      <View style={[styles.hboGoLogo, styles.hboGoLogoLayout]}>
        <View style={[styles.rectangle1, styles.hboGoLogoLayout]} />
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image5.png")}
        />
      </View>
      <Text style={[styles.addNewSubscription, styles.textFlexBox]}>{`Add new
subscription`}</Text>
      <Text style={[styles.new, styles.newPosition]}> New</Text>
      <Image
        style={[styles.iconsback, styles.newPosition]}
        resizeMode="cover"
        source={require("../assets/iconsback.png")}
      />
      <View style={styles.button}>
        <Text style={[styles.getStarted, styles.hgboGoTypo]}>
          Add this platform
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plusLayout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  rectanglePosition: {
    top: 0,
    left: 0,
  },
  lineBorder: {
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  newFlexBox: {
    letterSpacing: 0,
    textAlign: "center",
  },
  hgboGoTypo: {
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    color: Color.greyscaleWhite,
  },
  logoLayout: {
    height: 95,
    width: 95,
    position: "absolute",
  },
  hboGoLogoLayout: {
    height: 161,
    width: 161,
    position: "absolute",
  },
  newPosition: {
    top: 32,
    position: "absolute",
  },
  plusBg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
    position: "absolute",
    width: "100%",
  },
  iconsplus: {
    left: 0,
    borderRadius: Border.br_base,
    height: 48,
    width: 48,
    position: "absolute",
    overflow: "hidden",
  },
  plus: {
    left: 304,
    top: 619,
    width: 48,
  },
  minus: {
    left: 24,
    top: 619,
    width: 48,
  },
  line: {
    top: 84,
    left: -1,
    borderTopWidth: 1,
    width: 163,
    height: 1,
    position: "absolute",
  },
  text: {
    top: 40,
    fontSize: FontSize.h5_size,
    lineHeight: 36,
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    left: "50%",
    textAlign: "center",
    marginLeft: -35.5,
  },
  mothlyPrice: {
    top: 20,
    color: Color.greyscaleGrey40,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    textAlign: "center",
    left: "50%",
    marginLeft: -35.5,
    position: "absolute",
  },
  price: {
    top: 593,
    height: 100,
    width: 161,
    left: 107,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  description: {
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.greyscaleGrey50,
    alignSelf: "stretch",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    letterSpacing: 0,
  },
  input: {
    borderWidth: 1,
    marginTop: 4,
    alignSelf: "stretch",
    borderRadius: Border.br_base,
  },
  autoLayoutVertical: {
    width: 327,
  },
  inputdescription: {
    top: 500,
    width: 327,
    left: 24,
    position: "absolute",
  },
  lightBg: {
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    backgroundColor: Color.greyscaleGrey70,
    width: 375,
    height: 476,
    opacity: 0.5,
    left: 0,
    position: "absolute",
  },
  hgboGo: {
    top: 416,
    left: 154,
    textAlign: "center",
    position: "absolute",
  },
  rectangle: {
    borderRadius: 29,
    backgroundColor: Color.colorLimegreen,
    left: 0,
    top: 0,
  },
  frameIcon: {
    top: 21,
    left: 19,
    width: 55,
    height: 55,
    position: "absolute",
    overflow: "hidden",
  },
  spotifyLogo: {
    left: 352,
    top: 265,
    width: 95,
  },
  onedriveLogoIcon: {
    top: 265,
    width: 95,
    left: 0,
  },
  rectangle1: {
    borderRadius: 48,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  imageIcon: {
    top: 35,
    left: 31,
    width: 100,
    height: 92,
    position: "absolute",
  },
  hboGoLogo: {
    top: 232,
    left: 107,
    height: 161,
  },
  addNewSubscription: {
    marginTop: -310,
    marginLeft: -124.5,
    top: "50%",
    fontSize: FontSize.h7_size,
    lineHeight: 40,
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    left: "50%",
    textAlign: "center",
  },
  new: {
    left: 167,
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLarge,
    color: Color.greyscaleGrey30,
    letterSpacing: 0,
    textAlign: "center",
  },
  iconsback: {
    width: 24,
    height: 24,
    left: 24,
    overflow: "hidden",
  },
  getStarted: {
    textAlign: "left",
  },
  button: {
    top: 732,
    left: 26,
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorSalmon,
    shadowColor: "rgba(255, 121, 102, 0.5)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    width: 324,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    position: "absolute",
  },
  newSubscription: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default NewSubscription;
