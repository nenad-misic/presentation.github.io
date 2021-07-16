function shuffle_array(array) {
    // Function shuffles (randomize) elements of an provided array.
    return array.sort(() => Math.random() - 0.5);
}


function create_pairs(trees, names) {
    // Function create pairs of person name and accompanying tree name.
    
    
    // Shuffle arrays.
    shuffled_names = shuffle_array(names);
    shuffled_trees = shuffle_array(trees);

    // Create pairs.
    smaller_arr_size = Math.min(shuffled_names.length, shuffled_trees.length)

    pairs = [];
    for (var i=0; i < smaller_arr_size; i++) {
        pairs.push(
            {name: shuffled_names[i], tree: shuffled_trees[i]}
        );
    }

    return pairs;
    
}

pairs = create_pairs(trees, names);
		


lista1 = pairs.slice(0,33);
lista2 = pairs.slice(33,66);
lista3 = pairs.slice(66,100);


for (let i of lista1) {
    document.getElementById('col1').innerHTML += `
        <div class="d-flex justify-content-between row text-center p">
            <div class="col-6">
                ${i.name}
            </div>
            <div class="col-6">
            </div>
        </div>
    
    `
}
for (let i of lista2) {
    document.getElementById('col2').innerHTML += `
        <div class="d-flex justify-content-between row text-center p">
            <div class="col-6">
                ${i.name}
            </div>
            <div class="col-6">
            </div>
        </div>
    
    `
}
for (let i of lista3) {
    document.getElementById('col3').innerHTML += `
        <div class="d-flex justify-content-between row text-center p">
            <div class="col-6">
                ${i.name}
            </div>
            <div class="col-6">
            </div>
        </div>
    
    `
}

var cnt = 1;
setInterval(() => { 
    let current = cnt % 5 + 1;
    document.getElementById('fss').setAttribute('src', `tree 00${current}.png`)
    cnt += 1;
}, 150)


document.getElementById('fcs').focus()


for (let i of lista1) {
    document.getElementById('prodcol1').innerHTML += `
        <div class="d-flex justify-content-between row text-center p">
            <div class="col-6">
                ${i.name}
            </div>
            <div class="col-6">
                ${i.tree}
            </div>
        </div>
    
    `
}
for (let i of lista2) {
    document.getElementById('prodcol2').innerHTML += `
        <div class="d-flex justify-content-between row text-center p">
            <div class="col-6">
                ${i.name}
            </div>
            <div class="col-6">
                ${i.tree}
            </div>
        </div>
    
    `
}
for (let i of lista3) {
    document.getElementById('prodcol3').innerHTML += `
        <div class="d-flex justify-content-between row text-center p">
            <div class="col-6">
                ${i.name}
            </div>
            <div class="col-6">
                ${i.tree}
            </div>
        </div>
    
    `
}


var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pairs));
var dlAnchorElem = document.getElementById('downloadAnchorElem');
dlAnchorElem.setAttribute("href",     dataStr     );
dlAnchorElem.setAttribute("download", "result.json");
dlAnchorElem.click();

document.querySelector('body').addEventListener('click', () => {
    document.getElementById('fcs').focus()
})