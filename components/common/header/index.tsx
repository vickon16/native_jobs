import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screen-header-btn.style";

type Props = {
  icon: any;
  dimension: string;
  handlePress: () => void;
};

const ScreenHeaderBtn = ({ icon, dimension, handlePress }: Props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={icon}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
