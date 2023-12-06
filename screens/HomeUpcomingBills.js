import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const HomeUpcomingBills = () => {
  return (
    <View style={styles.homeUpcomingBills}>
      <View style={styles.items}>
        <View style={styles.spotifyLayout}>
          <Text style={[styles.text, styles.textTypo]}>$5.99</Text>
          <Text style={[styles.spotify1, styles.spotify1FlexBox]}>Spotify</Text>
          <View style={[styles.date, styles.dateLayout]}>
            <View style={[styles.rectangle, styles.lightBgBg]} />
            <View style={styles.frame}>
              <View style={styles.frame1}>
                <Text style={styles.jun}>Jun</Text>
                <Text style={styles.text1}>25</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.youtubePremium, styles.spotifyLayout]}>
          <Text style={[styles.text2, styles.textTypo]}>$18.99</Text>
          <Text style={[styles.youtubePremium1, styles.spotify1FlexBox]}>
            YouTube Premium
          </Text>
          <View style={[styles.date, styles.dateLayout]}>
            <View style={[styles.rectangle, styles.lightBgBg]} />
            <View style={styles.frame}>
              <View style={styles.frame1}>
                <Text style={styles.jun}>Jun</Text>
                <Text style={styles.text1}>25</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.youtubePremium, styles.spotifyLayout]}>
          <Text style={[styles.text4, styles.textTypo]}>$29.99</Text>
          <Text style={[styles.microsoftOnedrive1, styles.spotify1FlexBox]}>
            Microsoft OneDrive
          </Text>
          <View style={[styles.date, styles.dateLayout]}>
            <View style={[styles.rectangle, styles.lightBgBg]} />
            <View style={styles.frame}>
              <View style={styles.frame1}>
                <Text style={styles.jun}>Jun</Text>
                <Text style={styles.text1}>25</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.youtubePremium, styles.spotifyLayout]}>
          <Text style={[styles.text6, styles.textTypo]}>$37.99</Text>
          <Text style={styles.netflix1}>Netflix</Text>
          <View style={[styles.date, styles.dateLayout]}>
            <View style={[styles.rectangle, styles.lightBgBg]} />
            <View style={styles.frame}>
              <View style={styles.frame1}>
                <Text style={styles.jun}>Jun</Text>
                <Text style={styles.text1}>25</Text>
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
        <View style={[styles.yourSubscriptions, styles.rectangle4Layout1]}>
          <View style={[styles.rectangle4, styles.rectangle4Layout]} />
          <Text style={[styles.yourSubscriptions1, styles.yourTypo]}>
            Your subscriptions
          </Text>
        </View>
        <View style={styles.upcomingBills}>
          <View style={styles.rectangle5} />
          <Text style={[styles.upcomingBills1, styles.yourTypo]}>
            Upcoming bills
          </Text>
        </View>
      </View>
      <View style={[styles.lightBg, styles.lightBgPosition]} />
      <View style={[styles.mainCircle, styles.shadowLayout]}>
        <Image
          style={[styles.criclesBgIcon, styles.rectanglePosition]}
          resizeMode="cover"
          source={require("../assets/cricles-bg.png")}
        />
        <Text style={[styles.text8, styles.text8Position]}>$1,235</Text>
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
          style={[styles.ellipseIcon2, styles.rectangle4Layout]}
          resizeMode="cover"
          source={require("../assets/ellipse2.png")}
        />
        <View style={[styles.buttonsmall, styles.spotify1FlexBox]}>
          <Text style={[styles.seeYourBudget, styles.yourTypo]}>
            See your budget
          </Text>
        </View>
        <Image
          style={styles.assetslogoIcon}
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
        <Text style={[styles.text9, styles.textPosition]}>12</Text>
        <View style={[styles.line, styles.linePosition]} />
      </View>
      <View style={[styles.highestSubs, styles.subsLayout]}>
        <Text style={[styles.highestSubs1, styles.subsTypo]}>Highest subs</Text>
        <Text style={[styles.text10, styles.textPosition]}>$19.99</Text>
        <View style={[styles.line1, styles.linePosition]} />
      </View>
      <View style={[styles.lowestSubs, styles.subsLayout]}>
        <Text style={[styles.lowestSubs1, styles.subsTypo]}>Lowest subs</Text>
        <Text style={[styles.text11, styles.textPosition]}>$5.99</Text>
        <View style={[styles.line2, styles.linePosition]} />
      </View>
      <Image
        style={[styles.bottomBarIcon, styles.shadowLayout]}
        resizeMode="cover"
        source={require("../assets/bottom-bar1.png")}
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
  dateLayout: {
    height: 40,
    width: 40,
  },
  lightBgBg: {
    backgroundColor: Color.greyscaleGrey70,
    top: 0,
  },
  spotifyLayout: {
    height: 64,
    width: 327,
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
    borderRadius: Border.br_base,
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
  rectangle4Layout1: {
    width: 154,
    height: 36,
  },
  rectangle4Layout: {
    borderRadius: Border.br_980xl,
    position: "absolute",
  },
  yourTypo: {
    fontSize: FontSize.h1_size,
    textAlign: "center",
    lineHeight: 16,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
  },
  lightBgPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  rectanglePosition: {
    left: 0,
    position: "absolute",
  },
  text8Position: {
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
    fontSize: FontSize.h1_size,
    lineHeight: 16,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  linePosition: {
    height: 1,
    width: 47,
    borderTopWidth: 1,
    marginLeft: -23.5,
    top: 0,
    left: "50%",
    borderStyle: "solid",
    position: "absolute",
  },
  text: {
    marginLeft: 107.5,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
    textAlign: "right",
  },
  spotify1: {
    width: 50,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    left: 67,
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
  },
  rectangle: {
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    height: 40,
    width: 40,
  },
  jun: {
    top: 1,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.greyscaleGrey30,
    lineHeight: 16,
    marginLeft: -8.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  text1: {
    color: Color.greyscaleGrey30,
    marginLeft: -8.5,
    top: 12,
    textAlign: "left",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
    position: "absolute",
  },
  frame1: {
    top: -2,
    left: 1,
    width: 25,
    height: 36,
    position: "absolute",
  },
  frame: {
    top: 5,
    left: 7,
    width: 26,
    height: 32,
    position: "absolute",
  },
  date: {
    left: 13,
    top: 12,
    height: 40,
    width: 40,
    position: "absolute",
  },
  text2: {
    marginLeft: 100.5,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
    textAlign: "right",
  },
  youtubePremium1: {
    width: 123,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    left: 67,
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
  text4: {
    marginLeft: 98.5,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
    textAlign: "right",
  },
  microsoftOnedrive1: {
    width: 133,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    left: 67,
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    top: 22,
  },
  text6: {
    marginLeft: 93.5,
    top: 20,
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 24,
  },
  netflix1: {
    width: 46,
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
    height: 50,
    backgroundColor: Color.greyscaleGray100,
    width: 327,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  rectangle4: {
    width: 154,
    height: 36,
    backgroundColor: Color.greyscaleGray100,
    left: 0,
    top: 0,
  },
  yourSubscriptions1: {
    marginLeft: -55,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    marginTop: -8,
    fontSize: FontSize.h1_size,
    color: Color.greyscaleGrey30,
  },
  yourSubscriptions: {
    left: 318,
    top: 7,
    width: 154,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  rectangle5: {
    backgroundColor: Color.colorDimgray_200,
    width: 155,
    height: 36,
    left: 0,
    top: 0,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  upcomingBills1: {
    marginLeft: -43.5,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    marginTop: -8,
    fontSize: FontSize.h1_size,
    color: Color.greyscaleWhite,
  },
  upcomingBills: {
    left: 164,
    width: 155,
    top: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 36,
    position: "absolute",
  },
  tabs: {
    top: 450,
    left: 351,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 50,
    width: 327,
    position: "absolute",
  },
  lightBg: {
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    height: 429,
    width: 375,
    left: 0,
    backgroundColor: Color.greyscaleGrey70,
    top: 0,
  },
  criclesBgIcon: {
    top: 8,
    width: 419,
    height: 419,
  },
  text8: {
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
    fontSize: FontSize.h1_size,
    top: "50%",
    lineHeight: 16,
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
  text9: {
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
  text10: {
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
  text11: {
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
  homeUpcomingBills: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HomeUpcomingBills;
