import React, { useState } from 'react'
import './TecTacToe.css'
const TecTacToe = () => {
    const [board,setBoard] = useState(Array(9).fill(''));
    const [move,setMove] = useState("X");
    const clicked = (n)=>{
        let square = [...board];
        if (board[n]!=="") {
            alert("Not Empty...")
            return
        }
        square[n] = move;
        setBoard(square);
        if (move==="X") {
            setMove("O");
        }else{
            setMove("X");
        }
        if (checkWins(square)) {
            alert("You Are Winner...")
            square.fill("");
            setBoard(square)
        }
    }
    const checkWins = (board)=>{
        let Conditon = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        let flags = false;
        Conditon.forEach((e)=>{
            if (board[e[0]]!=="" && board[e[1]]!=="" && board[e[2]]!=="") {
                if (board[e[0]]===board[e[1]] && board[e[1]] === board[e[2]]) {
                    flags = true;
                }
            }
        })
        return flags
    }
  return (
    <>
      <h1 className="text-center text-white">TIC TAC TOE</h1>
      <table>
        <tbody>
            <tr>
                <td onClick={()=>clicked(0)}>{board[0]}</td>
                <td  onClick={()=>clicked(1)}>{board[1]}</td>
                <td  onClick={()=>clicked(2)}>{board[2]}</td>
            </tr>
            <tr>
                <td  onClick={()=>clicked(3)}>{board[3]}</td>
                <td  onClick={()=>clicked(4)}>{board[4]}</td>
                <td  onClick={()=>clicked(5)}>{board[5]}</td>
            </tr>
            <tr>
                <td  onClick={()=>clicked(6)}>{board[6]}</td>
                <td  onClick={()=>clicked(7)}>{board[7]}</td>
                <td  onClick={()=>clicked(8)}>{board[8]}</td>
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default TecTacToe
