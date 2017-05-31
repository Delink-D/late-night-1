import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	showError = false;

	// an array to hold all the todos
	todos = ["Angular4","PouchDb","CouchDb"];

	// new item holder
	newItem = "";

	// function to push new items to the array
	newItemPush(){
		// check if the input is empty
		if (this.newItem != "") {
			// if everything is okay then push/save to the array
			this.todos.push(this.newItem);
			this.newItem = "";
		}else{
			// show error if the input is empty
			this.showError = true;
		}
	}

	// function to remove items from athe array
	removeItem(index){
		// confirm if you would like to delete the item
		if(confirm("Are you sure you want to delete this item??")){
			// use a javascript inbuilt method splice() to remove item from the array
			this.todos.splice(index, 1);
		}
	}
}
