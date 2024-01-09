import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Avatar,
  Grid,
  CircularProgress,
} from "@mui/material";
import { User as UserInfoCardProps } from "../types/user";
import Image from "next/image";

const UserInfoCard: React.FC<UserInfoCardProps> = ({
  name,
  location,
  email,
  phone,
  picture,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  return (
    <Card sx={{ maxWidth: 445, m: 2 }}>
      <CardMedia>
        <Avatar sx={{ width: 140, height: 140, margin: "auto", mt: 2 }}>
          {!isImageLoaded && <CircularProgress />}
          <Image
            alt={`Profile of ${name.first} ${name.last}`}
            src={picture.large}
            width={140}
            height={140}
            priority={true}
            onLoad={() => setImageLoaded(true)}
          />
        </Avatar>
      </CardMedia>

      <CardContent sx={{ ml: 1.5 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center", mb: 3 }}
        >
          {name.title}. {name.first} {name.last}
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Address: {location.street.name} {location.street.number},{" "}
              {location.city}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              {location.state}, {location.postcode}, {location.country}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Email: {email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Phone: {phone}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
