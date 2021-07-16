import React, {useState} from 'react'
import Icon from "../src/Component/Icon"
//import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import react-reactstrap
import { Button, Container, Card, CardBody, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const tictacArray = new Array(9).fill("")
const App =() =>{
    let [isCross, setIsCross]= useState(true)
    let [winMessage, setWinMessage] = useState("")
    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictacArray.fill("")
    }

    const findWinner=(index)=>{
        if(tictacArray[0] == tictacArray[1] && tictacArray[0] == tictacArray[2] && tictacArray[0]!=""){
            setWinMessage(tictacArray[0] + "has Won")
        }
        else if(tictacArray[3] == tictacArray[4] && tictacArray[3] == tictacArray[5] && tictacArray[3]!=""){
            setWinMessage(tictacArray[3] + "has Won")
        }
        else if(tictacArray[6] == tictacArray[7] && tictacArray[6] == tictacArray[8] && tictacArray[6]!=""){
            setWinMessage(tictacArray[6]+ "has Won")
        }
        else if(tictacArray[0]== tictacArray[3] && tictacArray[0]== tictacArray[6] && tictacArray[0]!=""){
            setWinMessage(tictacArray[0]+ "has Won")
        }
        else if(tictacArray[1]== tictacArray[4] && tictacArray[1] == tictacArray[7] && tictacArray[1]!=""){
            setWinMessage(tictacArray[1]+ "has Won")
        }
        else if(tictacArray[2]== tictacArray[5] && tictacArray[2]== tictacArray[8] && tictacArray[2]!=""){
            setWinMessage(tictacArray[2]+ "has Won")
        }
        else if(tictacArray[0]==tictacArray[4] && tictacArray[0] == tictacArray[8] && tictacArray[0]!=""){
            setWinMessage(tictacArray[0]+ "has Won")
        }
        else if(tictacArray[2]== tictacArray[4] && tictacArray[2] == tictacArray[6] && tictacArray[2]!=""){
            setWinMessage(tictacArray[2]+ "has Won")
        }
    }

    const changeItem=()=>{
        if(winMessage){
            return toast("Game has already got over", {type: 'success'})
        }
        if(tictacArray[index]== ""){
            tictacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else{
            return("Open your eyes dude where are you tapping", {type:'error'})
        }
    }

    return(
        <Container className="p-5">
            <Row>
                <Col md={6} className="offset-md-3">
                    {
                        //to display the winner message
                    }
                    <div className="grid">
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default App