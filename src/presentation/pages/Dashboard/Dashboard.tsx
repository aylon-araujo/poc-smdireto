import { useState, useEffect } from "react";
import { Paper, Typography, Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

import ComboBox from "../../components/ComboBox";
import Card from "../../components/Card";
import DashboardChart from "../../components/Chart";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      padding: "18px",
    },
    title: {
      marginBottonm: "1rem",
      fontWeight: "400 !important",
      fontSize: "1.7rem !important",
    },
    tertiary: {
      color: "#ECCC62",
    },
  })
);

const dataChart = [
  {
    name: "Concluido",
    data: [123],
  },
  {
    name: "Em aberto",
    data: [1450],
  },
];

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={8} className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.title}>Dashboard</Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <ComboBox size="small" fullWidth />
        </Grid>
        <Grid item xs={12} md={8}>
          <DashboardChart chartTitle="Potencial de vendas (Alunos)" series={dataChart} />
        </Grid>
        <Grid item container direction="column" xs={12} md={4} spacing={4}>
          <Grid item>
            <Card
              title="Valor total"
              content={
                <Typography align="center" variant="h6" color="primary">
                  R$ 40.479,49
                </Typography>
              }
            />
          </Grid>
          <Grid item>
            <Card
              title="Valor total venda professor(a)"
              content={
                <Typography align="center" variant="h6" color="secondary">
                  R$ 0
                </Typography>
              }
            />
          </Grid>
          <Grid item>
            <Card
              title="Valor total venda professor(a)"
              content={
                <>
                  <Typography
                    className={classes.tertiary}
                    align="center"
                    variant="h6"
                    color="tertiary"
                  >
                    R$ 3.865,49
                  </Typography>
                  <Grid container justifyContent="space-around">
                    <Grid item md={5}>
                      <Typography variant="body2">
                        Valor total do repasse literatura
                      </Typography>
                      <Typography className={classes.tertiary}>
                        R$ 66,99
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Typography variant="body2">
                        Valor total do repasse didático
                      </Typography>
                      <Typography className={classes.tertiary}>
                        R$ 2.174,52
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Typography variant="body2">
                        Valor total do repasse digital
                      </Typography>
                      <Typography className={classes.tertiary}>
                        R$ 26,79
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Typography variant="body2">
                        Valor total do repasse educamos
                      </Typography>
                      <Typography className={classes.tertiary}>
                        R$ 1.461,41
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Typography variant="body2">
                        Valor total do repasse serviços
                      </Typography>
                      <Typography className={classes.tertiary}>
                        R$ 98,39
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Typography variant="body2">
                        Valor total do repasse bilíngue
                      </Typography>
                      <Typography className={classes.tertiary}>
                        R$ 37,40
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              }
            />
          </Grid>
          <Grid item>
            <Card
              title="Valor total líquido"
              content={
                <>
                  <Typography align="center" variant="h6" color="primary">
                    R$ 36.614,00
                  </Typography>
                </>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
