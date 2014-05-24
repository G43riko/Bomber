function tests(){
	assert(1<2,"jedna nieje menšie ako dva","jedna je menšie ako dva");
}
function assert(condition,neuspech,uspech){
	if(!condition){
		var msg="kontrola zlyhala";
		if(neuspech){								
			console.log(msg+" : "+neuspech);
		}
	}
	else{
		if(arguments.length==3){
			var msg="kontrola bola úspešná";
			console.log(msg+" : "+uspech);
		}		
	}
}
