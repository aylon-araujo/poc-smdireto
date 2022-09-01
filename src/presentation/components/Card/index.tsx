import { Card, CardContent, Typography } from '@mui/material';

interface CardProps {
  title?: string;
  content: React.ReactNode | string;
}

const CardContainer = ({ title, content }: CardProps) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="inherit" align="center">
            {title}
          </Typography>
          {content}
        </CardContent>
      </Card>
    </>
  );
};

export default CardContainer;
