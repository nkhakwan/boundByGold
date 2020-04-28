import $ from 'jquery';
import './styles.css';
import { JobBoard } from './contracts.js';

$(document).ready(function() {
  $('#gameStart').click(function() {
    console.log(`we are in click function`);
    let jobBoard = new JobBoard;
    jobBoard.werewolf();
    console.log(`see this ${jobBoard.ourThreeDimentionalArray[0][0][0]}`);
    for (let i=0; i<8; i=i+1) {
      console.log(`we are in first loop`);
      //for (let j=0; j<jobBoard.callOurFunctions.ourThreeDimentionalArray[i][0].length; j=j+1){
        for (let j=0; j<1; j=j+1){
        console.log(`we are in the second loop`);
        for (let k=0; k<2; k=k+1){
          console.log(`we are in the final loop`);
          console.log(`here is the hard data ${jobBoard.ourThreeDimentionalArray[i][k][j]}`);
        $("#showOutput").html(jobBoard.ourThreeDimentionalArray[i][k][j]);
      }
    }
  }
});
});