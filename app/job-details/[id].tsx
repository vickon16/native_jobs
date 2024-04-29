import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import {
  JobDetailsCompany,
  JobDetailsAbout,
  JobDetailsFooter,
  JobDetailsTabs,
  ScreenHeaderBtn,
} from "@/components";
import useFetch from "@/hooks/useFetch";

import { COLORS, SIZES, dummyData, icons } from "@/constants";
import { useState } from "react";

const JobDetailsId = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  // const { data, isLoading, error, refetch } = useFetch({
  //   endpoint: "job-details",
  //   query: {
  //     job_id: params.id.toString() || "",
  //     extended_publisher_details: "false",
  //   },
  // });

  const isLoading = false;
  const error = "";
  const data = dummyData.filter((item) => item.job_id === params.id.toString());

  const onRefresh = () => {
    // setRefreshing(true);
    // refetch();
    // setRefreshing(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              icon={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              icon={icons.share}
              dimension="60%"
              handlePress={() => {}}
            />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text style={{ color: "red" }}>{error}</Text>
          ) : data.length === 0 ? (
            <Text style={{ color: "red" }}>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <JobDetailsCompany item={data[0]} />
              <JobDetailsTabs item={data[0]} />
            </View>
          )}
        </ScrollView>

        <JobDetailsFooter
          url={
            data[0].job_google_link ?? "https://careers.google.com/jobs/results"
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetailsId;
