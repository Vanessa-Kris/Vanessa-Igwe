import { Box, Typography } from "@mui/material";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Transition() {
  const colors = useThemeColors();
  return (
    <Box sx={{ color: colors.textPrimary }}>
      <Typography variant="h6" sx={{ py: 3 }}>
        In December 2019, I had just relocated to Cameroon, leaving my school
        and everything behind in an attempt to start anew. At that time, I had
        absolutely no idea about my passions or what I wanted to pursue. I found
        myself amidst a mid-life crisis and numerous uncertainties.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ py: 3 }}>
        For nearly two years, I remained idle at home until 2021. It was during
        this period that I had a very close friend who happened to be a
        developer (and still is). I became increasingly intrigued and curious
        about the field. I began watching YouTube tutorials and coding alongside
        my friend, utilizing the old laptop they had lent me. My journey began
        with HTML.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ py: 3 }}>
        Around July 2021, I came across Outreachy, which offered a paid remote
        internship opportunity. I saw it as the perfect chance to get myself
        into the tech industry. Although I was scared, I was resolute in my
        determination to pursue this path.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ py: 3 }}>
        Transitioning into the tech field had its own set of challenges,
        including access to learning resources, consistent electricity, and
        covering internet bills. However, I firmly believed that there is always
        a solution or workaround to every problem.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ py: 3 }}>
        For more details about my Outreachy experience, please check out my
        other post.
      </Typography>
      {/*  */}
    </Box>
  );
}
