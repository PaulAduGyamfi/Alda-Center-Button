

let build;

build = {
    text: "Alda Kavli Learning Center",
    link: "https://www.stonybrook.edu/admissions/",
}


document.querySelector(".button-slant").onclick = () =>{
    window.location= build.link;
}


document.querySelector(".text").innerHTML = build.text;

