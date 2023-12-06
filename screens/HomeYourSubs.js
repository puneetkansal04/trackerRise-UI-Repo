import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const HomeYourSubs = () => {
  return (
    <View style={styles.homeYourSubs}>
      <View style={styles.items}>
        <View style={styles.spotifyLayout}>
          <Text style={[styles.text, styles.textTypo]}>$5.99</Text>
          <Text style={[styles.spotify1, styles.spotify1FlexBox]}>Spotify</Text>
          <View style={styles.spotifyLogo}>
            <View style={[styles.rectangle, styles.rectangleLayout]} />
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </View>
        </View>
        <View style={[styles.youtubePremium, styles.spotifyLayout]}>
          <Text style={[styles.text1, styles.textTypo]}>$18.99</Text>
          <Text style={[styles.youtubePremium1, styles.spotify1FlexBox]}>
            YouTube Premium
          </Text>
          <Image
            style={styles.spotifyLogo}
            resizeMode="cover"
            source={require("../assets/yt-premium-lgoo.png")}
          />
        </View>
        <View style={[styles.youtubePremium, styles.spotifyLayout]}>
          <Text style={[styles.text2, styles.textTypo]}>$29.99</Text>
          <Text style={[styles.microsoftOnedrive1, styles.spotify1FlexBox]}>
            Microsoft OneDrive
          </Text>
          <Image
            style={styles.spotifyLogo}
            resizeMode="cover"
            source={require("../assets/onedrive-logo.png")}
          />
        </View>
        <View style={[styles.youtubePremium, styles.spotifyLayout]}>
          <Text style={[styles.text3, styles.textTypo]}>$37.99</Text>
          <Text style={styles.netflix1}>Netflix</Text>
          <View style={styles.spotifyLogo}>
            <View style={[styles.rectangle1, styles.rectangleLayout]} />
            <View style={[styles.frame, styles.frameLayout]}>
              <View style={[styles.group, styles.groupPosition]}>
                <Image
                  style={[styles.imageIcon, styles.imageIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image.png")}
                />
                <Image
                  style={[styles.imageIcon1, styles.imageIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image1.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.imageIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <LinearGradient
        style={[styles.shadow, styles.shadowLayout]}
        locations={[0, 0.59]}
        colors={["rgba(28, 28, 35, 0)", "#1c1c23"]}
        useAngle={true}
        angle={180}
      />
      <View style={styles.tabs}>
        <View style={[styles.tabsBg, styles.tabsBgPosition]} />
        <View style={[styles.upcomingBills, styles.rectangle2Layout1]}>
          <View style={[styles.rectangle2, styles.rectangle2Layout]} />
          <Text style={[styles.upcomingBills1, styles.yourTypo]}>
            Upcoming bills
          </Text>
        </View>
        <View style={styles.yourSubscriptions}>
          <View style={styles.rectangle3} />
          <Text style={[styles.yourSubscriptions1, styles.yourTypo]}>
            Your subscriptions
          </Text>
        </View>
      </View>
      <View style={[styles.lightBg, styles.lightBgPosition]} />
      <View style={[styles.mainCircle, styles.shadowLayout]}>
        <Image
          style={[styles.criclesBgIcon, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/cricles-bg.png")}
        />
        <Text style={[styles.text4, styles.text4Position]}>$1,235</Text>
        <Text style={styles.thisMonthBills}>This month bills</Text>
        <Image
          style={[styles.ellipseIcon, styles.lightBgPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse.png")}
        />
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse1.png")}
        />
        <Image
          style={[styles.ellipseIcon2, styles.rectangle2Layout]}
          resizeMode="cover"
          source={require("../assets/ellipse2.png")}
        />
        <View style={[styles.buttonsmall, styles.spotify1FlexBox]}>
          <Text style={[styles.seeYourBudget, styles.yourTypo]}>
            See your budget
          </Text>
        </View>
        <Image
          style={[styles.assetslogoIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/assetslogo.png")}
        />
      </View>
      <Image
        style={[styles.iconssettings, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/iconssettings.png")}
      />
      <View style={[styles.activeSubs, styles.subsLayout]}>
        <Text style={[styles.activeSubs1, styles.subsTypo]}>Active subs</Text>
        <Text style={[styles.text5, styles.textPosition]}>12</Text>
        <View style={[styles.line, styles.linePosition]} />
      </View>
      <View style={[styles.highestSubs, styles.subsLayout]}>
        <Text style={[styles.highestSubs1, styles.subsTypo]}>Highest subs</Text>
        <Text style={[styles.text6, styles.textPosition]}>$19.99</Text>
        <View style={[styles.line1, styles.linePosition]} />
      </View>
      <View style={[styles.lowestSubs, styles.subsLayout]}>
        <Text style={[styles.lowestSubs1, styles.subsTypo]}>Lowest subs</Text>
        <Text style={[styles.text7, styles.textPosition]}>$5.99</Text>
        <View style={[styles.line2, styles.linePosition]} />
      </View>
      <Image
        style={[styles.bottomBarIcon, styles.shadowLayout]}
        resizeMode="cover"
        source={require("../assets/bottom-bar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "right",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  spotify1FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 40,
    width: 40,
    position: "absolute",
  },
  spotifyLayout: {
    height: 64,
    width: 328,
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
    borderRadius: Border.br_base,
  },
  frameLayout: {
    height: 24,
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  imageIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shadowLayout: {
    width: 375,
    left: 0,
  },
  tabsBgPosition: {
    backgroundColor: Color.greyscaleGray100,
    left: 0,
    top: 0,
  },
  rectangle2Layout1: {
    height: 36,
    width: 154,
  },
  rectangle2Layout: {
    borderRadius: Border.br_980xl,
    position: "absolute",
  },
  yourTypo: {
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
  },
  lightBgPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  framePosition: {
    top: 8,
    position: "absolute",
  },
  text4Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 32,
    position: "absolute",
  },
  subsLayout: {
    height: 68,
    width: 104,
    top: 337,
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  subsTypo: {
    top: 16,
    color: Color.greyscaleGrey40,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  linePosition: {
    height: 1,
    borderTopWidth: 1,
    marginLeft: -23.5,
    width: 47,
    top: 0,
    left: "50%",
    borderStyle: "solid",
    position: "absolute",
  },
  text: {
    marginLeft: 107,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
    textAlign: "right",
  },
  spotify1: {
    width: 51,
    display: "flex",
    textAlign: "left",
    left: 67,
    alignItems: "center",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
  },
  rectangle: {
    backgroundColor: Color.colorLimegreen,
  },
  frameIcon: {
    top: 9,
    left: 8,
    width: 23,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  spotifyLogo: {
    top: 12,
    left: 12,
    height: 40,
    width: 40,
    position: "absolute",
  },
  text1: {
    marginLeft: 100,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
    textAlign: "right",
  },
  youtubePremium1: {
    width: 124,
    display: "flex",
    textAlign: "left",
    left: 67,
    alignItems: "center",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
  },
  youtubePremium: {
    marginTop: 8,
  },
  text2: {
    marginLeft: 98,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
    textAlign: "right",
  },
  microsoftOnedrive1: {
    width: 134,
    display: "flex",
    textAlign: "left",
    left: 67,
    alignItems: "center",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
  },
  text3: {
    marginLeft: 93,
    top: 20,
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 24,
  },
  netflix1: {
    width: 47,
    textAlign: "left",
    left: 67,
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: Color.colorBlack,
  },
  imageIcon: {
    right: "61.54%",
    width: "38.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  imageIcon1: {
    left: "61.54%",
    width: "38.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  group: {
    left: "0%",
    position: "absolute",
  },
  frame: {
    left: 14,
    width: 13,
    top: 8,
    position: "absolute",
  },
  items: {
    top: 516,
    left: 24,
    position: "absolute",
  },
  shadow: {
    top: 660,
    height: 152,
    backgroundColor: "transparent",
    position: "absolute",
  },
  tabsBg: {
    width: 327,
    height: 50,
    backgroundColor: Color.greyscaleGray100,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  rectangle2: {
    height: 36,
    width: 154,
    backgroundColor: Color.greyscaleGray100,
    left: 0,
    top: 0,
  },
  upcomingBills1: {
    marginLeft: -44,
    color: Color.greyscaleGrey30,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    marginTop: -8,
    fontSize: FontSize.h1_size,
  },
  upcomingBills: {
    left: 163,
    top: 7,
    width: 154,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  rectangle3: {
    backgroundColor: Color.colorDimgray_200,
    width: 155,
    height: 36,
    left: 0,
    top: 0,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  yourSubscriptions1: {
    marginLeft: -54.5,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    marginTop: -8,
    fontSize: FontSize.h1_size,
    color: Color.greyscaleWhite,
  },
  yourSubscriptions: {
    left: 318,
    width: 155,
    height: 36,
    top: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  tabs: {
    top: 450,
    left: 352,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 50,
    width: 328,
    position: "absolute",
  },
  lightBg: {
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    backgroundColor: Color.greyscaleGrey70,
    height: 429,
    width: 375,
    left: 0,
    top: 0,
    opacity: 0.5,
  },
  criclesBgIcon: {
    width: 419,
    height: 419,
    left: 0,
    top: 8,
  },
  text4: {
    marginTop: 21.5,
    marginLeft: -67.5,
    fontSize: FontSize.h7_size,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.h7,
    textAlign: "center",
    color: Color.greyscaleWhite,
  },
  thisMonthBills: {
    marginTop: 77.5,
    marginLeft: -46.5,
    color: Color.greyscaleGrey40,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    top: "50%",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  ellipseIcon: {
    top: 88,
    left: 73,
    width: 229,
    height: 196,
  },
  ellipseIcon1: {
    top: 59,
    left: 44,
    width: 286,
    height: 242,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  ellipseIcon2: {
    top: 34,
    left: 19,
    width: 336,
    height: 292,
  },
  seeYourBudget: {
    textAlign: "center",
    color: Color.greyscaleWhite,
  },
  buttonsmall: {
    marginLeft: -60.5,
    top: 277,
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    left: "50%",
    borderRadius: Border.br_base,
  },
  assetslogoIcon: {
    height: "6.15%",
    width: "28.53%",
    top: "43.04%",
    right: "36%",
    bottom: "50.81%",
    left: "35.47%",
  },
  mainCircle: {
    top: -8,
    height: 309,
    position: "absolute",
  },
  iconssettings: {
    left: 328,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  activeSubs1: {
    marginLeft: -34,
  },
  text5: {
    marginLeft: -9,
    textAlign: "center",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    top: 32,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
  },
  line: {
    borderColor: Color.accentAccentP50,
  },
  activeSubs: {
    left: 23,
  },
  highestSubs1: {
    marginLeft: -39,
  },
  text6: {
    marginLeft: -24,
    textAlign: "center",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    top: 32,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
  },
  line1: {
    borderColor: Color.primaryPrimary100,
  },
  highestSubs: {
    left: 135,
  },
  lowestSubs1: {
    marginLeft: -37,
  },
  text7: {
    marginLeft: -21,
    textAlign: "center",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    top: 32,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
  },
  line2: {
    borderColor: Color.colorTurquoise,
  },
  lowestSubs: {
    left: 247,
  },
  bottomBarIcon: {
    top: 713,
    height: 99,
    position: "absolute",
  },
  homeYourSubs: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeYourSubs;
