import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";

import { SIZES } from "@/constants";
import { JobDetailsAbout, JobDetailsSpecifics } from "@/components";

type Props = {
  item: TDummyData;
};

const tabs = ["About", "Qualifications", "Responsibilities"];

const Tabs = ({ item }: Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <JobDetailsAbout info={item.job_description ?? "No data provided"} />
        );
      case "Qualifications":
        return (
          <JobDetailsSpecifics
            title={activeTab}
            points={item.job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "Responsibilities":
        return (
          <JobDetailsSpecifics
            title={activeTab}
            points={item.job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item}
          data={tabs}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                style={styles.btn(item, activeTab)}
                onPress={() => setActiveTab(item)}
              >
                <Text style={styles.btnText(item, activeTab)}>{item}</Text>
              </TouchableOpacity>
            </>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            columnGap: SIZES.small / 2,
            paddingVertical: SIZES.small / 2,
          }}
        />
      </View>

      {displayTabContent()}
    </>
  );
};

export default Tabs;
