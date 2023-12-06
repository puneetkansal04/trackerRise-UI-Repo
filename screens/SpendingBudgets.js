import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SpendingBudgets = () => {
  return (
    <View style={styles.spendingBudgets}>
      <View style={styles.categories}>
        <View style={styles.autoTransport}>
          <Text
            style={[styles.autoTransport1, styles.text3FlexBox]}
          >{`Auto & Transport`}</Text>
          <Text style={[styles.text, styles.textTypo]}>$25.99</Text>
          <Text style={[styles.leftToSpend, styles.of400Typo]}>
            $375 left to spend
          </Text>
          <Text style={[styles.of400, styles.of400Typo]}>of $400</Text>
          <Image
            style={styles.iconsautoTransport}
            resizeMode="cover"
            source={require("../assets/iconsauto--transport.png")}
          />
          <View style={styles.progressBar}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
          </View>
        </View>
        <View style={[styles.entertainment, styles.entertainmentLayout]}>
          <Text style={[styles.autoTransport1, styles.text3FlexBox]}>
            Entertainment
          </Text>
          <Text style={[styles.text, styles.textTypo]}>$50.99</Text>
          <Text style={[styles.leftToSpend, styles.of400Typo]}>
            $375 left to spend
          </Text>
          <Text style={[styles.of600, styles.of400Typo]}>of $600</Text>
          <Image
            style={styles.iconsautoTransport}
            resizeMode="cover"
            source={require("../assets/iconsentertainment.png")}
          />
          <View style={styles.progressBar}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <View style={[styles.rectangle3, styles.rectanglePosition]} />
          </View>
        </View>
        <View style={[styles.entertainment, styles.entertainmentLayout]}>
          <Text style={[styles.autoTransport1, styles.text3FlexBox]}>
            Security
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>$5.99</Text>
          <Text style={[styles.leftToSpend, styles.of400Typo]}>
            $375 left to spend
          </Text>
          <Text style={[styles.of600, styles.of400Typo]}>of $600</Text>
          <Image
            style={styles.iconsautoTransport}
            resizeMode="cover"
            source={require("../assets/iconssecurity.png")}
          />
          <View style={styles.progressBar}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <View style={[styles.rectangle5, styles.rectanglePosition]} />
          </View>
        </View>
        <View style={[styles.addNewCategory, styles.infoBorder]}>
          <View style={[styles.autoLayoutHorizontal, styles.autoPosition]}>
            <Text style={[styles.addNewCategory1, styles.of2000BudgetFlexBox]}>
              Add new category
            </Text>
            <Image
              style={styles.iconsadd}
              resizeMode="cover"
              source={require("../assets/iconsadd.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.info, styles.infoBorder]}>
        <View style={[styles.autoLayoutHorizontal1, styles.autoPosition]}>
          <Text style={[styles.yourBudgetsAre, styles.text3FlexBox]}>
            Your budgets are on track
          </Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
        </View>
      </View>
      <View style={styles.chartHalfCricle}>
        <Text style={[styles.of2000Budget, styles.of2000BudgetFlexBox]}>
          of $2,000 budget
        </Text>
        <Text style={[styles.text3, styles.text3FlexBox]}>$82,97</Text>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse3.png")}
        />
        <Image
          style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse4.png")}
        />
        <Image
          style={[styles.ellipseIcon2, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse5.png")}
        />
        <Image
          style={[styles.ellipseIcon3, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse6.png")}
        />
      </View>
      <Text
        style={[styles.spendingBudgets1, styles.iconssettingsPosition]}
      >{`Spending & Budgets`}</Text>
      <Image
        style={[styles.iconssettings, styles.iconssettingsPosition]}
        resizeMode="cover"
        source={require("../assets/iconssettings1.png")}
      />
      <Image
        style={styles.bottomBarIcon}
        resizeMode="cover"
        source={require("../assets/bottom-bar2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text3FlexBox: {
    textAlign: "left",
    color: Color.greyscaleWhite,
  },
  textTypo: {
    textAlign: "right",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
    top: 16,
    position: "absolute",
  },
  of400Typo: {
    color: Color.greyscaleGrey30,
    top: 38,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.h1_size,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_4xs,
    top: 0,
    left: 0,
    height: 3,
    position: "absolute",
  },
  entertainmentLayout: {
    marginTop: 8,
    height: 84,
    width: 328,
  },
  infoBorder: {
    borderWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderRadius: Border.br_base,
  },
  autoPosition: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    marginTop: -10,
    left: "50%",
    position: "absolute",
  },
  of2000BudgetFlexBox: {
    textAlign: "center",
    color: Color.greyscaleGrey30,
  },
  ellipseIconLayout: {
    height: 210,
    borderRadius: Border.br_980xl,
    width: 210,
    position: "absolute",
  },
  iconssettingsPosition: {
    top: 32,
    position: "absolute",
  },
  autoTransport1: {
    marginLeft: -96,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
    top: 16,
    color: Color.greyscaleWhite,
    position: "absolute",
  },
  text: {
    marginLeft: 99,
  },
  leftToSpend: {
    left: 67,
    width: 111,
  },
  of400: {
    left: 263,
    width: 50,
  },
  iconsautoTransport: {
    borderRadius: Border.br_9xs,
    width: 32,
    height: 32,
    left: 16,
    top: 16,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorDimgray_100,
    width: 294,
    borderRadius: Border.br_4xs,
    top: 0,
  },
  rectangle1: {
    backgroundColor: Color.accentAccentS100,
    width: 83,
  },
  progressBar: {
    top: 70,
    height: 3,
    width: 294,
    left: 16,
    position: "absolute",
  },
  autoTransport: {
    height: 84,
    width: 328,
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
  },
  of600: {
    left: 264,
    width: 49,
  },
  rectangle2: {
    backgroundColor: Color.greyscaleGrey50,
    width: 294,
    borderRadius: Border.br_4xs,
    top: 0,
  },
  rectangle3: {
    backgroundColor: Color.accentAccentP50,
    width: 135,
  },
  entertainment: {
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
    marginTop: 8,
  },
  text2: {
    marginLeft: 108,
  },
  rectangle5: {
    backgroundColor: Color.primaryPrimary100,
    width: 237,
  },
  addNewCategory1: {
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  iconsadd: {
    width: 16,
    marginLeft: 10,
    height: 16,
    overflow: "hidden",
  },
  autoLayoutHorizontal: {
    marginLeft: -75,
  },
  addNewCategory: {
    borderStyle: "dashed",
    marginTop: 8,
    height: 84,
    width: 328,
  },
  categories: {
    top: 320,
    left: 24,
    position: "absolute",
  },
  yourBudgetsAre: {
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  groupIcon: {
    width: 14,
    marginLeft: 8,
    height: 16,
  },
  autoLayoutHorizontal1: {
    marginLeft: -99,
    width: 197,
  },
  info: {
    top: 244,
    left: 25,
    borderStyle: "solid",
    width: 326,
    height: 60,
    position: "absolute",
  },
  of2000Budget: {
    top: 89,
    left: 53,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text3: {
    top: 49,
    left: 63,
    fontSize: FontSize.h5_size,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.h7,
    position: "absolute",
  },
  ellipseIcon: {
    top: 2,
    left: 2,
    borderRadius: 99,
    width: 206,
    height: 206,
    position: "absolute",
  },
  ellipseIcon1: {
    top: 51,
    left: -25,
  },
  ellipseIcon2: {
    top: -25,
    left: 48,
  },
  ellipseIcon3: {
    top: -17,
    left: -14,
  },
  chartHalfCricle: {
    top: 99,
    left: 82,
    height: 105,
    width: 210,
    position: "absolute",
  },
  spendingBudgets1: {
    left: 109,
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLarge,
    textAlign: "center",
    color: Color.greyscaleGrey30,
    letterSpacing: 0,
    top: 32,
  },
  iconssettings: {
    left: 328,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  bottomBarIcon: {
    top: 713,
    width: 375,
    height: 99,
    left: 0,
    position: "absolute",
  },
  spendingBudgets: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SpendingBudgets;
