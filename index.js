import React from "react";
import formsRedirect from "./customSrc/customComponents/formsRedirect";

export const applyCustomCode = (externalCodeSetup) => {

  externalCodeSetup.moreScreenApi.setTabsList((section, dispatch) => {
    return [
      ...section,
      {
        label: "NUTRICIÓN",
        screens: [
          {
            item: {
              component: () => formsRedirect()
            }
          }
        ]
      }
    ]
  })
};