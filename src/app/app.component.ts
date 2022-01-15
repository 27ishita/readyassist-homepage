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
  testimonyData = [
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
  reviewData = [
    {
      image: 'https://randomuser.me/api/portraits/men/15.jpg',
      text: 'Very helpful customer support! They addressed my issue promptly and sent the technician immediately. The problem was resolved and I am a happy person :)Have subscribed for their RSA assistance which is across India.',
      name: 'Chandler',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/20.jpg',
      text: 'Very helpful customer support! They addressed my issue promptly and sent the technician',
      name: 'Monica',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/60.jpg',
      text: 'I had a flat tyre. So I texted in whatsapp at evening around 8. I got a quick response. In less than an hour it was fixed. Great service. Executive Atul and tecnician Afroz were very cooperative and issue was fixed so quick. Thanks for the help.',
      name: 'Rachel',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      text: 'I had a flat tyre. So I texted in whatsapp at evening around 8. I got a quick response. In less than an hour it was fixed',
      name: 'Joey',
    },
  ];
}
