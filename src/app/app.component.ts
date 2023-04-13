/**
 * Repräsentiert die Hauptkomponente dieser App
 */
import {Component} from '@angular/core';

import { BlogEntry } from './models/blog-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /**
   * Memberklasse: entries
   * TS-klasse: Array - zum speichern von Listen
   * <> - Speicherung von Instanzen
   * [] - initialiesieren als leere Liste
   */
  entries: Array<BlogEntry> = [];
  /*
  Klassenmethoden ermöglichen es, öffentliche Methoden einer Klasse  -
  und somit deren Schnitstelle - zu definieren
  */
  createBlogEntry(title: string, image: string, text: string) {
    const entry = new BlogEntry();
    entry.title = title;
    entry.image = image;
    entry.text = text;
    this.entries.push(entry)
  }
}

