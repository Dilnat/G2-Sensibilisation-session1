import * as engine from "./engine.js";

//Code exemple pour creer un point (x,y)
//a ne pas modifier
function createPoint(x,y)
{
    const gameObj1 = engine.ecs.createEntity();
    engine.ecs.addComponent(gameObj1,engine.components.Position(x,y));
}



// fonction pour dessiner la scene
function sceneSetup()
{
    //TODO
    //exemple:
    //createPoint(-0.5,+0.5);
    draw_I(-0.8, -0.3, 0.4, 0.07);
    draw_U(-0.6, -0.25 ,-0.3, 0.4, 0.07);
    draw_T(0.1, 0.3, -0.3, 0.4, 0.07);
}

function draw_I(x_depart, y_depart, y_arrive, espace){
    for (let y = y_depart; y < y_arrive; y=y+espace) {
        createPoint(x_depart, y)
    }
}

function draw_U(x_depart, x_arrive, y_depart, y_arrive, espace){
    draw_I(x_depart, y_depart, y_arrive, espace);
    for (let x = x_depart; x < x_arrive; x=x+espace-0.02) {
        createPoint(x, y_depart)
    }
    draw_I(x_arrive, y_depart, y_arrive, espace);
}

function draw_T(x_depart, x_arrive, y_depart, y_arrive, espace){
    draw_I(x_depart, y_depart, y_arrive, espace);
    for (let x = x_depart; x < x_arrive; x=x+espace) {
        createPoint(x, y_arrive-espace);
        if (x!=x_depart)createPoint(x  - (x_arrive-x_depart), y_arrive-espace);
    }
}


//fonction qui initialise l'environnement graphique
//a ne pas modifier
window.onload = function() {
    engine.init("GLCanvas");
    sceneSetup();
    engine.update(); 
}
