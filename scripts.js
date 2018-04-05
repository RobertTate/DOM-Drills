

document.addEventListener("DOMContentLoaded", function () {

    let div1 = document.createElement("div");
    div1.className = "header-container";

    let h1 = document.createElement("h1");
    h1.className = "h1";
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);
    div1.appendChild(h1);

    let h2 = document.createElement("h2");
    h2.className = "h2";
    let h2Text = document.createTextNode("This is an h2");
    h2.appendChild(h2Text);
    div1.appendChild(h2);

    let h3 = document.createElement("h3");
    h3.className = "h3";
    let h3Text = document.createTextNode("This is an h3");
    h3.appendChild(h3Text);
    div1.appendChild(h3);

    let h4 = document.createElement("h4");
    h4.className = "h4";
    let h4Text = document.createTextNode("This is an h4");
    h4.appendChild(h4Text);
    div1.appendChild(h4);

    let h5 = document.createElement("h5");
    h5.className = "h5";
    let h5Text = document.createTextNode("This is an h5");
    h5.appendChild(h5Text);
    div1.appendChild(h5);

    let h6 = document.createElement("h6");
    h6.className = "h6";
    let h6Text = document.createTextNode("This is an h6");
    h6.appendChild(h6Text);
    div1.appendChild(h6);

    document.body.appendChild(div1);

    let colors = ["blue", "red", "green", "yellow", "purple", "orange", "pink", "aquamarine"];

    h1.addEventListener('dblclick', function () {
        let randomColor = Math.floor(Math.random() * colors.length);
        h1.style.color = colors[randomColor];
    });

    h2.addEventListener('dblclick', function () {
        let randomColor = Math.floor(Math.random() * colors.length);
        h2.style.color = colors[randomColor];

    });

    h3.addEventListener('dblclick', function () {
        let randomColor = Math.floor(Math.random() * colors.length);
        h3.style.color = colors[randomColor];
    });

    h4.addEventListener('dblclick', function () {
        let randomColor = Math.floor(Math.random() * colors.length);
        h4.style.color = colors[randomColor];
    });

    h5.addEventListener('dblclick', function () {
        let randomColor = Math.floor(Math.random() * colors.length);
        h5.style.color = colors[randomColor];
    });

    h6.addEventListener('dblclick', function () {
        let randomColor = Math.floor(Math.random() * colors.length);
        h6.style.color = colors[randomColor];
    });

    let button = document.getElementsByTagName('button')[0];
    let liItem = 0;



    button.addEventListener('click', function () {
        let li = document.createElement('li');
        let liText = document.createTextNode(`This is list item ${liItem}`);
        li.appendChild(liText);
        document.body.appendChild(li);
        liItem++;
        li.addEventListener('click', function () {
            let randomColor = Math.floor(Math.random() * colors.length);
            li.style.color = colors[randomColor];
            li.addEventListener('dblclick', function () {
                this.remove();
            })

        });

    });

});
