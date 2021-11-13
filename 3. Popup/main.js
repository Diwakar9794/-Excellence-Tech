$(document).ready(

function()
{
	$("#blur-bg").fadeIn(700);
	$("#modal").animate({"top":"150px"},700);
	$("#close").click(

		function()
		{

			$("#blur-bg").fadeOut(700);
			$("#modal").animate({"top":"-800px"},700);
		}
		);
}



	);