
"use strict";

window.onload = function (){
    let canvas = document.getElementById("webglCanvas");
    let gl;
    try{
        gl = canvas.getContext('webgl');
        if (gl == null){
            gl = canvas.getContext('experimental-webgl');
        }
    }
    catch (e){

    }
    if (gl != null){
        gl.clearColor(0.2, 0.4, 0.6, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT );
        console.log("Succès");
    }
    else{
        console.log("échec");
    }
}