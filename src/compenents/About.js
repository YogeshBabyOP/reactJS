// import React, {useState} from 'react'

// export default function About() {

//     const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor : 'white'
//     })
//     const [btntext, setBtnText] = useState("Enabel DM");

//     const toggleStyle = ()=> {
//         if (myStyle.color === 'black') {
//             setMyStyle ({
//                 color : 'white',
//                 backgroundColor : 'black',
//                 border : '1px solid white'

//             })
//             setBtnText("Enable LM");
//         }
//         else {
//             setMyStyle ({
//                 color : 'black',
//                 backgroundColor : 'white'
//             })
//             setBtnText("Enable DM");
//         }
//     }

//     return (
//         <div className="container" style={myStyle}>
//             <h1 className="my-3">About us</h1>

//         </div>
//     )
// }