import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function JoinScreen() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("@/assets/images/hero-icon.png")}
          style={styles.background}
          resizeMode="cover"
        >
          {/* Logo */}
          <View style={styles.companyLogo}>
            <Image source={require("@/assets/images/Logo.png")} />
          </View>

          {/* Title */}
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Join Us</Text>
            <Text style={styles.textSmall}>
              Create an account to get started
            </Text>
          </View>

          {/* Inputs */}
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#ccc"
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#ccc"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
              style={styles.input}
            />
          </View>

          {/* Button */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/")}
            >
              <Text style={{ ...styles.textSmall, color: "black" }}>
                Join Now
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footerText}>
            <Text style={styles.textSmall}>
              Already have an account?{" "}
              <Text
                style={{ fontWeight: "700" }}
                onPress={() => router.push("/signin")}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
    paddingHorizontal: 20,
  },
  companyLogo: {
    alignItems: "center",
    padding: 20,
    marginBottom: 30,
  },
  textGroup: { alignItems: "center", marginBottom: 30 },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 36,
    textAlign: "center",
    marginBottom: 8,
  },
  textSmall: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
  },
  inputGroup: { marginBottom: 30 },
  input: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    padding: 15,
    color: "white",
    marginBottom: 15,
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonGroup: { marginBottom: 20 },
  footerText: { alignItems: "center", marginTop: 10 },
});
