import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popular-jobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES, dummyData } from "@/constants";
import PopularJobCard from "@/components/home/popular-jobs/popular-job-card";
import useFetch from "@/hooks/useFetch";

const PopularJobs = () => {
  const isLoading = false;
  const error = "";
  const data = dummyData;
  // const { data, isLoading, error } = useFetch({
  //   endpoint: "search",
  //   query: {
  //     query: "React Developer",
  //     num_pages: "1",
  //   },
  // });

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList
            // keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            // showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                // selectedJob={}
                handleCardPress={() => {}}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
