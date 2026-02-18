const ctx = document.getElementById('barChart').getContext('2d');

const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV'];
const income = [180, 220, 280, 320, 260, 310, 380, 420, 290, 340, 380];
const expense = [140, 190, 500, 260, 200, 270, 310, 350, 240, 280, 310];

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: income,
        backgroundColor: 'rgba(45,212,191,0.55)',
        borderRadius: 6,
        barPercentage: 0.55,
        categoryPercentage: 0.7,
      },
      {
        label: 'Expense',
        data: expense,
        backgroundColor: 'rgba(139,92,246,0.6)',
        borderRadius: 6,
        barPercentage: 0.55,
        categoryPercentage: 0.7,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#22233a',
        titleColor: '#94a3b8',
        bodyColor: '#e2e8f0',
        borderColor: 'rgba(255,255,255,0.06)',
        borderWidth: 1,
        cornerRadius: 10,
        padding: 10,
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#64748b', font: { size: 10, family: 'Manrope' } },
        border: { display: false }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
        ticks: { color: '#64748b', font: { size: 10, family: 'Manrope' }, maxTicksLimit: 5 },
        border: { display: false }
      }
    }
  }
});