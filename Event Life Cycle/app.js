let grandParent = document.getElementById('grandparent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');

grandParent.addEventListener('click' , () => {
    console.log('grandfather clicked');
} , true)

parent.addEventListener('click' , () => {
    console.log('parent clicked');
})

child.addEventListener('click' , () => {
    console.log('child clicked');
})

//Note : false -> callback fn will run in bubbling phase , true -> callback fn will run in capturing phase.
