

/*
 * Author: Gamaliel Azali
 * Date: September 30, 2026
 * Course: Front-End Frameworks
 * Assignment: Exercise 4 - NoteTaker
 * Description: Angular app that adds, deletes, and counts notes.
 */



import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NoteTaker } from './note-taker/note-taker';

@NgModule({
  declarations: [App, NoteTaker],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}