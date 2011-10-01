var testN = "";
var temp = ""
function CookieClass()
{
}
var obj = {
		getCookie:function(Name)
		{
			var c = document.cookie;
			var cArray = c.split(";");
			for(var i= 0;i<cArray.length; i++)
			{
				var nv = cArray[i].split("=");
				if(i != 0)
				{
					testN = " "+Name;
				}
				if(testN == nv[0])
				{
					alert("Value of "+Name+" : "+nv[1]);
				}
			}
		},
		setCookie:function(Name, value)
		{
			document.cookie = Name+"="+value;
		},
		clearCookie:function(Name)
		{
		},
		clearCookies:function()
		{
		}
}
CookieClass.prototype = obj;

