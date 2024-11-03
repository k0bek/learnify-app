import React from "react";
import { View, Text, Animated, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti"; // For Framer Motion-like animations

const { width } = Dimensions.get("window");

const Hero = () => {
  const learningOptions = [
    {
      title: "Courses",
      description: "Self-paced paths",
    },
    {
      title: "Workshops",
      description: "Interactive sessions",
    },
    {
      title: "Resources",
      description: "Comprehensive materials",
    },
  ];

  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
        style={styles.contentContainer}
      >
        <View style={styles.heroContent}>
          <View style={styles.titleContainer}>
            <LinearGradient
              colors={["#6366f1", "#3b82f6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientContainer}
            >
              <Text style={styles.mainTitle}>
                Transform your learning journey.
              </Text>
            </LinearGradient>
            <Text style={styles.subtitle}>Master new skills daily.</Text>
          </View>

          <View style={styles.optionsContainer}>
            {learningOptions.map((option, index) => (
              <View key={index} style={styles.optionItem}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>
                  {option.description}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </MotiView>

      <View style={styles.backgroundGradient}>
        <LinearGradient
          colors={["rgba(131, 80, 232, 0.4)", "transparent"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  contentContainer: {
    alignItems: "center",
    paddingTop: 120,
    zIndex: 1,
  },
  heroContent: {
    width: width - 40,
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
  },
  gradientContainer: {
    borderRadius: 8,
    padding: 2,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 24,
    color: "#374151",
    marginTop: 4,
    textAlign: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 24,
  },
  optionItem: {
    alignItems: "center",
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  backgroundGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 400,
  },
  gradient: {
    flex: 1,
  },
});

export default Hero;
