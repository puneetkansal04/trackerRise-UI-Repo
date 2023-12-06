import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Register1 = () => {
  return (
    <View style={styles.register1}>
      <Text style={styles.byRegisteringYou}>
        By registering, you agree to our Terms of Use. Learn how we collect, use
        and share your data.
      </Text>
      <View style={styles.button}>
        <Text style={styles.signUpWith}>Sign up with E-mail</Text>
      </View>
      <Text style={styles.or}>or</Text>
      <View style={[styles.buttonfacebook, styles.buttonappleShadowBox]}>
        <Image
          style={styles.iconfacebook}
          resizeMode="cover"
          source={require("../assets/iconfacebook.png")}
        />
        <Text style={[styles.signUpWith1, styles.signTypo]}>
          Sign up with Facebook
        </Text>
      </View>
      <View style={[styles.buttongoogle, styles.buttonappleShadowBox]}>
        <Image
          style={styles.iconfacebook}
          resizeMode="cover"
          source={require("../assets/icongoogle.png")}
        />
        <Text style={[styles.signUpWith2, styles.signTypo]}>
          Sign up with Google
        </Text>
      </View>
      <View style={[styles.buttonapple, styles.buttonappleShadowBox]}>
        <Image
          style={styles.iconfacebook}
          resizeMode="cover"
          source={require("../assets/iconapple.png")}
        />
        <Text style={[styles.signUpWith1, styles.signTypo]}>
          Sign up with Apple
        </Text>
      </View>
      <Image
        style={[styles.assetslogoIcon, styles.assetslogoIconPosition]}
        resizeMode="cover"
        source={require("../assets/assetslogo3.png")}
      />
      <View style={[styles.register1Child, styles.assetslogoIconPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonappleShadowBox: {
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    width: 327,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_980xl,
    left: "50%",
    marginLeft: -162.5,
    position: "absolute",
  },
  signTypo: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  assetslogoIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  byRegisteringYou: {
    top: 742,
    fontSize: FontSize.h1_size,
    letterSpacing: 0,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.greyscaleGrey50,
    width: 326,
    textAlign: "center",
    left: "50%",
    marginLeft: -162.5,
    position: "absolute",
  },
  signUpWith: {
    textAlign: "left",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  button: {
    top: 670,
    backgroundColor: Color.colorGray_100,
    width: 324,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_980xl,
    left: "50%",
    marginLeft: -162.5,
    position: "absolute",
  },
  or: {
    top: 610,
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    width: 326,
    textAlign: "center",
    left: "50%",
    marginLeft: -162.5,
    position: "absolute",
  },
  iconfacebook: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  signUpWith1: {
    color: Color.greyscaleWhite,
  },
  buttonfacebook: {
    top: 522,
    backgroundColor: "#1771e6",
    shadowColor: "rgba(23, 113, 230, 0.5)",
  },
  signUpWith2: {
    color: Color.greyscaleGrey80,
  },
  buttongoogle: {
    top: 458,
    backgroundColor: Color.greyscaleWhite,
    shadowColor: "rgba(255, 255, 255, 0.25)",
  },
  buttonapple: {
    top: 394,
    backgroundColor: Color.colorBlack,
    shadowColor: "rgba(0, 0, 0, 0.5)",
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
  },
  register1Child: {
    top: -12,
    left: -9,
    width: 100,
    height: 100,
  },
  register1: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Register1;
