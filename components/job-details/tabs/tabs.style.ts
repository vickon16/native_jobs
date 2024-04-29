import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "@/constants";

const styles = StyleSheet.create<any>({
  container: {
    marginVertical: SIZES.small,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
    borderRadius: SIZES.xSmall,
    marginLeft: 2,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
  }),
});

export default styles;
