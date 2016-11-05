{	
	var girsNames = ['Anka', 'Paulina', 'Kasia', 'Ola'];
	var boysNames = ['Szymon', 'Michał', 'Dawid', 'Stefan'];
	var allNames = girsNames.concat(boysNames);
	var newName = "Mietek";

	if(allNames.indexOf(newName) == -1) {
		
		var name = allNames.push(newName);
	}

	else {
		console.log('ERORR HASŁO NIEPRAWIDŁOWE')
	}

	console.log(allNames)

}