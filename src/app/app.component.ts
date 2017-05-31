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
	newItem = "hay";

	// function to push new items to the array
	newItemPush(){
		if (this.newItem != "") {
			this.todos.push(this.newItem);
			this.newItem = "";
		}else{
			this.showError = true;
		}
	}
}
