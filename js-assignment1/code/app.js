const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'
const card = document.querySelectorAll('.card-row')




const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: 'green'
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: 'black'
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: 'brown'
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: 'greenblue'
    },
    {
        topic: 'Food',
        title: 'One Month  Detox',
        price: '$0.99',
        color: 'pink'
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: 'blue'
    }
]


const generateColor = () => {
    data.forEach((info, i) => {
        card[i].style.backgroundColor = `${info.color}`
    })
}




data.forEach((info, i) => {  
    card[i].innerHTML += `
    <span>${info.topic}</span>
    <h2>${info.title}</h2>
    <button> Read for ${info.price}</button>
    `   
    generateColor()
})


