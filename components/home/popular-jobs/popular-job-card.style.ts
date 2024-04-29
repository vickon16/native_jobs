import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";

const styles = StyleSheet.create<any>({
  container: (selectedJob: any, item: any) => ({
    width: 250,
    padding: SIZES.large,
    marginVertical: SIZES.medium,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.small,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob: any, item: any) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "90%",
    height: "90%",
  },
  companyName: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.small,
  },
  jobName: (selectedJob: any, item: any) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob: any, item: any) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 4,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: SIZES.xSmall / 3,
  },
});

export default styles;
