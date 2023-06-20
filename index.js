import React from "react";
import formsRedirect from "./customSrc/customComponents/formsRedirect";

export const applyCustomCode = (externalCodeSetup) => {
  // externalCodeSetup.cssApi.addCustomColors({"customBackgroundColor": "#0C0B0C"});

  externalCodeSetup.moreScreenApi.setTabsList((section, dispatch) => {
    return [
      ...section,
      {
        label: "PANEL NUTRICIONAL",
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