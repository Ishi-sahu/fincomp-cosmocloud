const ctxIncome = document.getElementById('incomeChartCanvas').getContext('2d');
const incomeChart = new Chart(ctxIncome, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Income',
            data: [1200, 1500, 1300, 1700, 1600],
            backgroundColor: 'rgba(41, 128, 185, 0.7)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxExpense = document.getElementById('expenseChartCanvas').getContext('2d');
const expenseChart = new Chart(ctxExpense, {
    type: 'pie',
    data: {
        labels: ['Housing', 'Food', 'Transport', 'Entertainment'],
        datasets: [{
            label: 'Expenses',
            data: [800, 500, 300, 400],
            backgroundColor: [
                'rgba(231, 76, 60, 0.7)',
                'rgba(52, 152, 219, 0.7)',
                'rgba(46, 204, 113, 0.7)',
                'rgba(241, 196, 15, 0.7)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});
