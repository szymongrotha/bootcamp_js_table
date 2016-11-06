	var girlsNames = ['Anka', 'Paulina', 'Kasia', 'Ola'];
	var boysNames = ['Szymon', 'Michał', 'Dawid', 'Stefan'];
	var allNames = girlsNames.concat(boysNames);
	var newName = "Mietek";

	if(allNames.indexOf(newName) === -1) {
		var name = allNames.push(newName);
	} else {
		console.log('Imię Mietek już znajduje się w tablicy')
	}

	console.log(allNames)
