import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Image, ViewStyle, TextStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { $container, $topContainer, $welcomeLogo } from "./WelcomeScreen"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { colors, spacing } from "app/theme"
import { Card, Text, Icon } from "app/components"
import { BookOpenText } from "lucide-react-native"
import { MenuItem } from "app/components/MenuItem"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const monumen2 = require("../../assets/images/tanjungpuri2.jpg")

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const currentYear = new Date().getFullYear()
  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={monumen2} resizeMode="cover" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <MenuItem menuName="E-Book" onMenuClick={() => {}} />
        <MenuItem menuName="Video" onMenuClick={() => {}} />
        <MenuItem menuName="Peta Lokasi" onMenuClick={() => {}} />
        <MenuItem menuName="Tentang Aplikasi" onMenuClick={() => {}} />
        <Text
          text={`Copyright © Sarabakawa Design ${currentYear}`}
          style={$copyrightStyle}
          size="xs"
        />
      </View>
    </View>
  )
})

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "88%",
  backgroundColor: colors.background,
  borderTopLeftRadius: 26,
  borderTopRightRadius: 26,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.lg,
  justifyContent: "space-between",
}

const $copyrightStyle: TextStyle = {
  textAlign: "center",
  paddingVertical: spacing.xs,
}
