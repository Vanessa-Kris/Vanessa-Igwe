import { Box, Typography } from "@mui/material";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Outreachy21() {
  const colors = useThemeColors();
  return (
    <Box sx={{ color: colors.textPrimary }}>
      <Typography variant="h6" sx={{ py: 3 }}>
        Hey There! I'd like to share my experience from my Outreachy internship
        in 2021/2022.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ py: 3 }}>
        During this period, I worked as a package manager/maintainer with
        Fedora, and my mentors were Ankur Sinha and Ben Cotton.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ py: 3 }}>
        Outreachy is a three-month paid internship program designed to support
        underrepresented individuals in the tech industry.{" "}
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ py: 3 }}>
        I must say that Outreachy has been one of the most remarkable
        experiences of my life, without a doubt. In August 2021, I submitted my
        initial application, where I highlighted my underrepresented status in
        the tech field and the systemic biases I had encountered throughout my
        journey in the technology industry. I addressed all the essay questions
        as required.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ py: 3 }}>
        As a newcomer, I had serious doubts about my abilities and didn't set my
        hopes too high. However, in October, when the results of the initial
        applications were released, I received the acceptance email! That
        acceptance letter became my new objective, and I was determined not to
        let it slip through my fingers.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ my: 3 }}>
        On the same night I received my acceptance email, I began researching
        projects to contribute to. It's worth noting that at that time, I had
        limited technical skills, aside from basic laptop operation and some
        knowledge of HTML.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ my: 3 }}>
        The Fedora project particularly piqued my interest because they were
        willing to teach newcomers, and the project descriptions were both
        intriguing and challenging, which I love.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ my: 3 }}>
        I joined the Fedora Matrix channel, introduced myself as required, and
        had the opportunity to meet my mentors and fellow interns. My incredible
        mentors provided all the necessary resources to get me started. I began
        experimenting with RPM packaging, which was incredibly enjoyable until I
        encountered build failures (laughs). Debugging seemed like a daunting
        task when I wasn't entirely sure what I was looking at. Whenever I hit a
        roadblock, I could always count on my mentors for assistance.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ my: 3 }}>
        I made sure to document all my contributions and provide support to my
        fellow interns because Outreachy is all about fostering a sense of
        community. After the contribution period, I submitted my final
        application. I continued to stay engaged with the organization,
        attending meetings and actively participating as a team member.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ my: 3 }}>
        When my final application was approved, I felt unstoppable (laughs). It
        was truly one of the best moments of my life. In week 1, I had to
        complete all my pending tasks, and then came the challenge of blogging
        (laughs). I was admittedly a novice writer, and my mentor had to review
        my blog posts regularly. Ankur played a pivotal role in teaching me most
        of what I know now; he's an incredible mentor.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ my: 3 }}>
        Despite my subpar blogging skills, I persisted and continued blogging
        until the final week (laughs). I am immensely grateful that I embarked
        on the Outreachy journey. It provided me with the confidence and support
        I needed to kickstart my career.
      </Typography>
      {/*  */}
      <Typography variant="h6" sx={{ my: 3 }}>
        Curious about what I've been up to since then?
      </Typography>
    </Box>
  );
}
