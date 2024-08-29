// Input is a decorator, input is a special function
import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CardComponent],
})
export class UserComponent {
  // Using the Input decorators.
  // We definitely will set the value for the avatar.
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // The name should describe the custom event you plan on emitting.
  // We can emmit custom values to any parent component that is interested.
  // @Output() decorator: This marks the event as something that can be listened to by the parent component.
  // Letting us know the type of value I am emitting.
  @Output() select = new EventEmitter<string>();

  // Using the output function
  // Under the hood, it still stores an EventEmitter
  // select = output<string>();

  // Signal Inputs
  // generic function (input) that can work with a variety of values of different types.
  // avatar = input.required<string>();
  // name = input.required<string>();
  //
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Child to Parent Communication: EventEmitter is primarily used to allow a child component to send data or
  // events to its parent component. This is essential in Angular's unidirectional data flow model, where data
  // typically flows down from parent to child through inputs, and events are emitted upwards from child to parent through
  // outputs.

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
