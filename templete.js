var output = "";
var i = 0;
var count = 0;
var content = "";
function Template()
{
	content = document.getElementById("nameSpacing").value;
	output = "";
	output = "<p>";
	content = content + '\n';
	var ch = 0;
	var cp = 0;
	for(i=0;i<content.length;i++)
	{
		
		if(content[i] == '\n' || content[i] == '|')
		{
			if(content[i] == '\n')
			{
				while(content[i+1] == '\n')
				{
						i=i+1;
				}
				if(content[i+1] != content[content.length])
				{
					if(cp == 0)
					{
						output = output + "<p>";
						cp++;
					}
					else
					{
						output = output + "</p><p>";
						cp--;
					}
				}
			}
			else
			{
				if(ch == 0)
				{
					output = output + "<h1>";
					ch++;
				}
				else
				{
					output = output + "</h1></p>";					
					ch--;
				}
			}	
		}
		else
		{
			output = output + content[i];
		}
	}
	output = output + "</p>";
}
var obj={
		templatize:function()
		{	
			document.getElementById("output").innerHTML = "";	
			alert(output);
		},
		hcounter:function()
		{
			count = 0;
			for(i=0; i<content.length;i++)
			{
				if(content[i] == '|')
				{
					count++;
				}
			}
			alert("Total number of '|' = "+count);
		},
		pcounter:function()
		{
			count = 0;
			for(i=0; i<output.length;i++)
			{
				if(output[i] == '<' && output[i+1] == 'p' && output[i+2] == '>')
				{
					count++;
				}
			}
			alert("Total number of paragraphs = "+count);
		}
}
Template.prototype = obj;
