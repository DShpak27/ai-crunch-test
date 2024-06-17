import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardDescription,
  CardMedia,
  CardTitle,
  DetailsButton,
} from './ProductCard.styled';

const ProductCard: React.FC<CourseCardProps> = ({
  course: { id: courseId, title, description, imgUrl },
}) => {
  const handleButtonClick = () => {};

  return (
    <Card>
      <CardMedia
        component="img"
        image={imgUrl ? imgUrl : 'https://i.ibb.co/60VL44W/Placeholder-1.png'}
        alt="Course Image"
      />
      <CardContent>
        <CardTitle gutterBottom component="div">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardActions>
        <DetailsButton onClick={handleButtonClick}>Details</DetailsButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
