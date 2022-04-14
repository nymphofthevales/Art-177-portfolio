

let assignments = [
    {
        title: "The Horopter",
        date: "January 12",
        image: "",
        target: ""
    },
    {
        title: "Möbius Strip",
        date: "January 17",
        image: "",
        target: ""
    },
    {
        title: "Cast Faces",
        date: "January 19",
        image: "",
        target: ""
    },
    {
        title: "Knots",
        date: "January 24",
        image: "",
        target: ""
    },
    {
        title: "Done and Undone",
        date: "January 26",
        image: "",
        target: ""
    },
    {
        title: "Unconscious Marks",
        date: "February 7",
        image: "",
        target: ""
    },
    {
        title: "Larp (Knight)",
        date: "February 9",
        image: "",
        target: ""
    },
    {
        title: "Advanced Microscopy",
        date: "February 16",
        image: "",
        target: ""
    },
    {
        title: "Bubble Matrices",
        date: "February 28",
        image: "",
        target: ""
    },
    {
        title: "Japanese Wood Joinery",
        date: "March 2",
        image: "",
        target: ""
    },
    {
        title: "Drawing From Memory",
        date: "March 7",
        image: "",
        target: ""
    },
    {
        title: "Suit of Armour",
        date: "March 9",
        image: "",
        target: ""
    },
    {
        title: "Perspective + Proportion",
        date: "March 16",
        image: "",
        target: ""
    },
    {
        title: "Manifolds in Drapery",
        date: "March 21",
        image: "",
        target: ""
    },
    {
        title: "Magic Lessons",
        date: "March 23",
        image: "",
        target: ""
    },
    {
        title: "Branching Patterns",
        date: "April 4",
        image: "",
        target: ""
    },
    {
        title: "Waves",
        date: "April 6",
        image: "",
        target: ""
    },
]

let projects = [
    {
        title: "Sounds and Signs",
        subtitle: "The Score",
        image: "",
        target: ""
    },
    {
        title: "The Lightness of Stone",
        subtitle: "Flow Visualization",
        image: "",
        target: ""
    },
    {
        title: "Architectural Shadow Wrapping",
        subtitle: "Incident Light",
        image: "",
        target: ""
    },
    {
        title: "Branching Storylines",
        subtitle: "Data Visualization Infographic",
        image: "",
        target: ""
    },
    {
        title: "Deconstruction",
        subtitle: "Take Apart",
        image: "",
        target: ""
    },
    {
        title: "Botanical Illustration",
        subtitle: "Garry Oak Meadow",
        image: "",
        target: ""
    },
    {
        title: "Dimensional Folding",
        subtitle: "Meta",
        image: "",
        target: ""
    },
]


function populatePreviews() {
    for (let i=0; i< assignments.length; i++) {
        let title = assignments[i].title
        let date = assignments[i].date
        let imageURL = assignments[i].image
        let target = assignments[i].target
        let previewHTML = getPreviewHTML('assignment',title, date, imageURL, target)
        document.getElementById("assignments").innerHTML += previewHTML
    }
    for (let i=0; i< projects.length; i++) {
        let title = projects[i].title
        let subtitle = projects[i].subtitle
        let imageURL = projects[i].image
        let target = projects[i].target
        let previewHTML = getPreviewHTML('project', title, subtitle, imageURL, target)
        document.getElementById("projects").innerHTML += previewHTML
    }
}

function getPreviewHTML(type, title, subtitle, imageURL, target) {
    let html = `<a class="${type}" href="${target}">`
    html += `<img class="${type}-image" src="${imageURL}">`
    html += `<h2 class="${type}-title">${title}</h2>`
    let subtype = ""
    if (type === "project") {
        subtype = "subtitle"
    } else {
        subtype = "date"
    }
    html += `<h3 class="${type}-${subtype}">${subtitle}</h3>`
    return html + `</a>`
}
populatePreviews()