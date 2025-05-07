import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  livro = {
    titulo: 'O Senhor dos Anéis - A Sociedade do Anel',
    autoria: 'J.R.R. Tolkien',
    imagem: "https://m.media-amazon.com/images/I/81MZ8OjmQrL._AC_UF1000,1000_QL80_.jpg"
  }
}
