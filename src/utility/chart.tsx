export const chart = {
    options: {
        chart: { type: 'donut' }, responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
    colors: ['#E53935', '#FDD835', '#7CB342', '#039BE5', '#8E24AA', '#FF7043']
}