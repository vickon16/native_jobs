import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  likeBtn: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: "#F37453",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#222",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.small,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
