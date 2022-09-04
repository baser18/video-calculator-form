import "./index"
import React, {useState} from "react";

function App() {
  //reactive variable that can change
  const [count, setCount] = useState(() => {return 0})

  //changeTime variables -- had to make them global so I can access them in other functions
  var fottageEdit = document.getElementById('ftEdit');
  var vlogStyle = document.getElementById('vStyle');
  var snippet_1 = document.getElementById('S5min');
  var snippet_2 = document.getElementById('S5_10min');
  var snippet_3 = document.getElementById('S10min');
  var animation_1 = document.getElementById('A1min');
  var animation_2 = document.getElementById('A2_5min');
  var animation_3 = document.getElementById('A3min');
  var screenRecording_1 = document.getElementById('SR2min');
  var screenRecording_2 = document.getElementById('SR2_5min');
  var screenRecording_3 = document.getElementById('SR5min');

  // changeTimeSize variables
   var squareBtn = document.getElementById('squareBtn');
  var landscapeBtn = document.getElementById('landscapeBtn');
  var portraitBtn = document.getElementById('portraitBtn');

  function changeTime(){

    if (fottageEdit.checked){
      var fottageEditTime = document.getElementById('ftEdit').value
      setCount(parseInt(fottageEditTime))
    }
    else if(vlogStyle.checked){
      var vlogStyleTime = document.getElementById('vStyle').value
      setCount(parseInt(vlogStyleTime))
    }
    else if (snippet_1.checked){
      var snippet_1Time = document.getElementById('S5min').value
      setCount(parseInt(snippet_1Time))
    }
    else if (snippet_2.checked){
      var snippet_2Time = document.getElementById('S5_10min').value
      setCount(parseInt(snippet_2Time))
    }
    else if (snippet_3.checked){
      var snippet_3Time = document.getElementById('S10min').value
      setCount(parseInt(snippet_3Time))
    }
    else if (animation_1.checked){
      var animation_1Time = document.getElementById('A1min').value
      setCount(parseInt(animation_1Time))
    }
    else if (animation_2.checked){
      var animation_2Time = document.getElementById('A2_5min').value
      setCount(parseInt(animation_2Time))
    }
    else if (animation_3.checked){
      var animation_3Time = document.getElementById('A3min').value
      setCount(parseInt(animation_3Time))
    }
    else if (screenRecording_1.checked){
      var screenRecording_1Time = document.getElementById('SR2min').value
      setCount(parseInt(screenRecording_1Time))
    }
    else if (screenRecording_2.checked){
      var screenRecording_2Time = document.getElementById('SR2_5min').value
      setCount(parseInt(screenRecording_2Time))
    }
    else if (screenRecording_3.checked){
      var screenRecording_3Time = document.getElementById('SR5min').value
      setCount(parseInt(screenRecording_3Time))
    } 
  }

  
  function changeTimeSize (){
    if ((squareBtn.checked && landscapeBtn.checked)|| (squareBtn.checked && portraitBtn.checked) || (landscapeBtn.checked && portraitBtn.checked) ){

      if(snippet_1.checked){
        setCount(prevCount => prevCount + 2 )
      }
      else if (snippet_2.checked){
        setCount(prevCount => prevCount + 3 )
      }
      else if (snippet_3.checked){
        setCount(prevCount => prevCount + 4 )
      }
      else if (animation_1.checked){
        setCount(prevCount => prevCount + 5 )
      }
      else if (animation_2.checked){
        setCount(prevCount => prevCount + 6 )
      }
      else if (animation_3.checked){
        setCount(prevCount => prevCount + 10 )
      }
      else if (screenRecording_1.checked){
        setCount(prevCount => prevCount + 3 )
      }
      else if (screenRecording_2.checked){
        setCount(prevCount => prevCount + 4 )
      }
      else if (screenRecording_3.checked){
        setCount(prevCount => prevCount + 5 )
      }
    }
  }

  return (
    
    <div className="App">
      <div>
        <h1>Video breifing</h1>
        <h2>The aim of this page is to provide you with a process and timescale for your video brief</h2>
        <button>Video Process</button>
        <h2>How long will my video take?</h2>
        <button className="btnBackground">Begin</button>

      </div>
      
      <form class = "form label" >
        <selection class = "form label">
      <div className="ks-cboxtags" onChange={changeTime}><label>Please select video type</label>
      
        <ul className="ks-cboxtag"><image></image>
          <li><input type="radio" id="ftEdit" name="radio_1"  value= '10' className="btnBackground"/><label for="checkbox_1_1">Footage Edit</label></li>
          
        </ul>

        <ul className="ks-cboxtag"><label></label>
          <li><input type="radio" id="vStyle" name="radio_1"  value="14"/><label for="checkbox_1_2"> Vlog Style </label></li>
        </ul>

        <label for="touch" ><span class="text">Snippets</span></label>
        <input type="checkbox" id="touch"/>
        <ul class="slide">
          <li><input type="radio" id ="S5min" name="radio_1" value="5" /><label class="text">Less than 5 min </label></li>
          <li><input type="radio" id ="S5_10min" name="radio_1" value="10"/><label for="checkbox_2">5 - 10 min</label></li>
          <li><input type="radio" id ="S10min" name="radio_1" value="13"/><label for="checkbox_3">10+ min</label></li>
        </ul>
        

        <label for="touch1"><span>Animation</span></label>
        <input type="checkbox" id="touch1"/>
        <ul class="slide">
          <li><input type="radio" id ="A1min" name="radio_1" value="7"/><label for="checkbox_4">less 1 min </label></li>
          <li><input type="radio" id ="A2_5min" name="radio_1" value="15"/><label for="checkbox_5">2 - 5 min</label></li>
          <li><input type="radio" id ="A3min"name="radio_1" value="20"/><label for="checkbox_6">3+ min</label></li>
        </ul>
        

        <label for="touch2"><span>Screen Recording</span></label>
        <input type="checkbox" id="touch2"/>
        <ul class="slide">
          <li><input type="radio" id ="SR2min"name="radio_1" value="5"/><label for="checkbox_7">0 - 2 min </label></li>
          <li><input type="radio" id ="SR2_5min"name="radio_1" value="7"/><label for="checkbox_8">2 - 5 min</label></li>
          <li><input type="radio" id ="SR5min"name="radio_1" value="13"/><label for="checkbox_9">5+ min</label></li>
        </ul>

      </div>
      </selection>

      <selection class = "form label">
      <div className="btnBackgroun"/*onChange={changeTimeSize}*/><label>What size(s)?</label>
        <input id="squareBtn" name="checkbox_10" type="checkbox" value=""/>
        <span>Square</span>
        <input id="landscapeBtn" name="checkbox_11" type="checkbox"/>
        <span>Landscape</span>
        <input id="portraitBtn" name="checkbox_12" type="checkbox"/>
        <span>Portrait</span>
      </div>
      </selection>

      <selection class = "form label">
      <div className="ks-cboxtag"><label>Subtitles</label>
        <input name="radio_2" type="radio"/>
        <span>Yes</span>
        <input name="radio_2" type="radio"checked/>
        <span>No</span>
      </div>
      </selection>

      <selection class = "form label">
      <div className="ks-cboxtag"><label>Animated titles?</label>
        <input name="radio_3" type="radio"/>
        <span>Yes</span>
        <input name="radio_3" type="radio"checked/>
        <span>No</span>
      </div>
      </selection>

      <span>{count}</span>

      <div>
        <button>Reset</button>
      </div>
      </form>
    </div>
    
  );
}

export default App;
