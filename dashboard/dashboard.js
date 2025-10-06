const sidebar = document.getElementById('sidebar');
function openSidebar() {
    sidebar.classList.add('sidebar-responsive');
}
function closeSidebar() {
    sidebar.classList.remove('sidebar-responsive');
}
// Datos gráficos
const dataBarChart = {
    series: [{
    data: [18, 15, 12, 10, 8],
    name: 'Problemas Reportados',
}],
    chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
    show: false,
    },
},
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
    plotOptions: {
    bar: {
    distributed: true,
    borderRadius: 4,
    horizontal: false,
    columnWidth: '40%',
    },
},
    dataLabels: {
    enabled: false,
},
    fill: {
    opacity: 1,
},
    grid: {
    borderColor: '#55596e',
    yaxis: {
    lines: {
    show: true,
    },
    },
    xaxis: {
    lines: {
    show: true,
    },
    },
},
    legend: {
    labels: {
    colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
},
    stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
},
    tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
},
    xaxis: {
    categories: ['Correo', 'Conexión', 'Contraseña', 'Virus', 'Software'],
    title: {
    style: {
    color: '#f5f7ff',
    },
    },
    axisBorder: {
    show: true,
    color: '#55596e',
    },
    axisTicks: {
    show: true,
    color: '#55596e',
    },
    labels: {
    style: {
    colors: '#f5f7ff',
    },
    },
},
    yaxis: {
    title: {
    text: 'Cantidad de Casos',
    style: {
    color: '#f5f7ff',
    },
    },
    axisBorder: {
    color: '#55596e',
    show: true,
    },
    axisTicks: {
    color: '#55596e',
    show: true,
    },
    labels: {
    style: {
    colors: '#f5f7ff',
    },
    },
},
};

const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    dataBarChart
);
barChart.render();

const areaChartOptions = {
    series: [{
    name: 'Tickets recibidos',
    data: [31, 40, 28, 51, 42, 109, 100],
}, {
    name: 'Tickets resueltos',
    data: [11, 32, 45, 32, 34, 52, 41],
}],
    chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
    show: false,
    },
},
    colors: ['#00ab57', '#d50000'],
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
    dataLabels: {
    enabled: false,
},
    fill: {
    gradient: {
    opacityFrom: 0.4,
    opacityTo: 0.1,
    shadeIntensity: 1,
    stops: [0, 100],
    type: 'vertical',
    },
    type: 'gradient',
},
    grid: {
    borderColor: '#55596e',
    yaxis: {
    lines: {
    show: true,
    },
    },
    xaxis: {
    lines: {
    show: true,
    },
    },
},
    legend: {
    labels: {
    colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
},
    markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
},
    stroke: {
    curve: 'smooth',
},
    xaxis: {
    axisBorder: {
    color: '#55596e',
    show: true,
    },
    axisTicks: {
    color: '#55596e',
    show: true,
    },
    labels: {
    offsetY: 5,
    style: {
        colors: '#f5f7ff',
    },
    },
},
    yaxis: [{
    title: {
    text: 'Tickets Recibidos',
    style: {
    color: '#f5f7ff',
    },
    },
    labels: {
    style: {
        colors: ['#f5f7ff'],
},
    },
    }, {
    opposite: true,
    title: {
    text: 'Tickets Resueltos',
    style: {
        color: '#f5f7ff',
    },
    },
    labels: {
    style: {
    colors: ['#f5f7ff'],
},
    },
    }],
    tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
    },
};
const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
);
areaChart.render();
