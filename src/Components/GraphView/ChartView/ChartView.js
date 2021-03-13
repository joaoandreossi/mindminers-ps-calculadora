import { useState, useRef, useEffect } from 'react'
import Chart from 'chart.js'
import ArrowDown from '../../FormView/InputDropdown/Icons/expand.svg'
import ArrowUp from '../../FormView/InputDropdown/Icons/collapse.svg'
import './ChartView.css'

function ChartView(props){   
    const [icon, setIcon] = useState(ArrowDown)
    const [currentYear, setCurrentYear] = useState(() => {
        let sortedYears = Object.keys(props.values).sort((a,b) => b-a)
        return sortedYears[0]
    })
    const [chart, setChart] = useState(undefined)
    const canvas = useRef(null)



    const init = () => {
        setChart(initChart())
    }

    const getAspectRatioFromScreenSize = () => {
        if(window.innerWidth > window.innerHeight) {
            if(window.innerWidth > 1800){
                return 2.8
            } else if(window.innerWidth > 1100) {
                return 2.5
            } else {
                return 2
            }
        } else {
            if(window.innerWidth > 475){
                return 1.2
            } else {
                return 0.9
            }
        }
    }

    const handleMenuRender = () => {
        let menuOptions = []
        let keys = Object.keys(props.values).sort((a,b) => b-a)
        keys.forEach(year => {
            menuOptions.push(<div className='chart__menu-options' key={year}>{year}</div>)
        })
        return menuOptions
    }

    const initChart = () => {
        let chartInit = new Chart(canvas.current.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
                datasets: [{
                    backgroundColor: 'rgba(205, 205, 205, 1)',
                    borderColor: 'rgba(77, 77, 77, 1)',
                    borderWidth: 2,
                    data: props.values[currentYear],
                    fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: getAspectRatioFromScreenSize(),
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem){
                            return `R$ ${tooltipItem.yLabel.toFixed(2)}`
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
        return chartInit
    }

    const toggleDropdown = () => {
        if(icon === ArrowDown) {
            setIcon(ArrowUp)
        } else {
            setIcon(ArrowDown)
        }
    }

    const updateChart = () => {
        chart.data.datasets[0].data = props.values[currentYear]
        chart.update()
    }

    useEffect(() => {
        init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(chart !== undefined) {
            updateChart()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentYear])



    return(
        <div className='chart'>
            <div className='chart__text-container'>
                <div className='chart__name'>{props.name}</div>
                <div className='chart__menu-dropdown' onClick={toggleDropdown}>
                    <div className='chart__menu-button-container'>
                        <img src={icon} className='chart__menu-icon' alt='Expande menu dropdown' data-id='dropdown-icon'/>
                        <button className='chart__menu-text'>ano: {currentYear}</button>
                    </div>
                    {icon === ArrowUp &&
                        <div className='chart__menu-options-container' onClick={(e) => setCurrentYear(e.target.innerHTML)}>
                            {handleMenuRender()}
                        </div>
                    }
                </div>
            </div>
            <canvas id='canvas' ref={canvas}></canvas>
        </div>
    )
}

export default ChartView