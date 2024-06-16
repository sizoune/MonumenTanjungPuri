import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen } from "app/components"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface MapScreenProps extends AppStackScreenProps<"Map"> {}

export const MapScreen: FC<MapScreenProps> = observer(function MapScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen contentContainerStyle={$root}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={$mapStyle}
        mapType="hybrid"
        camera={{
          zoom: 19,
          center: { latitude: -2.1720109474501736, longitude: 115.41369196883143 },
          heading: 58,
          pitch: 12,
        }}
      >
        <Marker
          title="Monumen Tanjung Puri"
          coordinate={{ latitude: -2.1720109474501736, longitude: 115.41369196883143 }}
        />
      </MapView>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $mapStyle: ViewStyle = {
  width: "100%",
  height: "100%",
}
