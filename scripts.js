document.addEventListener('DOMContentLoaded', function () {
    // Attendance Chart
    const ctx1 = document.getElementById('attendanceChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Offline',
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    data: [50, 60, 70, 80, 90, 100]
                },
                {
                    label: 'Online',
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    data: [30, 40, 50, 60, 70, 80]
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Overall Participation Chart
    const ctx2 = document.getElementById('participationChart').getContext('2d');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
            datasets: [
                {
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ],
                    data: [30, 25, 20, 20, 5]
                }
            ]
        },
        options: {
            responsive: true
        }
    });

    // Extra Co-curricular Activities Chart
    const ctx3 = document.getElementById('activitiesChart').getContext('2d');
    new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Literature', 'Drama', 'Sports', 'Dance', 'Singing'],
            datasets: [
                {
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ],
                    data: [5, 20, 30, 20, 25]
                }
            ]
        },
        options: {
            responsive: true
        }
    });

    // Courses Chart
    const ctx4 = document.getElementById('coursesChart').getContext('2d');
    new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6'],
            datasets: [
                {
                    label: 'Completion',
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    data: [30, 40, 15, 95, 60, 20]
                }
            ]
        },
        options: {
            responsive: true,
            indexAxis: 'y', // This makes the bars horizontal
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    barThickness: 30, // Increase the thickness of the bars
                    maxBarThickness: 30 // Max thickness
                }
            }
        }
    });
});