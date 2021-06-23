let slideIndex=1;
slideShow(slideIndex);

function plusSlides(n)
{
	slideShow(slideIndex +=n);
}

function slideShow(n)
{
	let i;
	let newSlide = document.getElementsByClassName("slide");
	if(n<1){slideIndex=newSlide.length}
	if(n>newSlide.length){slideIndex=1}
	for(i=0;i<newSlide.length;i++)
	{
		newSlide[i].style.display="none";
	}
	newSlide[slideIndex-1].style.display="block";
}

//*********** Burger ***********
let burger=document.querySelector('.burger');
let navigatn=document.querySelector('.navigatn');

burger.addEventListener('click',()=>{
	navigatn.classList.toggle('change');
})