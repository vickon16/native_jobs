import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "@/constants";

const styles = StyleSheet.create<any>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension: string) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
