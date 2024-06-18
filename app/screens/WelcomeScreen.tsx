import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Text, Screen } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { StatusBar } from "expo-status-bar"

export const monumen = require("../../assets/images/tanjungpuri.jpg")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  const { navigation } = _props
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <Screen contentContainerStyle={$container} preset="scroll">
      <StatusBar style="light" />
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={monumen} resizeMode="cover" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <View>
          <Text text="MONUMEN TANJUNG PURI" size="xl" weight="bold" />
          <Text tx="welcomeScreen.aboutMonumen" size="xs" style={$monumenAboutStyle} />
        </View>
        <Button
          text="Lanjut"
          RightAccessory={() => <Icon icon="caretRight" />}
          preset="default"
          onPress={() => navigation.navigate("Menu")}
        />
      </View>
    </Screen>
  )
})

export const $container: ViewStyle = {
  flex: 1,
}

export const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "65%",
  backgroundColor: colors.background,
  borderTopLeftRadius: 26,
  borderTopRightRadius: 26,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.lg,
  justifyContent: "space-between",
}

export const $welcomeLogo: ImageStyle = {
  height: 400,
  width: "100%",
  marginBottom: spacing.xxl,
}

const $monumenAboutStyle: TextStyle = {
  marginTop: spacing.lg,
  textAlign: "justify",
}
