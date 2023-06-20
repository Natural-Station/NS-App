import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import AmeliaCalendarRedirect from "./customSrc/customComponents/ameliaCalendarRedirect";

export const applyCustomCode = (externalCodeSetup) => {

  externalCodeSetup.moreScreenApi.setTabsList((section, dispatch) => {
    return [
      ...section,
      {
        label: "NUTRICIÓN",
        screens: [
          {
            item: {
              component: () => AmeliaCalendarRedirect(),
              component: () => FormsRedirect()
            }
          }
        ]
      }
    ]
  })
};