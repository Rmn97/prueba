import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public prMessage: string;
  public seMessage: string;
  public nombre: string;
  public mensaje: string;
  public career: string;

  constructor() { 
    this.prMessage = 'Buen día, ¿cómo ha estado?';
    this.seMessage = 'Hola, ¿qué tal?';
    this.nombre = 'Alberto Castro';
    this.mensaje = 'Buen día, le informo que mañana ocupo enviarle los documentos';
    this.career = 'Ingeniería en electrónica';
  }

  ngOnInit(): void {
  }

}
