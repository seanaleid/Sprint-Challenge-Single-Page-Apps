import React from "react";
import styled from "styled-components";

const Card = styled.div`
width: 500px;
margin: 0 auto;
margin-top: 30px;
background: #fff;
border: 2px solid #413539;
display: flex;
flex-wrap: wrap;
border-radius: 15px 50px;
justify-content: space-between;
`;

const Columns = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;

`;

const PicBox = styled.div`
width: 200px;
height: 200px;
padding: 10px;
border-radius: 15px 30px;
`;


const Font = styled.div`
font-size: ${props =>(props.primary ? `2rem` : `1.0rem`)};
color: #black;
display: flex;
align-items: center;
padding-bottom: ${props =>(props.primary ? `30px` : `20px`)};
`;

// const PicBox = styled.div`
// width: 200px;
// height: 200px;
// background: #A9A1A6;
// padding: 10px;
// border: 2px solid #413539;
// border-radius: 15px 30px;
// `;

const CharacterCard = props => {
    console.log(props);
    return (
        <Card>
            <Columns>
                <Font primary>{props.name}</Font>
                <PicBox>Image: {props.src}</PicBox> 
            </Columns>
            <Columns>
                <Font>Species: {props.species}</Font>
                <Font>Status: {props.status}</Font>
            </Columns>
        </Card>
  )
}

export default CharacterCard;