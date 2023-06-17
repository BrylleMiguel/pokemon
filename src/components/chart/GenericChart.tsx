import ReactApexChart from "react-apexcharts"

export default function GenericChart({ labels, series, type }: { labels: any, series: any, type: any }) {
    const chart = {
        series: series,
        options: {
            colors: ['#E53935', '#FDD835', '#7CB342', '#039BE5', '#8E24AA', '#FF7043'],
            labels: labels,
            chart: { type }, responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    },
                },
            }],
        },
    }

    return <ReactApexChart series={series} options={chart.options} type={type} width={350} />
}