import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
  },
  headText: {
    marginTop: SIZES.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  contentBox: {},
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
