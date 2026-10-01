

/*
 * Author: Gamaliel Azali
 * Date: September 30, 2026
 * Course: Front-End Frameworks
 * Assignment: Exercise 4 - NoteTaker
 * Description: Angular app that adds, deletes, and counts notes.
 */




import { Component } from '@angular/core';

@Component({
  selector: 'app-note-taker',
  standalone: false,
  styleUrl: './note-taker.css',
  templateUrl: './note-taker.html',
})
export class NoteTaker {
  notes: string[] = [];
  noteToAdd: string = '';

  addNote(): void {
    this.notes.push(this.noteToAdd);
    this.noteToAdd = '';
  }

  deleteNote(n: string): void {
    const index = this.notes.indexOf(n);
    this.notes.splice(index, 1);
  }
}