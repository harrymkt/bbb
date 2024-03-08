//all.js
var birthyear = 2024; //the variable of the year which bbb born.
var ptype="https"; //the protercall type, http/"+ptype+".
var domain="harrymkt.github.io/bbb"; //domain.
var maindomain="harrymkt.github.io";

function sett(pagett="untitled",wtt="build beyond boundaries")
{
var finaltt="";
if(pagett=="") finaltt=wtt;
else
finaltt=pagett+""+(wtt==""?"":" | "+wtt);
document.title=finaltt;
}