// _() – Main loop
// M(code) – Map currentPiece to updatedPiece using code and merge it with field currentStateOfField into field updatedPlayingFieldState.
//           Return true if piece overlaps with currentStateOfField.

// currentStateOfField – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// updatedPlayingFieldState - Updated state of playing field
// copyOfEmptyField - Copy of empty playing field
// currentPiece – Current piece, format: [x0, y0, x1, y1, …]
// updatedPiece – Updated piece
// lastKeyCode – Last key code pressed (- 38)
// totalScore - Total score
// tallyOfCurrentMove – Tally of current move used to reward clearing multiple lines, keyboard event
// gameOverState – Game over state

M=e=>currentPiece&&(
    h=0,
    updatedPiece=currentPiece.map((v,i)=>(
        E=~i%2,
        x=eval(e[0]),
        E
            ?0
            :updatedPlayingFieldState[h|=x<0|x>9|updatedPlayingFieldState[y]>>x&1|y>17,y]|=1<<x,
        y=x
    ),updatedPlayingFieldState=[...currentStateOfField]),
    h
),
updatedPlayingFieldState=copyOfEmptyField=Array(9),
(onkeydown=_=tallyOfCurrentMove=>(
    tallyOfCurrentMove
        ?(lastKeyCode=tallyOfCurrentMove.which-38)%2-lastKeyCode||M`k?v-!E*k:P[2]-(P[i^1]-P[3])*(E|1)`
            ?M`v`
            :currentPiece=updatedPiece
        :gameOverState||(
            currentPiece=currentPiece||[...'02121303040506161715'.substr(
                new Date%7*2,
                8,
                currentStateOfField=[...copyOfEmptyField,...updatedPlayingFieldState].filter(v=>v^1023||!(totalScore+=++tallyOfCurrentMove)).slice(-18)
            )],
            M`v-E`&&(gameOverState=M`v`,updatedPiece=lastKeyCode=0),
            setTimeout(_,lastKeyCode-2?200:20,0),
            currentPiece=updatedPiece
        ),
    totalScore|=updatedPlayingFieldState.map(v=>{S+=`
`;for(x=10;x--;)Z.innerText=totalScore+='□■'[gameOverState^(v^1023+currentPiece&&v>>x&1)]})
))(totalScore=currentPiece=lastKeyCode=gameOverState=0)
