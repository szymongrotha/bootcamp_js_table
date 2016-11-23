var girlsNames = ['Anka', 'Paulina', 'Kasia', 'Ola'];
var boysNames = ['Szymon', 'Michał', 'Dawid', 'Stefan'];
var allNames = girlsNames.concat(boysNames);
var newName = "Mietek";

if (allNames.indexOf(newName) === -1) {
	var name = allNames.push(newName);

} else {
	console.log('Imię ' + newName + ' znajduje się już w tablicy')
}

console.log(allNames)
