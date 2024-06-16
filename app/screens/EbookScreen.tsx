import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen } from "app/components"
import { StatusBar } from "expo-status-bar"
import Pdf from "react-native-pdf"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const ebookPdf = require("../../assets/documents/ebook.pdf")

interface EbookScreenProps extends AppStackScreenProps<"Ebook"> {}

export const EbookScreen: FC<EbookScreenProps> = observer(function EbookScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen contentContainerStyle={$root} preset="scroll">
      <StatusBar style="auto" />
      <Pdf
        source={ebookPdf}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages) => {
          console.log(`Number of pages: ${numberOfPages}`)
        }}
        onPageChanged={(page) => {
          console.log(`Current page: ${page}`)
        }}
        onError={(error) => {
          console.log(error)
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`)
        }}
        style={$pdfStyle}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
}

const $pdfStyle: ViewStyle = {
  flex: 1,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
}
