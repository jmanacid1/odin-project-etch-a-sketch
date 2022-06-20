//create 16 divs
//make 16 divs using JS inside an html container div
//make function that creates a new grid of divs
    //function(number of divs, space)
        //space / number of divs = space for each div
        //for number of divs, create div with dimensions above inside container
const container = document.getElementById('container') 
function createGrid(numDivs){
    const divSize = 100 / numDivs
    console.log(divSize)
    for(let i=0; i<(numDivs * numDivs);i++){
        const div = document.createElement('div')
        div.style.width = `${divSize}%`
        div.style.height = `auto`
        div.id = i+1;
        div.classList.add('pixel')
        container.appendChild(div)  
        }
        document.querySelectorAll('.pixel').forEach(item =>{
            item.addEventListener('mouseover',function(e){
                e.target.style.backgroundColor = 'blue';
            })
        });
    }  
function removeGrid(){
    document.querySelectorAll('.pixel').forEach(item => {
        item.remove();
    });
}  
createGrid(32)
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function(e){
    console.log(e);
    let newGrid = prompt("How many pixels would you like?","16")
    if (+newGrid > 100){
        newGrid = 100;
    }
    removeGrid();
    createGrid(+newGrid);
})
