import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Image, ViewStyle, TextStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { $container, $topContainer, $welcomeLogo } from "./WelcomeScreen"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { colors, spacing } from "app/theme"
import { Text, Screen } from "app/components"
import { MenuItem } from "app/components/MenuItem"
import { StatusBar } from "expo-status-bar"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const monumen2 = require("../../assets/images/tanjungpuri2.jpg")

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen(_props) {
  const { navigation } = _props

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const currentYear = new Date().getFullYear()
  return (
    <Screen contentContainerStyle={$container} preset="scroll">
      <StatusBar style="light" />
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={monumen2} resizeMode="cover" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <MenuItem
          menuName="E-Book"
          onMenuClick={() => {
            navigation.navigate("Ebook")
          }}
        />
        <MenuItem
          menuName="Video"
          onMenuClick={() => {
            navigation.navigate("Video")
          }}
        />
        <MenuItem
          menuName="Peta Lokasi"
          onMenuClick={() => {
            navigation.navigate("Map")
          }}
        />
        <MenuItem
          menuName="Lisensi"
          onMenuClick={() => {
            navigation.navigate("About")
          }}
        />
        <Text
          text={`Copyright © Sarabakawa Design ${currentYear}`}
          style={$copyrightStyle}
          size="xs"
        />
      </View>
    </Screen>
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
