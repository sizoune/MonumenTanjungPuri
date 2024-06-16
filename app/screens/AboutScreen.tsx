import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Image, ImageStyle, View, TouchableOpacity, TextStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import ImageView from "react-native-image-viewing"
import { spacing } from "app/theme"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const hakiUri = Image.resolveAssetSource(require("../../assets/images/haki.jpg")).uri

const images = [
  {
    uri: hakiUri,
  },
]

interface AboutScreenProps extends AppStackScreenProps<"About"> {}

export const AboutScreen: FC<AboutScreenProps> = observer(function AboutScreen() {
  const [visible, setIsVisible] = useState(false)
  const currentYear = new Date().getFullYear()
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen contentContainerStyle={$root}>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <View style={$imageContainer}>
          <Image source={{ uri: hakiUri }} alt="alt" style={$imageStyle} />
          <Text text="Tekan Gambar Untuk Melihat Lebih Jelas" style={$copyrightStyle} />
        </View>
      </TouchableOpacity>

      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <Text
        text={`Copyright © Sarabakawa Design ${currentYear}`}
        style={$copyrightStyle}
        size="xs"
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
}

const $imageContainer: ViewStyle = {
  width: "100%",
  height: 400,
}

const $imageStyle: ImageStyle = {
  width: "100%",
  height: 500,
  resizeMode: "contain",
  marginTop: spacing.lg,
  zIndex: 20,
}

const $copyrightStyle: TextStyle = {
  textAlign: "center",
  paddingVertical: spacing.xs,
}
