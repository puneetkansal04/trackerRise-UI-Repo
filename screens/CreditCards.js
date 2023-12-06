import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CreditCards = () => {
  return (
    <View style={styles.creditCards}>
      <View style={[styles.lightBg, styles.lightBgPosition]} />
      <View style={styles.addNewCard}>
        <View style={[styles.autoLayoutHorizontal, styles.platformFlexBox]}>
          <Text style={[styles.addNewCard1, styles.addNewCard1Clr]}>
            Add new card
          </Text>
          <Image
            style={styles.iconsadd}
            resizeMode="cover"
            source={require("../assets/iconsadd.png")}
          />
        </View>
      </View>
      <View style={[styles.platform, styles.platformFlexBox]}>
        <View style={styles.frameLayout}>
          <View style={[styles.rectangle, styles.rectangleLayout1]} />
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame2.png")}
          />
        </View>
        <Image
          style={[styles.frameIcon1, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame3.png")}
        />
        <Image
          style={[styles.frameIcon1, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
        <View style={[styles.frameIcon1, styles.frameLayout]}>
          <View style={[styles.rectangle1, styles.rectangleLayout1]} />
          <View style={styles.frame2}>
            <View style={styles.group}>
              <Image
                style={[styles.imageIcon, styles.imageIconLayout]}
                resizeMode="cover"
                source={require("../assets/image2.png")}
              />
              <Image
                style={[styles.imageIcon1, styles.imageIconLayout]}
                resizeMode="cover"
                source={require("../assets/image3.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.imageIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.subscriptions, styles.textTypo]}>Subscriptions</Text>
      <View style={styles.creditCards1}>
        <LinearGradient
          style={[styles.rectangle2, styles.rectangleLayout]}
          locations={[0, 1]}
          colors={["rgba(28, 28, 35, 0)", "rgba(28, 28, 35, 0.75)"]}
          useAngle={true}
          angle={180}
        />
        <LinearGradient
          style={[styles.rectangle3, styles.rectangleLayout]}
          locations={[0, 1]}
          colors={["rgba(28, 28, 35, 0)", "rgba(28, 28, 35, 0.75)"]}
          useAngle={true}
          angle={180}
        />
        <View style={styles.main}>
          <Image
            style={[styles.ellipseIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse7.png")}
          />
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse8.png")}
          />
          <Image
            style={[styles.chipIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/chip.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>08/28</Text>
          <View style={[styles.cardNumber, styles.platformFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>****</Text>
            <Text style={[styles.text2, styles.textTypo]}>****</Text>
            <Text style={[styles.text2, styles.textTypo]}>****</Text>
            <Text style={[styles.text2, styles.textTypo]}>2197</Text>
          </View>
          <Text style={[styles.johnDoe, styles.johnDoePosition]}>John Doe</Text>
          <Text style={[styles.virtualCard, styles.textTypo]}>
            Virtual Card
          </Text>
          <Image
            style={[styles.mastercardLogoIcon, styles.creditCards2Position]}
            resizeMode="cover"
            source={require("../assets/mastercard-logo.png")}
          />
        </View>
      </View>
      <Text style={[styles.creditCards2, styles.creditCards2Position]}>
        Credit Cards
      </Text>
      <Image
        style={[styles.iconssettings, styles.creditCards2Position]}
        resizeMode="cover"
        source={require("../assets/iconssettings1.png")}
      />
      <Image
        style={[styles.bottomBarIcon, styles.lightBgPosition]}
        resizeMode="cover"
        source={require("../assets/bottom-bar4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightBgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  platformFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  addNewCard1Clr: {
    color: Color.greyscaleGrey30,
    textAlign: "center",
  },
  rectangleLayout1: {
    borderRadius: Border.br_xs,
    top: 0,
    height: 40,
    width: 40,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 40,
    width: 40,
  },
  imageIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.greyscaleWhite,
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
  },
  rectangleLayout: {
    transform: [
      {
        rotate: "8deg",
      },
    ],
    backgroundColor: "transparent",
    height: 349,
    width: 232,
    top: 0,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  iconPosition: {
    marginLeft: -20,
    left: "50%",
    position: "absolute",
  },
  johnDoePosition: {
    marginLeft: -28,
    left: "50%",
  },
  creditCards2Position: {
    top: 32,
    position: "absolute",
  },
  lightBg: {
    top: 812,
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    backgroundColor: Color.greyscaleGrey70,
    height: 185,
    opacity: 0.5,
  },
  addNewCard1: {
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  iconsadd: {
    width: 16,
    height: 16,
    marginLeft: 10,
    overflow: "hidden",
  },
  autoLayoutHorizontal: {
    marginTop: -10,
    marginLeft: -60,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    top: "50%",
  },
  addNewCard: {
    top: 651,
    left: 24,
    borderStyle: "dashed",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    width: 328,
    height: 52,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorLimegreen,
  },
  frameIcon: {
    top: 9,
    left: 9,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon1: {
    marginLeft: 8,
  },
  rectangle1: {
    backgroundColor: Color.colorBlack,
  },
  imageIcon: {
    right: "63.39%",
    width: "36.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
  },
  imageIcon1: {
    right: "0%",
    left: "63.39%",
    width: "36.61%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon: {
    width: "98.21%",
    right: "1.79%",
    left: "0%",
  },
  group: {
    width: "101.82%",
    right: "-1.82%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  frame2: {
    top: 10,
    left: 14,
    width: 11,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  platform: {
    top: 539,
    left: 96,
    overflow: "hidden",
  },
  subscriptions: {
    top: 499,
    left: 133,
    lineHeight: 24,
    fontSize: FontSize.bodyLarge_size,
    position: "absolute",
  },
  rectangle2: {
    left: 51,
  },
  rectangle3: {
    left: 28,
  },
  ellipseIcon: {
    marginTop: -174.5,
    width: 260,
    height: 260,
    top: "50%",
    opacity: 0.5,
  },
  ellipseIcon1: {
    marginTop: -49.5,
    marginLeft: -116,
    width: 379,
    height: 379,
    left: "50%",
    top: "50%",
    opacity: 0.5,
    position: "absolute",
  },
  chipIcon: {
    bottom: 32,
    height: 28,
    width: 40,
    marginLeft: -20,
  },
  text: {
    marginLeft: -21,
    bottom: 76,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
    position: "absolute",
  },
  text1: {
    lineHeight: 24,
    fontSize: FontSize.bodyLarge_size,
  },
  text2: {
    lineHeight: 24,
    fontSize: FontSize.bodyLarge_size,
    marginLeft: 8,
  },
  cardNumber: {
    marginLeft: -83,
    bottom: 104,
    left: "50%",
  },
  johnDoe: {
    bottom: 136,
    fontSize: FontSize.h1_size,
    lineHeight: 16,
    color: Color.greyscaleGrey20,
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    position: "absolute",
  },
  virtualCard: {
    marginLeft: -46,
    top: 82,
    lineHeight: 24,
    fontSize: FontSize.bodyLarge_size,
    left: "50%",
    position: "absolute",
  },
  mastercardLogoIcon: {
    width: 56,
    height: 34,
    marginLeft: -28,
    left: "50%",
    overflow: "hidden",
  },
  main: {
    backgroundColor: "#252530",
    height: 349,
    width: 232,
    top: 0,
    borderRadius: Border.br_base,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  creditCards1: {
    top: 99,
    left: 61,
    width: 281,
    height: 378,
    position: "absolute",
  },
  creditCards2: {
    left: 138,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyLarge,
    lineHeight: 24,
    fontSize: FontSize.bodyLarge_size,
    textAlign: "center",
    color: Color.greyscaleGrey30,
  },
  iconssettings: {
    left: 328,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  bottomBarIcon: {
    top: 713,
    height: 99,
  },
  creditCards: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CreditCards;
