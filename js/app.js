document.querySelectorAll('.sidebar-submenu').forEach(e => {
    e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault()
        e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active')

        let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length

        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
    }
})

let skills_options = {
    series: [44, 55, 41, 17, 26],
    labels: ['Maths', 'Science', 'Biology', 'History','Art'],
    chart: {
        type: 'donut',
    },
    colors: ['#6ab04c', '#2980b9', '#f39c12', '#d35400', '#800080']
}

let skills_chart = new ApexCharts(document.querySelector("#skills-chart"), skills_options)
skills_chart.render()

var options = {
    series: [69,21],
    labels: ['Completed', 'Uncompleted'],
    chart: {
    type: 'donut',},
    colors: ['#9400D3', '#A9A9A9']
  ,
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#goals-chart"), options);
  chart.render();


let time_options = {
    series: [{
        name: "This week",
        data: ['40', '70', '20', '90', '36', '80', '30', '91', '60']
    },{
        name: "Previous Week",
        data: [20, 30, 10, 20, 16, 40, 20, 51, 10]
    }],
    colors: ['#6ab04c', '#2980b9'],
    chart: {
        height: 350,
        type: 'line',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: [1,2,3,4,5,6,7,8,9],
    },
    legend: {
        position: 'top'
    }
}

let time_chart = new ApexCharts(document.querySelector("#time-chart"), time_options)
time_chart.render()

// CHARTS THEME (LIGHT/DARK)
setDarkChart = (dark) => {
    let theme = {
        theme: {
            mode: dark ? 'dark' : 'light'
        }
    }

    time_chart.updateOptions(theme)
    skills_chart.updateOptions(theme)
} 

// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector('#darkmode-toggle')

darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    document.querySelector('body').classList.toggle('dark')
    darkmode_toggle.querySelector('.darkmode-switch').classList.toggle('active')
    setDarkChart(document.querySelector('body').classList.contains('dark'))
}

let overlay = document.querySelector('.overlay')
let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}