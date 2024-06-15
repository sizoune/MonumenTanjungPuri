import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Image, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { $container, $topContainer, $welcomeLogo } from "./WelcomeScreen"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { colors, spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const monumen2 = require("../../assets/images/tanjungpuri2.jpg")

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={monumen2} resizeMode="cover" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}></View>
    </View>
  )
})

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "65%",
  backgroundColor: colors.background,
  borderTopLeftRadius: 26,
  borderTopRightRadius: 26,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.lg,
  justifyContent: "center",
}
