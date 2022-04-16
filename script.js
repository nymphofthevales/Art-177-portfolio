

let assignments = [
    {
        title: "The Horopter",
        date: "January 12",
        image: "assets/1.png",
        target: "./horopter.html"
    },
    {
        title: "Möbius Strip",
        date: "January 17",
        image: "assets/2.png",
        target: "./mobius.html"
    },
    {
        title: "Cast Faces",
        date: "January 19",
        image: "assets/3.png",
        target: "./faces.html"
    },
    {
        title: "Knots",
        date: "January 24",
        image: "assets/4.png",
        target: "./knots.html"
    },
    {
        title: "Done and Undone",
        date: "January 26",
        image: "assets/5.png",
        target: "./undone.html"
    },
    {
        title: "Unconscious Marks",
        date: "February 7",
        image: "assets/6.png",
        target: "./marks.html"
    },
    {
        title: "Larp (Knight)",
        date: "February 9",
        image: "assets/7.png",
        target: "./larp.html"
    },
    {
        title: "Advanced Microscopy",
        date: "February 16",
        image: "assets/8.png",
        target: "microscopy.html"
    },
    {
        title: "Bubble Matrices",
        date: "February 28",
        image: "assets/9.png",
        target: "bubble.html"
    },
    {
        title: "Japanese Wood Joinery",
        date: "March 2",
        image: "assets/10.png",
        target: "joinery.html"
    },
    {
        title: "Suit of Armour",
        date: "March 9",
        image: "assets/12.png",
        target: "armour.html"
    },
    {
        title: "Perspective + Proportion",
        date: "March 16",
        image: "assets/13.png",
        target: "perspective.html"
    },
    {
        title: "Manifolds in Drapery",
        date: "March 21",
        image: "assets/14.png",
        target: "drapery.html"
    },
    {
        title: "Magic Lessons",
        date: "March 23",
        image: "assets/15.png",
        target: "magic.html"
    },
    {
        title: "Branching Patterns",
        date: "April 4",
        image: "assets/16.png",
        target: "branching.html"
    },
    {
        title: "Waves",
        date: "April 6",
        image: "assets/17.png",
        target: "waves.html"
    },
]

let projects = [
    {
        title: "Sounds and Signs",
        subtitle: "The Score",
        image: "./assets/score-cover.png",
        target: "./score.html"
    },
    {
        title: "The Lightness of Stone",
        subtitle: "Flow Visualization",
        image: "./assets/stone-cover.png",
        target: "./stone.html"
    },
    {
        title: "Architectural Shadow Wrapping",
        subtitle: "Incident Light",
        image: "./assets/light-cover.png",
        target: "./light.html"
    },
    {
        title: "Branching Storylines",
        subtitle: "Data Visualization Infographic",
        image: "./assets/branching-cover.png",
        target: "./infographic.html"
    },
    {
        title: "Deconstruction",
        subtitle: "Take Apart",
        image: "./assets/apart-cover.png",
        target: "./deconstruction.html"
    },
    {
        title: "Botanical Illustration",
        subtitle: "Garry Oak Meadow",
        image: "./assets/botanical-cover.png",
        target: "./botanical.html"
    },
    {
        title: "Dimensional Folding",
        subtitle: "Meta",
        image: "./assets/meta-cover.png",
        target: "./meta.html"
    },
]


function populatePreviews() {
    for (let i=0; i< assignments.length; i++) {
        let title = assignments[i].title
        let date = assignments[i].date
        let imageURL = assignments[i].image
        let target = assignments[i].target
        let previewHTML = getAssignmentHTML(title, date, imageURL, target)
        document.getElementById("assignments").innerHTML += previewHTML
    }
    for (let i=0; i< projects.length; i++) {
        let title = projects[i].title
        let subtitle = projects[i].subtitle
        let imageURL = projects[i].image
        let target = projects[i].target
        let previewHTML = getProjectHTML( title, subtitle, imageURL, target)
        document.getElementById("projects").innerHTML += previewHTML
    }
}

function getAssignmentHTML(title, date, imageURL, target) {

    let html = `<a class="assignment" href="${target}">`
    html += `<img class="assignment-image" src="${imageURL}">`
    html += `<h2 class="assignment-title">${title}</h2>`
    html += `<h3 class="assignment-date">${date}</h3>`
    return html + `</a>`
}

function  getProjectHTML(title, date, imageURL, target) {
    let html = `<a class="project" href="${target}">`
    html += `<div class="project-title-field">`
    html += `<h2 class="project-title">${title}</h2>`
    html += `<h3 class="project-subtitle">${date}</h3>`
    html += `</div>`
    html += `<img class="project-image" src="${imageURL}">`
    return html + `</a>`
}
populatePreviews()