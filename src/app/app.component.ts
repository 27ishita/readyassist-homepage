import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taxi-services';
  gallery = [
    'https://www.readyassist.in/assets/banner/driveu.png',
    'https://www.readyassist.in/assets/banner/shell.png',
  ];
  data = [
    {
      image: 'https://www.readyassist.in/assets/banner/driveu.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam architecto quos modi? Nemo tempora perferendis quam, corporis quo a praesentium repellat aspernatur tempore asperiores fuga maxime mollitia eius odio facere!',
      name: 'John Doe',
      designation: 'CEO',
      company: 'DRIVE',
    },
    {
      image: 'https://www.readyassist.in/assets/banner/shell.png',
      text: 'Sunt velit cupiditate quaerat ipsa ad! Molestiae architecto pariatur vel laborum nihil doloribus reprehenderit doloremque animi. Aut, amet enim pariatur dicta repellendus voluptatum adipisci, sed sapiente ducimus harum itaque quasi assumenda nesciunt ea placeat, expedita, dolorem tenetur voluptatibus!',
      name: 'Rose',
      designation: 'Director',
      company: 'SHELL',
    },
  ];
  priceData = [
    {
      image: 'https://www.readyassist.in/assets/plans/4.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam architecto quos modi? Nemo tempora perferendis quam, corporis quo a praesentium repellat aspernatur tempore asperiores fuga maxime mollitia eius odio facere!',
      title: 'Prime Sedan',
      price: 4000,
    },
    {
      image: 'https://www.readyassist.in/assets/plans/freedom.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam architecto quos modi? Nemo tempora perferendis quam, corporis quo a praesentium repellat aspernatur tempore asperiores fuga maxime mollitia eius odio facere!',
      title: 'Car Pro',
      price: 2000,
    },
    {
      image: 'https://www.readyassist.in/assets/plans/3.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam architecto quos modi? Nemo tempora perferendis quam, corporis quo a praesentium repellat aspernatur tempore asperiores fuga maxime mollitia eius odio facere!',
      title: 'Prime Sedan',
      price: 3000,
    },
    {
      image: 'https://www.readyassist.in/assets/plans/2-wheeler-pro.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam architecto quos modi? Nemo tempora perferendis quam, corporis quo a praesentium repellat aspernatur tempore asperiores fuga maxime mollitia eius odio facere!',
      title: '2 Wheelers',
      price: 2000,
    },
  ];
}
