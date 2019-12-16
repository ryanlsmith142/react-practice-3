function generateLikeCount() {
    return Math.floor((Math.random() * 50) + 15);
}



const animals = [{
    id: 1,
    name: "Ava",
    type: "Dog",
    votes: generateLikeCount()
}, {
    id: 2,
    name: "Millie",
    type: "Dog",
    votes: generateLikeCount()
}
];


export default animals;
