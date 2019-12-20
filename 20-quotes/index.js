var database = [
    {
        image: "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzEwXFxcLzE5MTY0ODAzXFxcL3RoZS1qb2tlci5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yNjRhMmRiZTM3MGYyYzY3NWZjZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIyYTA3MjdkNDcwMzQ1MDJkMjIwYTU0NzAyZTM1ZGNlNDJlMDEyM2QyIn0=/the-joker.jpg",
        quote: "Madness, as you know, is a lot like gravity. All it takes, is a little push",
        source: "-Joker"
    },
    {
        image: "https://spacequotations.com/wp-content/uploads/2018/09/darth-vader-810x473.jpg",
        quote: "I find your lack of faith - disturbing",
        source: "-Darth Vader"
    },
    {
        image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1125,w_2000,x_0,y_246/f_auto,q_auto,w_1100/v1554930778/shape/mentalfloss/62427-paramount.jpg",
        quote: "I'm going to make him an offer he can't refuse",
        source: "-Marlon Brando"
    },
    {
        image: "https://medias.spotern.com/wanted/w640/39/39790-1537273719.jpg",
        quote: "You're gonna need a bigger boat",
        source: "-Martin Brody"
    },
    {
        image: "https://i.ytimg.com/vi/zOzeuHWQ5YQ/maxresdefault.jpg",
        quote: "Ye best start believin' in ghost stories, Miss Turner. Yer in one!",
        source: "-Barbossa"
    },
    {
        image: "https://cdn3-www.comingsoon.net/assets/uploads/2016/07/terminator.jpg",
        quote: "I'll be back",
        source: "-Terminator"
    },
    {
        image: "https://cdn.newsapi.com.au/image/v1/8cfdc52d0a7d0645ec345184d6a2554d",
        quote: "You talking to me?",
        source: "-The Taxi Driver"
    }
]

var mainHTML = document.querySelector(".main")
var quoteHTML = document.querySelector(".quote")
var sourceHTML = document.querySelector(".source")
var buttonHTML = document.querySelector(".button")

function generateImage() {
    var randomNumber = Math.floor(Math.random() * database.length)
    var randomObject = database[randomNumber]
    quoteHTML.innerHTML = `"${randomObject.quote}"`
    sourceHTML.innerHTML = `-${randomObject.source}`
    mainHTML.style.backgroundImage = `url(${randomObject.image})`
}

generateImage()

buttonHTML.addEventListener("click", generateImage)
