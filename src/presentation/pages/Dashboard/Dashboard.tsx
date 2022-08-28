import { useState, useEffect } from "react";
import { Paper, Typography, Grid } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { makeStyles, createStyles } from "@mui/styles";

import ComboBox from "../../components/ComboBox";
import Card from "../../components/Card";

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

const Dashboard = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const [chart] = useState({
    series: [
      {
        name: "Concluido",
        data: [123],
      },
      {
        name: "Em aberto",
        data: [1450],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            // reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: [],
          },
          export: {
            csv: {
              filename: "sm-relatorio",
              columnDelimiter: ";",
              headerCategory: "category",
              headerValue: "value",
              dateFormatter(timestamp: Date) {
                return new Date(timestamp).toDateString();
              },
            },
            svg: {
              filename: "sm-relatorio",
            },
            png: {
              filename: "sm-relatorio",
            },
          },
          autoSelected: "zoom",
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: ["Concluido", "Em aberto"],
        labels: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
          },
        },
      ],
    },
  });

  const { series, options } = chart;
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
          <Paper>
            <Typography align="center" variant="h6">
              Potencial de vendas (Alunos)
            </Typography>
            <ReactApexChart series={series} options={options} type="bar" />
          </Paper>
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
