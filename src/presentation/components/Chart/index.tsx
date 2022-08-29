import { Paper, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

interface SerieProps {
  name: string;
  data: number[];
}

type Props = {
  series: SerieProps[];
};

const chart = {
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
        breakpoint: 900,
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
};

const DashboardChart = ({ series }: Props) => {
  const { options } = chart;

  return (
    <Paper>
      <Typography align="center" variant="h6">
        Potencial de vendas (Alunos)
      </Typography>
      <ReactApexChart series={series} options={options} type="bar" />
    </Paper>
  );
};

export default DashboardChart;
