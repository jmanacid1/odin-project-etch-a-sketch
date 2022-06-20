//create 16 divs
//make 16 divs using JS inside an html container div
//make function that creates a new grid of divs
    //function(number of divs, space)
        //space / number of divs = space for each div
        //for number of divs, create div with dimensions above inside container
const container = document.getElementById('container') 
function createGrid(numDivs,gridSize){
    const divSize = gridSize / numDivs
    console.log(divSize)
    for(let i=0; i<numDivs;i++){
        const div = document.createElement('div')
        div.innerHTML = 'test'
        container.appendChild(div)
            
        }
    }
    

createGrid(10,100)
