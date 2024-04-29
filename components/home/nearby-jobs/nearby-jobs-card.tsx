import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearby-jobs-card.style";
import { checkImageURL } from "@/lib";
import { useRouter } from "expo-router";

type Props = {
  item: TDummyData;
};

const NearbyJobCard = ({ item }: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/job-details/${item.job_id}`)}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.job_title}
        </Text>

        <Text style={styles.jobType}>{item?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
