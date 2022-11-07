import "./index"

import React, {useState} from "react";

function App() {
  
  const [radioValue, setRadioValue] = useState("0")
  const [videoSize, setVideoSize] = useState("0")
  const [subtitles, setSubtitles] = useState("0")
  const [animation, setAnimation] = useState("0")
  const [totalValue, setTotalValue] = useState("0")
  const [isLoading, setIsLoading] = useState(false)



  function calculateVideoSize(){
    if(document.getElementById('snippet_1').checked){ 
      setVideoSize(2)
    }
    else if (document.getElementById('snippet_2').checked){
      setVideoSize(3)
    }
    else if (document.getElementById('snippet_3').checked){
      setVideoSize(4)
    }
    else if (document.getElementById('animation_1').checked){
      setVideoSize(5)
    }
    else if (document.getElementById('animation_2').checked){
      setVideoSize(6)
    }
    else if (document.getElementById('animation_3').checked){
      setVideoSize(10)
    }
    else if (document.getElementById('screenRecording_1').checked){
      setVideoSize(3)
    }
    else if (document.getElementById('screenRecording_2').checked){
      setVideoSize(4)
    }
    else if (document.getElementById('screenRecording_3').checked){
      setVideoSize(5)
    }
  }

  function changeTimeSize (){
    if (document.getElementById('squareBtn').checked && document.getElementById('landscapeBtn').checked){
      calculateVideoSize();
    }else if (document.getElementById('squareBtn').checked && document.getElementById('portraitBtn').checked){
      calculateVideoSize();
    }else if (document.getElementById('landscapeBtn').checked && document.getElementById('portraitBtn').checked){
      calculateVideoSize();
    }else if(document.getElementById('landscapeBtn').checked && document.getElementById('portraitBtn').checked && document.getElementById('squareBtn').checked){ //this doesn't work, find fix
      setVideoSize(videoSize + 1); 
    }else{
      setVideoSize(0)
    }
  }

  function addSubtitleTime(){ 
    if (document.getElementById('animation_1') && document.getElementById('subtitle_Y').checked){
      setSubtitles(1)
    }
    else if (document.getElementById('animation_2') && document.getElementById('subtitle_Y').checked){
      setSubtitles(1)
    }
    else if (document.getElementById('animation_3') && document.getElementById('subtitle_Y').checked){
      setSubtitles(1)
    }
    else if (document.getElementById('screenRecording_1') && document.getElementById('subtitle_Y').checked){
      setSubtitles(1)
    }
    else if (document.getElementById('screenRecording_2') && document.getElementById('subtitle_Y').checked){
      setSubtitles(1)
    }
    else if (document.getElementById('screenRecording_3') && document.getElementById('subtitle_Y').checked){
      setSubtitles(1)
    }
    else if (document.getElementById('footage_edit') && document.getElementById('subtitle_Y').checked){
      setSubtitles(1)
    }
    else{
      setSubtitles(0)
    }
  }

  function addAnimationTime(){
    if(document.getElementById('snippet_1').checked && document.getElementById('animatedTitle_Y')){ 
      setAnimation(1)
    }
    else if(document.getElementById('snippet_2').checked && document.getElementById('animatedTitle_Y')){ 
      setAnimation(1)
    }
    else if(document.getElementById('snippet_3').checked && document.getElementById('animatedTitle_Y')){ 
      setAnimation(1)
    }
    else if (document.getElementById('screenRecording_1').checked && document.getElementById('animatedTitle_Y')){
      setAnimation(2)
    }
    else if (document.getElementById('screenRecording_2').checked && document.getElementById('animatedTitle_Y')){
      setAnimation(2)
    }
    else if (document.getElementById('screenRecording_3').checked && document.getElementById('animatedTitle_Y')){
      setAnimation(2)
    }
    else if (document.getElementById('fottage_edit').checked && document.getElementById('animatedTitle_Y')){
      setAnimation(3)
    }
    else{
      setAnimation(0)
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
      
      
      <div className="ks-cboxtags" ><label>Please select video type</label>

        <div>
          <input id="footage_edit" type="radio" name="radio_1" checked={radioValue==="5"} onClick={() => {setRadioValue("5")}} /><label>Footage Edit</label>
          <input type="radio" value="14" name="radio_1"checked={radioValue==="14"} onClick={() => {setRadioValue("14")}} /><label>Vlog Style</label>
        </div> 
          

        <label for="touch" ><span class="text">Snippets</span></label>
        <div>
          <input id="snippet_1" type="radio" value="5" name="radio_1" checked={radioValue==="5"} onClick={() => {setRadioValue("5")}} /><label>Less than 5 min</label>
          <input id="snippet_2" type="radio" value="10" name="radio_1"checked={radioValue==="10"} onClick={() => {setRadioValue("10")}} /><label>5 - 10 min</label>
          <input id="snippet_3" type="radio" value="13" name="radio_1"checked={radioValue==="13"} onClick={() => {setRadioValue("13")}} /><label>10+ min</label>
        </div>
        

        <label for="touch1"><span>Animation</span></label>
        <div>
          <input id="animation_1" type="radio" value="7" name="radio_1"checked={radioValue==="7"} onClick={() => {setRadioValue("7")}} /><label>less 1 min</label>
          <input id="animation_2" type="radio" value="15" name="radio_1"checked={radioValue==="15"} onClick={() => {setRadioValue("15")}} /><label>2 - 5 min</label>
          <input id="animation_3" type="radio" value="20" name="radio_1"checked={radioValue==="20"} onClick={() => {setRadioValue("20")}} /><label>3+ min</label>
        </div>
        

        <label for="touch2"><span>Screen Recording</span></label>
        <div>
          <input id="screenRecording_1" type="radio" value="5" name="radio_1" checked={radioValue==="5"} onClick={() => {setRadioValue("5")}} /><label>0 - 2 min</label>
          <input id="screenRecording_2" type="radio" value="7" name="radio_1"checked={radioValue==="7"} onClick={() => {setRadioValue("7")}} /><label>2 - 5 min</label>
          <input id="screenRecording_3" type="radio" value="13" name="radio_1"checked={radioValue==="13"} onClick={() => {setRadioValue("13")}} /><label>5+ min</label>
        </div>

      </div>
      
      <br></br>

      <label>What sizes?</label>
        <div onClick={changeTimeSize}>
          <input id="squareBtn" name="checkbox_10" type="checkbox" value=""/>
          <span>Square</span>
          <input id="landscapeBtn" name="checkbox_11" type="checkbox"/>
          <span>Landscape</span>
          <input id="portraitBtn" name="checkbox_12" type="checkbox"/>
          <span>Portrait</span>
        </div>
      
     
      <br></br>
      
      <label>Subtitles</label>
        <div onClick={addSubtitleTime}>
          <input id="subtitle_Y" name="radio_2" type="radio"/>
          <span>Yes</span>
          <input id="subtitle_N" name="radio_2" type="radio"/>
          <span>No</span>
        </div>
      
      
      <br></br>
      
      <label>Animated titles?</label>
        <div onClick={addAnimationTime}>
          <input id="animatedTitle_Y" name="radio_3" type="radio"/>
          <span>Yes</span>
          <input id="animatedTitle_N" name="radio_3" type="radio"/>
          <span>No</span>
        </div>
      
      
      <br></br>

      <span>{radioValue}--</span>
      <span>{videoSize}--</span>
      <span>{subtitles}--</span>
      <span>{animation}</span>

      <br></br>

     <div>
      <span>Total:</span>
      </div>
      <div>
        <button>Calculate</button>
      </div>
      

      <div>
        <button>Reset</button>
      </div>
      
      
    </div>
    
  );
}

export default App;
