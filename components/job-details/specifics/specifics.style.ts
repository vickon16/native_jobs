import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    paddingVertical: SIZES.medium,
  },
  title: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  pointsContainer: {
    marginVertical: SIZES.xSmall,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: SIZES.small / 2,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.gray,
    marginTop: 6,
  },
  pointText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  },
});

export default styles;
