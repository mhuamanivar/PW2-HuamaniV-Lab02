// Melsy Melany Huamaní Vargas
// Programación Web 2

function votesCounting(votes) {
    let counting = Array(votes.length).fill(0);
    for(idx in votes) {
        counting[votes[idx]]++;
    }
    let maxVotes = 0;
    let winnerID = 0;
    for(id in counting){
        if(counting[id] > maxVotes){
            maxVotes = counting[id];
            winnerID = id;
        }
    }
    return {id : winnerID, votes : maxVotes};
}

// Probando la función con un arreglo
let votos = [2,3,4,5,6,7,9,9,7,5,6,7,3,2,4,5,7,5,5];
console.log(votesCounting(votos));
