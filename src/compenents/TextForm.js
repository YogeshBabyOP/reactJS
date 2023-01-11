import React, {useState} from 'react'

export default function TextForm(props) {

    // const defaultText = ()=> {
    //     console.log("Do you really need your original text, Ok! here you go");
    //     var temp = text;
    //     setText(temp);
    // }

    const handleUpClick = ()=> {
        console.log("UpperCase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLcClick = ()=> {
        console.log("LowerCase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleClear = ()=> {
        let newtext = "";
        setText(newtext);
    }

    const handleCopy = ()=> {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleNumbers = ()=> {
        let num = "" + text.replace(/[^0-9]/g,"").length;
        setText(num);
        setTimeout(function () {
            setText(text);
        }, 2000);
        // window.alert(text.replace(/[^0-9]/g,"").length);
    }

    const handleWhiteSpaces = ()=> {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const handleOnChange = (event)=> {
        console.log("On Change action");
        setText(event.target.value);
    }

    var get = 0;
    var timeNeed = 0;
    function getWords() {
        if (text === "") {
            get = 0;
            timeNeed = 0;
        } 
        else{
            get = text.split(" " ).length;
            timeNeed =(0.008 * text.split(" ").length);
        }
    }

    const [text, setText] = useState('');
    //text = "new Text"; // wrong syntax;
    //setText = ("new Text"); // correct syntax;
  return (
    <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className = "form-control" placeholder="Type or paste here" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : '#042743'}} id = "mybox" rows="8"></textarea>
            </div>

            <button className ="btn btn-success"onClick={handleUpClick}>Convert to UpperCase</button>
            <button className ="btn btn-success mx-2"onClick={handleLcClick}>Convert to LowerCase</button>
            <button className ="btn btn-success mx-2"onClick={handleCopy}>Copy Text</button>
            <button className ="btn btn-success mx-2"onClick={handleClear}>Clear Text</button>
            <button className ="btn btn-success mx-2"onClick={handleNumbers}>Get Numbers</button>
            <button className ="btn btn-success mx-2"onClick={handleWhiteSpaces}>Remove Spaces</button>

            {/* <button className="btn btn-primary" onClick={defaultText}>Set to Default</button> */}
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h3>Text Summary</h3>
            <p>{getWords()}</p>
            <p>Text having {get} words and {text.length} characters</p>
            <p><b>{timeNeed} minutes to Read</b></p>
            <h5>Preview</h5>
            <p>{text.length > 0 ? text : "Enter Something in text box to Preview"}</p>
        </div>
    </>
  )
}