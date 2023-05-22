import React from "react";
import * as P from "@shopify/polaris";

export function NewTest() {
  return (
    <>
      <P.AlphaCard background="bg-subdued">
        <P.Text as="h2" variant="bodyMd">
          Content inside a card
        </P.Text>
      </P.AlphaCard>
      <P.Box
        background="bg"
        borderWidth="1"
        borderColor="border-subdued"
        padding="8">
        <P.Bleed marginInline="8">
          <Placeholder label="marginInline" />
        </P.Bleed>
      </P.Box>
    </>
  );
}

const Placeholder = ({ label = "", height = "auto", width = "auto" }) => {
  return (
    <div
      style={{
        background: "var(--p-color-text-info)",
        padding: "14px var(--p-space-2)",
        height: height,
        width: width,
      }}>
      <P.HorizontalStack gap="4" align="center">
        <div
          style={{
            color: "var(--p-color-text-on-color)",
          }}>
          <P.Text as="h2" variant="bodyMd" fontWeight="regular">
            {label}
          </P.Text>
        </div>
      </P.HorizontalStack>
    </div>
  );
};
