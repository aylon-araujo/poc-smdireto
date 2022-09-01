import { Paper, Typography } from '@mui/material';
// eslint-disable-next-line import/default
import ReactApexChart from 'react-apexcharts';

interface SerieProps {
  name: string;
  data: number[];
}

type Props = {
  series: SerieProps[];
};

const fileName = 'sm-direto';

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
            filename: fileName,
            columnDelimiter: ';',
            headerCategory: 'category',
            headerValue: 'value',
          },
          svg: {
            filename: fileName,
          },
          png: {
            filename: fileName,
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
      colors: ['#fff'],
    },
    xaxis: {
      categories: ['Concluido', 'Em aberto'],
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

// eslint-disable-next-line react/prop-types
const DashboardChart: React.FC<Props> = ({ series }) => {
  const { options } = chart;

  return (
    <Paper>
      <Typography align="center" variant="h6" style={{ paddingTop: '1rem' }}>
        Potencial de vendas (Alunos)
      </Typography>
      <ReactApexChart series={series} options={options} type="bar" />
    </Paper>
  );
};

export default DashboardChart;
