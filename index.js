let obj;
let scores = []
const reactionCard = document.getElementById('reaction-card');
const memoryCard = document.getElementById('memory-card');
const verbalCard = document.getElementById('verbal-card');
const visualCard = document.getElementById('visual-card');
const score = document.getElementById('score');
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        obj = data;
    })
    .then(() => {
        reactionCard.children[0].children[0].src = obj[0].icon
        reactionCard.children[0].children[1].innerHTML = obj[0].category
        scores.push(obj[0].score)
        reactionCard.children[1].children[0].innerHTML = obj[0].score

        memoryCard.children[0].children[0].src = obj[1].icon
        memoryCard.children[0].children[1].innerHTML = obj[1].category
        scores.push(obj[1].score)
        memoryCard.children[1].children[0].innerHTML = obj[1].score

        verbalCard.children[0].children[0].src = obj[2].icon
        verbalCard.children[0].children[1].innerHTML = obj[2].category
        scores.push(obj[2].score)
        verbalCard.children[1].children[0].innerHTML = obj[2].score

        visualCard.children[0].children[0].src = obj[3].icon
        visualCard.children[0].children[1].innerHTML = obj[3].category
        scores.push(obj[3].score)
        visualCard.children[1].children[0].innerHTML = obj[3].score

        const average = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        score.innerHTML = average

    });