import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "@/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.xSmall,
    backgroundColor: "#FFF",
    ...SHADOWS.xSmall,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "90%",
    height: "90%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
