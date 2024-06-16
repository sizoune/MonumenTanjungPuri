import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen } from "app/components"
import YoutubePlayer from "react-native-youtube-iframe"
import { StatusBar } from "expo-status-bar"
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
        height={300}
        play={true}
        videoId={"8z-38_tIjRI"}
        // onChangeState={onStateChange}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
