import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import YoutubePlayer from "react-native-youtube-iframe"
import { StatusBar } from "expo-status-bar"
import { spacing } from "app/theme"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface VideoScreenProps extends AppStackScreenProps<"Video"> {}

export const VideoScreen: FC<VideoScreenProps> = observer(function VideoScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  return (
    <Screen contentContainerStyle={$root} preset="scroll">
      <StatusBar style="auto" />
      <YoutubePlayer
        height={500}
        play={true}
        videoId={"8z-38_tIjRI"}
        webViewProps={{
          userAgent:
            "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36",
        }}
        // onChangeState={onStateChange}
      />
      <View style={$textContainer}>
        <Text text="Movie Clip" size="lg" />
        <Text text="Sejarah Pembangunan" size="lg" />
        <Text text="Monumen Tanjung Puri" weight="bold" size="xl" />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  height: "100%",
}

const $textContainer: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: spacing.lg,
}
