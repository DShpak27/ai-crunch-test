// 'use client';
// import React from 'react';
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardMedia,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';

// export default function Component() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Box
//       sx={{
//         mx: 'auto',
//         py: 6,
//         px: 4,
//         borderRadius: theme.spacing(1),
//         border: '1px solid rgba(195, 195, 195, 1)',
//       }}
//     >
//       <Grid
//         container
//         spacing={6}
//         alignItems="start"
//         direction={isMobile ? 'column-reverse' : 'row'}
//       >
//         <Grid item xs={12} md={6}>
//           <Card
//             sx={{
//               borderRadius: 2,
//               boxShadow: 'none',
//               border: '1px solid rgba(195, 195, 195, 0.5)',
//               width: '100%',
//             }}
//           >
//             <CardMedia
//               component="img"
//               image="https://i5.walmartimages.com/seo/Sega-Genesis-Flashback-a-classic-game-console-with-85-games-built-in-HDMI-and-two-2-4G-wireless-controllers_3cd643f5-6676-429a-b78f-6b481f6c71ea_1.e32ab536fb2c607d1f4e623213bf4939.jpeg"
//               alt="Xbox Series X"
//               sx={{
//                 aspectRatio: '1/1',
//                 objectFit: 'contain',
//                 borderRadius: 'inherit',
//                 maxHeight: isMobile ? 'auto' : '320px',
//               }}
//             />
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Xbox Series X
//             </Typography>
//             <Box display="flex" alignItems="center" gap={1} mb={2}>
//               <Typography color="text.secondary">Microsoft</Typography>
//               <Box
//                 component="span"
//                 sx={{
//                   height: '4px',
//                   width: '4px',
//                   bgcolor: 'text.secondary',
//                   borderRadius: '50%',
//                 }}
//               />
//               <Typography color="text.secondary">2020</Typography>
//               <Box
//                 component="span"
//                 sx={{
//                   height: '4px',
//                   width: '4px',
//                   bgcolor: 'text.secondary',
//                   borderRadius: '50%',
//                 }}
//               />
//               <Typography color="text.secondary">9th Generation</Typography>
//             </Box>
//             <Typography color="text.secondary" gutterBottom>
//               Product Code: XSX-001
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               The Xbox Series X is the flagship console of the ninth generation
//               of video game consoles developed by Microsoft. It was released in
//               November 2020 and is the most powerful Xbox console to date,
//               capable of delivering 4K gaming at up to 120 frames per second.
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               The console features a custom-designed AMD Zen 2 CPU and a
//               powerful GPU, allowing it to deliver stunning visuals and fast
//               loading times. It also supports ray tracing, variable refresh
//               rate, and other advanced graphics features.
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

'use client';
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function Component() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        mx: 'auto',
        py: 6,
        px: 4,
        borderRadius: theme.spacing(1),
        border: '1px solid rgba(195, 195, 195, 1)',
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="start"
        direction={isMobile ? 'column-reverse' : 'row'}
      >
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: 'none',
              border: '1px solid rgba(195, 195, 195, 0.5)',
              width: '100%',
            }}
          >
            <CardMedia
              component="img"
              image="https://i5.walmartimages.com/seo/Sega-Genesis-Flashback-a-classic-game-console-with-85-games-built-in-HDMI-and-two-2-4G-wireless-controllers_3cd643f5-6676-429a-b78f-6b481f6c71ea_1.e32ab536fb2c607d1f4e623213bf4939.jpeg"
              alt="Xbox Series X"
              sx={{
                aspectRatio: '1/1',
                objectFit: 'contain',
                borderRadius: 'inherit',
                maxHeight: isMobile ? 'auto' : '320px',
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              Xbox Series X
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Typography color="text.secondary">Microsoft</Typography>
              <Box
                component="span"
                sx={{
                  height: '4px',
                  width: '4px',
                  bgcolor: 'text.secondary',
                  borderRadius: '50%',
                }}
              />
              <Typography color="text.secondary">2020</Typography>
              <Box
                component="span"
                sx={{
                  height: '4px',
                  width: '4px',
                  bgcolor: 'text.secondary',
                  borderRadius: '50%',
                }}
              />
              <Typography color="text.secondary">9th Generation</Typography>
            </Box>
            <Typography variant="body1" gutterBottom>
              The Xbox Series X is the flagship console of the ninth generation
              of video game consoles developed by Microsoft. It was released in
              November 2020 and is the most powerful Xbox console to date,
              capable of delivering 4K gaming at up to 120 frames per second.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The console features a custom-designed AMD Zen 2 CPU and a
              powerful GPU, allowing it to deliver stunning visuals and fast
              loading times. It also supports ray tracing, variable refresh
              rate, and other advanced graphics features.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
