const data = [{
    title:'7:25',
    image:'air1.png',
    description: 'Boston'
},
{
    title:'8:15',
    image:'air2.png',
    description: 'Madrid'
},
{
    title:'Translate',
    image:'translate.png',
    description: 'Boston'
},
{
    title:'Bike',
    image:'bike1.png',
    description: '13.1 miles'
}, 
{
    title:'Boat',
    image:'boat1.png',
    description: '90 minutes'
},
{
    title:'Drive',
    image:'car1.png',
    description: '48 miles'
},
{
    title:'Morning',
    image:'coffee.png',
    description: 'Coffee'
},
{
    title:'Afternoon',
    image:'gym.png',
    description: 'Gym'
},
{
    title:'Night',
    image:'hot.png',
    description: 'Hot tub'
}
]



let container = document.createElement('div')
container.classList.add('container')

const renderBlock =()=>{
    let fragment = new DocumentFragment();
    data.map((el,id) => {
        console.log(el);
        let block = document.createElement('div');
        block.className ='item';
        block.setAttribute('block-color',id+1);
        block.innerHTML = `<div style="text-align:center;">${el.title}</div>
        <img width="130px" height="100px" src="${el.image}" alt="">
        <h1 class="text">${el.description}</h1>`

        fragment.append(block)
    })
    return fragment
}
document.body.append(container);
container.append(renderBlock())

