import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useThemeColors } from "../hooks/useThemeColors";
import Outreachy21 from "../Blogs/outreachy21";
// import Transition from "../Blogs/transition";

export default function Blogs() {
  const colors = useThemeColors();
  const [openIndex, setOpenIndex] = useState(-1);

  const blogPosts = [
    // {
    //   imageUrl:
    //     "https://img.freepik.com/free-photo/spaceship-orbits-dark-galaxy-glowing-blue-comet-generated-by-ai_188544-9662.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph",
    //   date: "October 1, 2023",
    //   title: "2 Years Tech Journey check! Progress so far and all the gist.",
    //   content: "Coming Soon",
    // },
    {
      imageUrl:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210414121548/Outreachy-Internship-Program.png",
      date: "October 1, 2023",
      title: "My Outreachy December 2021/2022 Journey With Fedora.",
      content: <Outreachy21 />,
    },
    // {
    //   imageUrl:
    //     "https://img.freepik.com/free-photo/man-jump-through-gap-hill-man-jumping-cliff-blue-sky-business-concept-idea_1323-186.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph",
    //   date: "October 1, 2023",
    //   title: "Transition to Tech (How I ended up here and all the challenges).",
    //   content: <Transition />,
    // },
  ];

  const handleOpen = (index) => {
    setOpenIndex(index);
  };

  const handleClose = () => {
    setOpenIndex(-1);
  };

  return (
    <Box
      sx={{
        m: { md: 15, xs: 1 },
        pt: 7,
        color: colors.textSecondary,
        px: { xs: 1.5 },
      }}
    >
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        Articles & Blogs
      </Typography>
      <Typography
        variant="h3"
        sx={{ my: { md: 3, xs: 3 }, color: colors.textPrimary }}
      >
        latest Blogs
        <Divider
          flexItem
          sx={{
            bgcolor: colors.divider,
            width: { md: "20%", xs: "40%" },
            my: 2,
          }}
        />
      </Typography>

      <Grid container columnSpacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item md={6} sx={{ p: 2 }} key={index}>
            <img
              style={{
                height: "200px",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(index)}
              src={post.imageUrl}
              alt=""
            />
            <Typography
              onClick={() => handleOpen(index)}
              variant="h5"
              sx={{ fontSize: "17px", py: 2 }}
            >
              {post.date}
            </Typography>
            <Typography
              onClick={() => handleOpen(index)}
              variant="h5"
              sx={{ fontSize: "17px", color: colors.textPrimary }}
            >
              {post.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {blogPosts.map((post, index) => (
        <Dialog
          key={index}
          open={openIndex === index}
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: colors.bgPrimary,
              color: colors.textSecondary, // Set the background color of the dialog content
            },
          }}
          // maxWidth="md"
        >
          <DialogTitle> {post.title}</DialogTitle>
          <DialogContent>
            <img style={{ maxWidth: "100%" }} src={post.imageUrl} alt="" />
            <Typography variant="h5" sx={{ fontSize: "17px", py: 2 }}>
              {post.date}
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "17px" }}>
              {post.title}
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "17px" }}>
              {post.content}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ))}
    </Box>
  );
}
