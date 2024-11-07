const container = document.querySelector(".column")

for(let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.textContent = `Div ${i+1}`;

    div.style.backgroundColor = 'lightblue';
    div.style.margin = '5px';
    div.style.padding = '5px';
    // div.style.textAlign = 'center'
    // div.style.display = ''

    container.appendChild(div)
}