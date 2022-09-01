import { Box, Link, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  route: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    title: {
      fontSize: '12rem !important',
      fontWeight: '700 !important',
      color: theme.palette.primary.main,
    },
    subTitle: {
      fontSize: '2rem !important',
    },
    linkButton: {
      cursor: 'pointer',
      fontWeight: '600',
    },
  }),
);

type RouteProps = {
  route: string;
};

const NotFound: React.FC<Props> = ({ route }: RouteProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.title}>404</Typography>
        <Typography className={classes.subTitle}>
          Página não encontrada.
        </Typography>
        <Link onClick={() => navigate(route)} className={classes.linkButton}>
          Voltar
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
