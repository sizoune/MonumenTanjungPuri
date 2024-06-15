import { View, ViewStyle, TouchableOpacity } from "react-native"
import { Card } from "./Card"
import { Text } from "./Text"
import { Icon } from "./Icon"
import { spacing } from "app/theme"

export function MenuItem({ menuName, onMenuClick }: { menuName: string; onMenuClick: () => void }) {
  return (
    <Card
      verticalAlignment="center"
      ContentComponent={
        <TouchableOpacity onPress={onMenuClick}>
          <View style={$contentContainer}>
            <Text text={menuName} weight="bold" size="md" />
            <Icon icon="caretRight" />
          </View>
        </TouchableOpacity>
      }
      contentStyle={{ paddingVertical: spacing.xs }}
    />
  )
}

const $contentContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: spacing.xs,
}
