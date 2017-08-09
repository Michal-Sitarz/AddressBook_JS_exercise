//warning: syntax older than ES6 !!!

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName){
    var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		if (lastName === contacts[i].lastName) {
		    printPerson(contacts[i]);
		}
	}
}

function add(_firstName, _lastName, _email, _phoneNumber){
    contacts[contacts.length] = {
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        phoneNumber: _phoneNumber
    };
}

add("Mike", "Awesomovsky", "me@mike.com", "(555)131313");

search("Awesomovsky");



