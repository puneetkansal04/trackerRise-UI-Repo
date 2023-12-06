import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Text style={[styles.ifYouDont, styles.ifYouDontTypo]}>
        If you don't have an account yet?
      </Text>
      <Text style={[styles.forgotPassoword, styles.login1Clr]}>
        Forgot passoword
      </Text>
      <View style={styles.autoLayoutHorizontal}>
        <View style={[styles.frame, styles.frameBorder]} />
        <Text style={[styles.rememberMe, styles.login1Clr]}>Remember me</Text>
      </View>
      <View style={[styles.inputlogin, styles.inputloginPosition]}>
        <Text style={[styles.login1, styles.login1Clr]}>Login</Text>
        <View style={[styles.input, styles.frameBorder]} />
      </View>
      <View style={[styles.inputpassword, styles.inputloginPosition]}>
        <Text style={[styles.login1, styles.login1Clr]}>Password</Text>
        <View style={[styles.input, styles.frameBorder]} />
      </View>
      <Image
        style={styles.assetslogoIcon}
        resizeMode="cover"
        source={require("../assets/assetslogo3.png")}
      />
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.signIn}>Sign Un</Text>
      </View>
      <View style={[styles.button1, styles.buttonFlexBox]}>
        <Text style={styles.signIn}>Sign In</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ifYouDontTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyLarge,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  login1Clr: {
    color: Color.greyscaleGrey50,
    letterSpacing: 0,
  },
  frameBorder: {
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
  },
  inputloginPosition: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    width: 324,
    borderRadius: Border.br_980xl,
    alignItems: "center",
    position: "absolute",
  },
  ifYouDont: {
    marginLeft: -111.5,
    top: 694,
    color: Color.greyscaleWhite,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.bodyLarge,
    left: "50%",
    position: "absolute",
  },
  forgotPassoword: {
    marginLeft: 32.5,
    top: 446,
    color: Color.greyscaleGrey50,
    textAlign: "center",
    fontFamily: FontFamily.bodyLarge,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    left: "50%",
    position: "absolute",
  },
  frame: {
    borderRadius: 8,
    width: 24,
    height: 24,
  },
  rememberMe: {
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.bodyLarge,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  autoLayoutHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    left: 24,
    top: 446,
    position: "absolute",
  },
  login1: {
    fontSize: FontSize.h1_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    alignSelf: "stretch",
  },
  input: {
    borderRadius: Border.br_base,
    height: 48,
    marginTop: 4,
    alignSelf: "stretch",
  },
  inputlogin: {
    top: 270,
  },
  inputpassword: {
    top: 354,
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
  signIn: {
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    textAlign: "left",
    color: Color.greyscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.h2_size,
  },
  button: {
    marginLeft: -161.5,
    top: 734,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: Padding.p_xs,
    left: "50%",
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    width: 324,
    borderRadius: Border.br_980xl,
  },
  button1: {
    top: 494,
    left: 26,
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
  login: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
