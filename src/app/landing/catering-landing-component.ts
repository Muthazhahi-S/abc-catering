import { Component } from '@angular/core';

@Component({
  selector: 'app-catering-landing',
  templateUrl: './catering-landing-component.html',
  styleUrl: './catering-landing-component.scss',
})
export class CateringLandingComponent {
  readonly currentYear = new Date().getFullYear();
  readonly whatsappUrl =
    'https://wa.me/916314744100?text=Hi%20ABC%20Catering%2C%20I%20would%20like%20to%20know%20about%20your%20catering%20services.%20Please%20share%20the%20menu%20and%20pricing.';
  readonly phoneUrl = 'tel:+916314744100';
  readonly instagramUrl = 'https://www.instagram.com/mayilie_kavidhaigal/';

  readonly services = [
    { icon: 'bi-heart', title: 'Wedding Catering', description: 'A beautiful feast for your once-in-a-lifetime celebration.' },
    { icon: 'bi-cake2', title: 'Birthday Functions', description: 'A joyful spread made for candles, wishes, and everyone you love.' },
    { icon: 'bi-house-heart', title: 'Family Functions', description: 'Comforting favourites that bring the whole family together.' },
    { icon: 'bi-briefcase', title: 'Corporate Events', description: 'Thoughtful menus for meetings, teams, and company celebrations.' },
    { icon: 'bi-stars', title: 'Parties & Special Occasions', description: 'Good food and warm hospitality for every reason to celebrate.' },
  ];

  readonly menuItems = [
    { icon: 'bi-flower1', title: 'Vegetarian', description: 'Fresh, colourful, and full of flavour' },
    { icon: 'bi-fire', title: 'Non-Vegetarian', description: 'Hearty signature dishes for every guest' },
    { icon: 'bi-egg-fried', title: 'Traditional Meals', description: 'Beloved classics, served with care' },
    { icon: 'bi-basket2', title: 'Snacks & Starters', description: 'Delicious little bites to get things started' },
    { icon: 'bi-cake', title: 'Desserts', description: 'A sweet finish to your celebration' },
  ];

  readonly galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
      alt: 'A generous spread of colourful, freshly prepared dishes',
      label: 'Made for sharing',
      className: 'gallery-image-tall',
    },
    {
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85',
      alt: 'A fresh vegetarian dish with seasonal ingredients',
      label: 'Fresh & vibrant',
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85',
      alt: 'A beautifully plated meal prepared for a gathering',
      label: 'A little something special',
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=85',
      alt: 'Freshly prepared food ready to serve',
      label: 'Prepared with care',
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85',
      alt: 'Sweet treats for a special occasion',
      label: 'Save room for dessert',
      className: '',
    },
  ];

  readonly promises = [
    { icon: 'bi-patch-check', title: 'Quality ingredients', description: 'We choose fresh, quality ingredients for food that tastes as good as it looks.' },
    { icon: 'bi-shield-check', title: 'Hygienic preparation', description: 'Thoughtful food handling and clean preparation, every step of the way.' },
    { icon: 'bi-sliders', title: 'Custom menus', description: 'Menus thoughtfully tailored to your occasion, preferences, and guests.' },
    { icon: 'bi-heart', title: 'Reliable service', description: 'A friendly, experienced team that takes care of the details.' },
    { icon: 'bi-clock', title: 'On-time delivery', description: 'We plan ahead and arrive on schedule, so your celebration stays on track.' },
  ];
}
