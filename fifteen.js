//ADDED EXTRA FEATURE: MULTIPLE BACKGROUNDS
window.onload = function(){

var puzzlearea = $("#puzzlearea");
var puzzle = puzzlearea.children();
var isMoveable = document.getElementsByClassName("movablepiece");
var shufflebutt = document.getElementById("shufflebutton");
var spaceL=null;
var spaceT=null;
var run=true;


// F U N C T I O N S
//SHUFFLE EVENT ON CLICK
shufflebutt.onclick = function(){
	shuffle(puzzle);
}

//ADDITIONAL IMAGES
function addbg() {
    var functions = ['btn1()', 'btn2()', 'btn3()', 'btn4()'];
    var div = document.getElementById('controls');
    var ctr = 1;
    for (var i in functions) {

        var btn = document.createElement('button');
        var txt = document.createTextNode(String('image '+ctr));

        btn.appendChild(txt);
        btn.setAttribute('type', 'button');
        btn.setAttribute('onclick', functions[i]);
        btn.setAttribute('id', ctr);
        div.appendChild(btn);
        ctr++;
    }

//var bg = document.getElementsByClassName("movablepiece");

btn1 = function btn1() {
	for(let count = 0; count < puzzle.length; count++){
		$(puzzle[count]).css({'background-image':'url(1.jpg'});
	}
	load();
	alert('Press ok to load image 1');
}    
btn2 = function btn2() {
	for(let count = 0; count < puzzle.length; count++){
		$(puzzle[count]).css({'background-image':'url(2.jpg'});
	}
	load();
	alert('Press ok to load image 2');
}    
btn3 = function btn3() {
	for(let count = 0; count < puzzle.length; count++){
		$(puzzle[count]).css({'background-image':'url(3.jpg'});
	}
	load();
	alert('Press ok to load image 3');
}
btn4 = function btn4() {
	for(let count = 0; count < puzzle.length; count++){
		$(puzzle[count]).css({'background-image':'url(4.jpg'});
	}
	load();
	alert('Press ok to load image 4');
}
}

//INITIALIZE TILES OR REFRESH THE TILE NUMBERS
function load(){
	var count;
	var widthh=0;
	var t=0;
	var l=0;
	var bgx=0;
	var bgy=0;
	var space;

	for(let count = 0; count < puzzle.length; count++){
		$(puzzle[count]).addClass("puzzlepiece");
		puzzle[count].style.color="blue";
		puzzle[count].style.top=t+"px";
		puzzle[count].style.left=l+"px";
		$(puzzle[count]).css({'background-position':bgx+'px '+bgy+'px'});
		bgx-=100;

		l+=100;
		widthh+=1;
		if(widthh%4==0){
			t+=100;
			l=0;
			bgy-=100;
		}

	}
}

//TEST COLOUR CHANGE EVENT
function testCase(){
	for(let count = 0; count<puzzle.length; count++){
		tile = puzzle[count];
		check = nearSpace(spaceL,spaceT,tile);
		console.log(check);
		if(check==1){
			$(puzzle[count]).addClass("movablepiece");
			//puzzle[count].style.color="red";
			//puzzle[count].onmouseout=puzzle[count].style.color="blue";
		}
	}
}

//PERFORM SWAP WITH EMPTY SPACE
function swap(spot,space){
	var oldSpace = [];
	oldSpace[0]=space;
	oldSpace[1]=spaceL;
	oldSpace[2]=spaceT;

	console.log('spot '+puzzle[spot]);
	
	//console.log('wsfsads'+puzzle[spot].style.top);//=spaceT;
		//puzzle[spot].style.left=spaceL;
	

	
	//spaceL=piece.style.left;
	//spaceT=piece.style.top;
	console.log(space);
}

//MOVE A PUZZLE PIECE
function moveIt(){
	var pieces = document.getElementsByTagName("div");
	console.log(pieces);
        for(var i = 0; i < pieces.length; i++) {
        	var onePiece = pieces[i];
            onePiece.onclick = function() {
            	console.log('fsdgafadf');
            //	swap();
            }
        }
}

//INITIALIZE SPACE X Y VALUES
function initSL(){
	return spaceL=300;
}

function initST(){
	return spaceT=300;
}

//NEAR EMPTY SPOT CHECK
function nearSpace(L,T,tile){
	var result=0;
	if((L == null)||(T==null)){
		initSL();
		initST();
		space=16;
		console.log('spaceL: '+spaceL);
		console.log('spaceT: '+spaceT);
	}
	tileL=tile.style.left;
	tileT=tile.style.top;
	console.log(tileT,tileL+' vs '+spaceT,spaceL-100);
	console.log(spaceT-100,spaceL);
	var checkL=spaceL+'px';
	var checkT=spaceT+'px';
	var check_L=spaceL-100+'px';
	var check_T=spaceT-100+'px';

	if((tileL==check_L)&&(tileT==checkT)){
		result = 1;
		return result;
	}
	if((tileL==checkL)&&(tileT==check_T)){
		result = 1;
		return result;
	}

	return result;
}

//REFRESH THE BACKGROUND TILES
function reload(puzzle,array){
  	var num;
  	var bgp;
	for(let spot= 0; spot<puzzle.length; spot++){
  		num = array[spot].textContent;
  		
  		if(num == 1){
  			bgp=0+'px '+0+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 2){
  			bgp=-100+'px '+0+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 3){
  			bgp=-200+'px '+0+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 4){
  			bgp=-300+'px '+0+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 5){
  			bgp=-400+'px '+-100+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 6){
  			bgp=-500+'px '+-100+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 7){
  			bgp=-600+'px '+-100+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 8){
  			bgp=-700+'px '+-100+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 9){
  			bgp=-800+'px '+-200+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 10){
  			bgp=-900+'px '+-200+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 11){
  			bgp=-1000+'px '+-200+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 12){
  			bgp=-1100+'px '+-300+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 13){
  			bgp=-1200+'px '+-300+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 14){
  			bgp=-1300+'px '+-300+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  		if(num == 15){
  			bgp=-1400+'px '+-300+'px';
			$(array[spot]).css('background-position',bgp);
  		}
  	}
  }

function shuffle(array){
	console.log(array);
	puzzle=array;
	var currentIndex = array.length, temporaryValue, randomIndex;

 	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {

    	// Pick a remaining element...
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;

    	// And swap it with the current element.
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  	}
  	for(let spot= 0; spot<puzzle.length; spot++){
  		console.log("#"+puzzle[spot].textContent);
  		console.log("pos: "+puzzle[spot].style.backgroundPosition);
  	}
  
  load();
  reload(puzzle,array);
}


// S T A R T - H E R E
addbg();
load();
moveIt();
testCase();

}
