import React, { useState } from "react";
import Square from "./Square";
const Board=function(){
    const [state,setstate]=useState(Array(9).fill(null));
    const [xturn,setxturn]=useState(false);
    const checkwinner=function(){
        const winnerlog=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i of winnerlog){
            const [a,b,c]=i;
            if(state[a]!=null&&state[a]==state[b] && state[b]==state[c] && state[c]==state[a]){
                return state[a];
            }
            
        }
        
        for(let i of state){
            if(i==null){
                return false
            }
        }
        return "NOBODY ";

    }
    function playagain(){
        const copyst=[...state];
        copyst.fill(null);
        setstate(copyst)
        setxturn(false);
    }   
    function handleclick(index){
        if(state[index]!=null){
            return;
        }
        const copyst=[...state];
        if(xturn){
            copyst[index]="X";
        }
        else{
            copyst[index]="O"
        }
        setstate(copyst);
        setxturn(!xturn);

    }
    const winner=checkwinner();
    return(
    <div className="board">
        {winner ?<h3>{winner} WON THE GAME <button onClick={playagain}>PLAY AGAIN</button></h3>:
        <>
        <h3>Player {xturn?"X":"O"} TURNS</h3>
        <div className="board-row">
            <Square onClick={()=>{handleclick(0)}} value={state[0]}/>
            <Square onClick={()=>{handleclick(1)}} value={state[1]}/>
            <Square onClick={()=>{handleclick(2)}} value={state[2]}/>
        </div>
        <div className="board-row">
        <Square onClick={()=>{handleclick(3)}} value={state[3]}/>
        <Square onClick={()=>{handleclick(4)}} value={state[4]}/>
        <Square onClick={()=>{handleclick(5)}} value={state[5]}/>
        </div>
        <div className="board-row">
        <Square onClick={()=>{handleclick(6)}} value={state[6]}/>
        <Square  onClick={()=>{handleclick(7)}} value={state[7]}/>
        <Square onClick={()=>{handleclick(8)}} value={state[8]}/>
        </div>
        </>
        }
    </div>
    
    )

}
export default Board