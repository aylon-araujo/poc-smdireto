import { Paper, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

interface SerieProps {
  name: string;
  data: number[];
}

type Props = {
  chartTitle: string;
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
          customIcons: [],
        },
        export: {
          csv: {
            filename: "sm-relatorio",
            columnDelimiter: ";",
            headerCategory: "category",
            headerValue: "value",
          },
          svg: {
            filename: "sm-relatorio",
          },
          png: {
            filename: "sm-relatorio",
          },
        },
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

const DashboardChart: React.FC<Props> = ({ series, chartTitle }) => {
  const { options } = chart;

  return (
    <Paper>
      <Typography align="center" variant="h6" style={{ paddingTop: "1rem" }}>
        {chartTitle}
      </Typography>
      <ReactApexChart series={series} options={options} type="bar" />
    </Paper>
  );
};

export default DashboardChart;
