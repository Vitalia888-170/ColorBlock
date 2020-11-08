
function IdentifyBlock(name){
let menuElemList=document.getElementById('menu');
let menuItems = menuElemList.children;
	for (let item of menuItems){
		let itemClass = item.getAttribute('id');
		if(itemClass.includes(name)){
			console.log(itemClass);
			item.classList.add('active');
		}else{
			item.classList.remove('active');
		}
	}
}



function findCurrentBlock(){
	let parent = document.getElementById('main');
	let elems = parent.children;
	let currentElem;
	for (let elem of elems){
		let posElem = elem.getBoundingClientRect().top;
		if(posElem<=10 && posElem + elem.offsetHeight>0){
			currentElem = elem.getAttribute('id');
			console.log(currentElem);
			IdentifyBlock(currentElem);
		}
	}
}
findCurrentBlock();
setInterval(findCurrentBlock, 100);