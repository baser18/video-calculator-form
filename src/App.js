import "./test.scss"
import Button from '@mui/material/Button';
import { Checkbox } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

import React, {useState} from "react";

function App() {
  
  const [radioValue, setRadioValue] = useState("0")
  const [videoSize, setVideoSize] = useState("0")
  const [subtitles, setSubtitles] = useState("0")
  const [animation, setAnimation] = useState("0")
  const [totalValue, setTotalValue] = useState("0")




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
      setVideoSize(parseInt(videoSize) + 1)
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

  function addAnimationTime(){// fix
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
    else if (document.getElementById('animatedTitle_N').checked) {
      setAnimation(0)
    }else{
      setAnimation(0)
    }
  }

  function addTotalValue(){
    const sumValue = (parseInt(radioValue) + parseInt(videoSize) + parseInt(subtitles) + parseInt(animation))
    setTotalValue(sumValue)
  }

  function refreshPage() {
    window.location.reload(false);
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
    
      
      <div ><h2>Please select video type</h2>

      <section>
        <div>
          <input id="footage_edit" type="radio" name="radio_1"  onClick={() => {setRadioValue("5")}} /><label>Footage Edit</label>   
          <br></br>
          <input type="radio" value="14" name="radio_1" onClick={() => {setRadioValue("14")}} /><label>Vlog Style</label>
        </div> 
      </section>
      

        <h2><span class="text">Snippets</span></h2>
        <section>
        <div>
          <input id="snippet_1" type="radio" value="5" name="radio_1"  onClick={() => {setRadioValue("5")}} /><label>Less than 5 min</label>
          <input id="snippet_2" type="radio" value="10" name="radio_1" onClick={() => {setRadioValue("10")}} /><label>5 - 10 min</label>
          <input id="snippet_3" type="radio" value="13" name="radio_1" onClick={() => {setRadioValue("13")}} /><label>10+ min</label>
        </div>
        </section>

        <h2 for="touch1"><span>Animation</span></h2>
        <section>
        <div>
          <input id="animation_1" type="radio" value="7" name="radio_1" onClick={() => {setRadioValue("7")}} /><label>less 1 min</label>
          <input id="animation_2" type="radio" value="15" name="radio_1" onClick={() => {setRadioValue("15")}} /><label>2 - 5 min</label>
          <input id="animation_3" type="radio" value="20" name="radio_1" onClick={() => {setRadioValue("20")}} /><label>3+ min</label>
        </div>
        </section>

        <h2><span>Screen Recording</span></h2>
        <section>
        <div>
          <input id="screenRecording_1" type="radio" value="5" name="radio_1"  onClick={() => {setRadioValue("5")}} /><label>0 - 2 min</label>
          <input id="screenRecording_2" type="radio" value="7" name="radio_1" onClick={() => {setRadioValue("7")}} /><label>2 - 5 min</label>
          <input id="screenRecording_3" type="radio" value="13" name="radio_1" onClick={() => {setRadioValue("13")}} /><label>5+ min</label>
        </div>
        </section>   
      </div>
      
      <br></br>

      <h2>What sizes?</h2>
      <section>
        <div onChange={changeTimeSize}>
          <label><Checkbox id="squareBtn" name="checkbox_10" size="large" label="Square lab"  /> Square 2</label>
          <label><Checkbox id="landscapeBtn" name="checkbox_11" size="large" label="Square lab"  /> Landscape 2</label>
          <label><Checkbox id="portraitBtn" name="checkbox_12" size="large" label="Square lab"  /> Portrait 2</label>
        </div>
      </section>

      
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">What Sizes?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox id="squareBtn" onChange={changeTimeSize} name="checkbox_10" />
            }
            label="Square 3"
          />
          <FormControlLabel
            control={
              <Checkbox id="landscapeBtn" onChange={changeTimeSize} name="checkbox_11" />
            }
            label="Landscape 3"
          />
          <FormControlLabel
            control={
              <Checkbox id="portraitBtn" onChange={changeTimeSize} name="checkbox_13" />
            }
            label="Portrait 3"
          />
        </FormGroup>
        <FormHelperText>Please select 1 or more</FormHelperText>
      </FormControl>
    
    
      <br></br>
      
      <h2>Subtitles</h2>
      <section>
        <div onClick={addSubtitleTime}>
          <label><input id="subtitle_Y" name="radio_2" type="radio"/> Yes </label>
          <label><input id="subtitle_N" name="radio_2" type="radio"/> No </label>
        </div>
      </section>
      
      <br></br>
      
      <h2>Animated titles?</h2>
      <section>
        <div onClick={addAnimationTime}>
        <label><input id="animatedTitle_Y" name="radio_3" type="radio"/> Yes </label>
        <label><input id="animatedTitle_N" name="radio_3" type="radio"/> No </label>
        </div>
      </section>
      
      <br></br>

      <span>{radioValue}--</span>
      <span>{videoSize}--</span>
      <span>{subtitles}--</span>
      <span>{animation}</span>

      <br></br>

      <div>
      <span>Total: {totalValue} </span>
      </div>

      <div>
        <button onClick={addTotalValue}>Calculate</button>
      </div>

      <div>
      <Button variant="outlined" onClick={refreshPage}>Reset 2</Button>
        <button onClick={refreshPage}>Reset</button>
      </div>
    
    </div>
    
  );
}

export default App;