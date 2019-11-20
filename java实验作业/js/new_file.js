var i = 0;
function add1()
{
	var a = document.createElement("tr");
	var tab = document.getElementById("tab");
	var name = document.getElementById("newname").value;
	var num = document.getElementById("num").value;
	tab.innerHTML+=
	"<tr id='" + i +"'>"+
	"<td>"+name+"</td>"+
	"<td>"+num+"</td>"+
	'<td><a href="javascript:delete1('+i+')">'+
	"Delete"+
	"</a></td>"+
	"</tr>";
	i++;
}
function delete1(i){
    var row = document.getElementById(i);
    row.remove(i);
}