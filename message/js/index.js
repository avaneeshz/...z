this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "This is just a attempt to make u feel special, ha virtually special feel krwana is very difficult, but fir v ahsas wale phone m v naya naya features add hua hai ye baat tho bataana hoga na........ Ha mai jyada creative nhi hu tmko pata hi hai but just trying my best... wait untill next time ";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
