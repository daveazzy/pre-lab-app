// legacy code comented at the end of the file
import { Component, computed, input, output } from "@angular/core";

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input.required<string>()
  avatar = input.required<string>()
  name = input.required<string>()

  select = output<string>();


  imagePath = computed(() => 'assets/users/' + this.avatar())

  onSelectUser() {
    this.select.emit(this.id())
  }
}


// ---- without signals ----
// import { Component, Input } from "@angular/core";

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   @Input ({required:true}) avatar!: string;
//   @Input ({required: true}) name!: string;

//   get imagePath () {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {}
// }


// --- legacy ---
// import { Component, computed, signal } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex])
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  
//   // get imagePath () {
//   //   return 'assets/users/' + this.selectedUser().avatar
//   // }

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//     this.selectedUser.set(DUMMY_USERS[randomIndex])
//   }
// }