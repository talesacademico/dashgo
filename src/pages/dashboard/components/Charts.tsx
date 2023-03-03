import { Box, Text, theme} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Chart = dynamic(()=> import('react-apexcharts'), {ssr:false})
const options = {
  chart:{
    toolbar:{
      show: false
    },
    zoom:{
      enabled: false
    },
    foreColor: theme,
    grid:{show: false},
    dataLabels:{
      enabled: false,
    },
    tooltip:{
      enabled: false
    }, 
    xaxis:{
      type: 'datatime',
      axisBorder:{
        color: theme.colors.gray[600]
      }
    }
  }
}

const series =[
  {name: 'series', data:[31,10,120,18,56,17]}
]

export function Charts() {
  return (
    <>
      <Box p={["6", "8"]} bg="gray.800" borderRadius="8">
        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
        <Chart options={{...options}} type="area" series={series} height="160"/>
      </Box>
    </>
  )
}