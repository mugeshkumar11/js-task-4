
let btn = document.getElementById("btn");
let	fname = document.getElementById("fname");
// let list = document.getElementById("list");

let mugesh = function(){
	let list=document.createElement("div");
	document.body.appendChild(list)
	if (fname.value){
	let editEle = document.createElement("button");
editEle.innerText = "Edits";
let p = document.createElement("p");
p.innerText=fname.value;
list.appendChild(p);
list.appendChild(editEle);
let deleteEle = document.createElement("button");
deleteEle.innerText = "Delete";
list.appendChild(deleteEle);
fname.value="";
function editesEle(){

	fname.value = p.innerText;
}

editEle.addEventListener("click",function(){
	  editesEle();


});

deleteEle.addEventListener("click",function(){
	let what=this.parentNode;
	let tables=what.parentNode;
	tables.removeChild(what);
});


}}

btn.addEventListener("click", function(){
		
	mugesh();

});



	

