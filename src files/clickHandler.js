function subFunction()
{
	var allType = document.getElementById("allT");
	var sprintDis = document.getElementById("sprt");
	var olyDis = document.getElementById("oly");
	var HIDis = document.getElementById("him");
	var FIDis = document.getElementById("fim");
			
	var allLev = document.getElementById("allL");
	var begin = document.getElementById("beg");
	var inter = document.getElementById("inter");
	var adv = document.getElementById("adv");
    if(allType.checked)
	{
		if(allLev.checked){						
			document.getElementById("imagedest1").innerHTML = "Sprint - Beginner<br> <img src='images/sprint-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Sprint - Intermediate<br><img src='images/sprint-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Sprint - Advanced<br><img src='images/sprint-adv.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Olympic - Beginner<br><img src='images/oly-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Olympic - Intermediate<br><img src='images/oly-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Olympic - Advanced<br><img src='images/oly-adv.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Half-Ironman - Beginner<br><img src='images/hi-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Half-Ironman - Intermediate<br><img src='images/hi-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Half-Ironman - Advanced<br><img src='images/hi-adv.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Ironman - Beginner<br><img src='images/im-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Ironman - Intermediate<br><img src='images/im-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Ironman - Advanced<br><img src='images/im-adv.jpg' width = '800'>";
					
		}
		else if(beg.checked)
		{
			document.getElementById("imagedest1").innerHTML = "Sprint - Beginner <br><img src='images/sprint-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Olympic - Beginner<br><img src='images/oly-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Half-Ironman - Beginner<br><img src='images/hi-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Ironman - Beginner<br><img src='images/im-beg.jpg' width = '800'>";
		}
		else if (inter.checked)
		{
			document.getElementById("imagedest1").innerHTML = "Sprint - Intermediate<br><img src='images/sprint-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Olympic - Intermediate<br><img src='images/oly-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Half-Ironman - Intermediate<br><img src='images/hi-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Ironman - Intermediate<br><img src='images/im-int.jpg' width = '800'>";
		}
		else if (adv.checked)
		{
			document.getElementById("imagedest1").innerHTML = "Sprint - Advanced<br><img src='images/sprint-adv.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Olympic - Advanced<br><img src='images/oly-adv.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Half-Ironman - Advanced<br><img src='images/hi-adv.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Ironman - Advanced<br><img src='images/im-adv.jpg' width = '800'>";
		}
	}
	else if(sprintDis.checked)
	{
		if(allLev.checked)
		{
			document.getElementById("imagedest1").innerHTML = "Sprint - Beginner<br><img src='images/sprint-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Sprint - Intermediate<br><img src='images/sprint-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Sprint - Advanced<br><img src='images/sprint-adv.jpg' width = '800'>";
		}
		else if(begin.checked)
			document.getElementById("imagedest1").innerHTML = "Sprint - Beginner<br><img src='images/sprint-beg.jpg' width = '800'>";
		else if(inter.checked)
			document.getElementById("imagedest1").innerHTML = "Sprint - Intermediate<br><img src='images/sprint-int.jpg' width = '800'>";
		else if (adv.checked)
			document.getElementById("imagedest1").innerHTML = "Sprint- Advanced<br><img src='images/sprint-adv.jpg' width = '800'>";
	}
	else if(olyDis.checked)
	{
		if(allLev.checked)
		{
			document.getElementById("imagedest1").innerHTML = "Olympic - Beginner<br><img src='images/oly-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Olympic - Intermediate<br><img src='images/oly-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Olympic - Advanced<br><img src='images/oly-adv.jpg' width = '800'>";
		}
		else if(begin.checked)
			document.getElementById("imagedest1").innerHTML = "Olympic - Beginner<br><img src='images/oly-beg.jpg' width = '800'>";
		else if(inter.checked)
			document.getElementById("imagedest1").innerHTML = "Olympic - Intermediate<br><img src='images/oly-int.jpg' width = '800'>";
		else if (adv.checked)
			document.getElementById("imagedest1").innerHTML = "Olympic - Advanced<br><img src='images/oly-adv.jpg' width = '800'>";
	}
	else if(HIDis.checked)
	{
		if(allLev.checked)
		{
			document.getElementById("imagedest1").innerHTML = "Half-Ironman - Beginner<br><img src='images/hi-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Half-Ironman - Intermediate<br><img src='images/hi-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Half-Ironman - Advanced<br><img src='images/hi-adv.jpg' width = '800'>";
		}
		else if(begin.checked)
			document.getElementById("imagedest1").innerHTML = "<br>Half-Ironman - Beginner<br><img src='images/hi-beg.jpg' width = '800'>";
		else if(inter.checked)
			document.getElementById("imagedest1").innerHTML = "<br>Half-Ironman - Intermediate<br><img src='images/hi-int.jpg' width = '800'>";
		else if (adv.checked)
			document.getElementById("imagedest1").innerHTML = "<br>Half-Ironman - Advanced<br><img src='images/hi-adv.jpg' width = '800'>";
	}
	else if(FIDis.checked)
	{
		if(allLev.checked)
		{
			document.getElementById("imagedest1").innerHTML = "Ironman - Beginner<br><img src='images/im-beg.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Ironman - Intermediate<br><img src='images/im-int.jpg' width = '800'>";
			document.getElementById("imagedest1").innerHTML += "<br>Ironman - Advanced<br><img src='images/im-adv.jpg' width = '800'>";
		}
		else if(begin.checked)
			document.getElementById("imagedest1").innerHTML = "Ironman - Beginner<br><img src='images/im-beg.jpg' width = '800'>";
		else if(inter.checked)
			document.getElementById("imagedest1").innerHTML = "Ironman - Intermediate<br><img src='images/im-int.jpg' width = '800'>";
		else if (adv.checked)
			document.getElementById("imagedest1").innerHTML = "Ironman - Advanced<br><img src='images/im-adv.jpg' width = '800'>";
	}
}
function resetFunction()
{		
	var allType = document.getElementById("allT");
	var sprintDis = document.getElementById("sprt");
	var olyDis = document.getElementById("oly");
	var HIDis = document.getElementById("him");
	var FIDis = document.getElementById("fim");
					
	var allLev = document.getElementById("allL");
	var begin = document.getElementById("beg");
	var inter = document.getElementById("inter");
	var adv = document.getElementById("adv");
				
	allLev.checked =false;
	sprintDis.checked = false;
	olyDis.checked = false;
	HIDis.checked = false;
	FIDis.checked = false;
	allType.checked = false;
	begin.checked = false;
	inter.checked = false;
	adv.checked = false; 			
	document.getElementById("imagedest1").innerHTML = null;
}