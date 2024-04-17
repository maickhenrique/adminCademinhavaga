import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MeuGrafico = () => {
    // Definição das opções do gráfico
    const options = {
        chart: {
            height: 350,
            type: 'radar',
        },
        // Outras opções do gráfico...
    };

    // Dados do gráfico
    const series = [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }];

    return (
        <ReactApexChart options={options} series={series} type="radar" height={350} />
    );
}

export default MeuGrafico;
