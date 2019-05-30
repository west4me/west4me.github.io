// Get the list modal
var modalList = document.getElementById('listModal');

// Get the button that opens the modal
var btn = document.getElementById("listBtn");

// Get the <span> element that closes the modal
var spanList = document.getElementsByClassName("listClose")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modalList.style.display = "block";
  $('#listInput').focus()
}

// When the user clicks on <span> (x), close the modal
spanList.onclick = function() {
  modalList.style.display = "none";
}

/*esc key close modal*/
$(document).keydown(function(e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    modalList.style.display = "none";
  }
});

/*item modal*/
// Get the modal
var modalItem = document.getElementById('itemModal');

// Get the button that opens the modal
var btnItem = document.getElementById("itemBtn");

// Get the <span> element that closes the modal
var spanItem = document.getElementsByClassName("itemClose")[0];

// When the user clicks on the button, open the modal 
btnItem.onclick = function() {
  modalItem.style.display = "block";
  $('#task').focus()
}

// When the user clicks on <span> (x), close the modal
spanItem.onclick = function() {
  modalItem.style.display = "none";
}

/*esc key close modal*/
$(document).keydown(function(e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    modalItem.style.display = "none";
  }
});


// When the user clicks anywhere outside of the modal, close it - both modals
window.onclick = function(event) {
  if (event.target == modalList) {
    modalList.style.display = "none";
  } else if (event.target == modalItem) {
    modalItem.style.display = "none";
  }
}

$(document).ready(function() {

/*LOCALSTORAGE*/
/*create the initial loading of the lists to the UL*/
/*get the ul where the list is shown on page*/
function displayLists() {
	var list = document.getElementById("lists");
	/*get the key names*/
	var savedLists = Object.keys(localStorage);
	/*loop through localStorage*/
	for (var i = 0 ; i < savedLists.length ; i++ ) {
		/*make the li*/
		var li = document.createElement("li");
		li.innerHTML = savedLists[i];
		list.appendChild(li);
	}
}

/*when adding a list add it to the existing list*/
function updateDisplayList(newListName) {
	var list = document.getElementById("lists");
	var li = document.createElement("li");
	li.innerHTML = newListName;
	list.appendChild(li);
}

/*Add a new list to local storage*/
/*When you click the submit button when adding a list*/
$("#submitList" ).click(function() {
	/*Shaping the array*/
	var myCollection = [{},{}]
	/*get the list name from the form input*/
	var listTitle = $('#listInput').val();
	
	/*create an id when creating the list so I can grab it when adding an item*/
	var uniqueId = 'id-' + Math.random().toString().replace('0.', '');

	alert(uniqueId);
	/*first check id a list with the same name already exists*/
	if (localStorage.getItem(listTitle) === null) {
		/*if it doesn't exist add it to localStorage*/
  		/*localStorage.setItem(listTitle, JSON.stringify());	*/
  		localStorage.setItem(listTitle, JSON.stringify(uniqueId));	
  		/*now update #lists with the new list*/  		
  		updateDisplayList(listTitle);
	} else
		/*if it already exists then show the alert*/
		alert(listTitle + " " + "already exists");
});
/*run the function to build the lists column*/
displayLists()

  /*add active class to current list*/
  /*This needs to be after displayLists or else it won't work*/
  $('#lists li').click(function() {
    $('#lists li.active').removeClass('active');
    $(this).closest('li').addClass('active');
  });
}); /*end of docready*/



/*THIS writes the items to the console*/
/*for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  console.log( localStorage.getItem( localStorage.key( i ) ) );
}*/




/*BELOW IS OLD CODE THAT WORKS FOR ADDING AN ITEM TO ONE LIST NO DESCRIPTION*/

/*This is just doing the tasks when you click the + button. Need help figuring out how
to do lists and items. like add a list and it adds the list id as the key in 
localStorage. Then when you click on that list the items section displays the items
for that list. Also when you add an item it adds it to the list you are currently on.*/
/*Get the form*/
//const form = document.getElementById('tasks-list');

/*Where to put the items*/
//const ul = document.getElementById('theTasks');

/*Clearing the items*/
//const button = document.getElementById('clearList');

/*input where item comes from*/
//const input = document.getElementById('task');

//let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//localStorage.setItem('items', JSON.stringify(itemsArray));

//const data = JSON.parse(localStorage.getItem('items'));

//const liMaker = (text) => {
//  const li = document.createElement('li');
 // li.textContent = text;
 // ul.appendChild(li);
//}

//form.addEventListener('submit', function(e) {
 // e.preventDefault();

//  itemsArray.push(input.value);
//  localStorage.setItem('items', JSON.stringify(itemsArray));
 // liMaker(input.value);
//  input.value = "";
//});

//data.forEach(item => {
//  liMaker(item);
//});

/*Clear the list*/
//button.addEventListener('click', function confirmDelete(delUrl) {
  //if (confirm("Are you sure you want to delete")) {
    //localStorage.clear();
    //while (ul.firstChild) {
      //ul.removeChild(ul.firstChild);
    //}
    //itemsArray = [];
  //}
//});



