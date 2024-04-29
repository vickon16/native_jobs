import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearby-jobs.style";
import { COLORS, dummyData } from "@/constants";
import NearbyJobCard from "./nearby-jobs-card";
import useFetch from "@/hooks/useFetch";

const NearbyJobs = () => {
  // const { data, isLoading, error } = useFetch({
  //   endpoint: "search",
  //   query: {
  //     query: "React Native developer",
  //     num_pages: "1",
  //   },
  // });
  const isLoading = false;
  const error = "";
  const data = dummyData;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="small" color={COLORS.primary} />
        ) : error ? (
          <Text style={{ color: "red" }}>{error}</Text>
        ) : (
          data?.map((item) => (
            <NearbyJobCard item={item} key={`nearby-job-${item.job_id}`} />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
