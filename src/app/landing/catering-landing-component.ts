import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catering-landing',
  templateUrl: './catering-landing-component.html',
  styleUrl: './catering-landing-component.scss',
  imports: [FormsModule],
})
export class CateringLandingComponent {

eventType = '';
eventDate = '';
guestCount = '';
eventLocation = '';
foodPreference = '';
customerName = '';
customerMessage = '';

  readonly currentYear = new Date().getFullYear();
  readonly whatsappUrl =
    'https://wa.me/916314744100?text=Hi%20ABC%20Catering%2C%20I%20would%20like%20to%20know%20about%20your%20catering%20services.%20Please%20share%20the%20menu%20and%20pricing.';
  readonly phoneUrl = 'tel:+916314744100';
  readonly instagramUrl = 'https://www.instagram.com/mayilie_kavidhaigal/';

readonly services = [
  {
    icon: 'bi-heart',
    title: 'Wedding Catering',
    description: 'Complete food service for weddings, receptions and traditional celebrations.',
  },
  {
    icon: 'bi-cake2',
    title: 'Birthday Functions',
    description: 'Fresh and delicious food for birthday parties and family celebrations.',
  },
  {
    icon: 'bi-house-heart',
    title: 'Family Functions',
    description: 'Homestyle meals and catering for family gatherings and special occasions.',
  },
  {
    icon: 'bi-people',
    title: 'Marriage & Reception',
    description: 'Thoughtfully prepared menus for marriage functions and reception events.',
  },
  {
    icon: 'bi-stars',
    title: 'Special Occasions',
    description: 'Flexible catering options for parties, celebrations and other important moments.',
  },
];

 readonly menuItems = [
  {
    icon: 'bi-flower1',
    title: 'Vegetarian Meals',
    description: 'Freshly prepared vegetarian dishes and traditional South Indian meals.',
  },
  {
    icon: 'bi-fire',
    title: 'Non-Vegetarian',
    description: 'Flavorful non-vegetarian dishes prepared fresh for your guests.',
  },
  {
    icon: 'bi-egg-fried',
    title: 'Traditional Meals',
    description: 'Classic dishes prepared with familiar flavours for special occasions.',
  },
  {
    icon: 'bi-basket2',
    title: 'Starters & Snacks',
    description: 'Tasty snacks and starters to welcome your guests and begin the celebration.',
  },
  {
    icon: 'bi-cake',
    title: 'Desserts',
    description: 'Sweet treats and desserts to give your celebration a memorable finish.',
  },
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

submitEnquiry(): void {
  const message = [
    'Hi ABC Catering,',
    '',
    'I would like to enquire about catering.',
    '',
    `Name: ${this.customerName || 'Not provided'}`,
    `Event: ${this.eventType || 'Not specified'}`,
    `Date: ${this.eventDate || 'Not specified'}`,
    `Guests: ${this.guestCount || 'Not specified'}`,
    `Location: ${this.eventLocation || 'Not specified'}`,
    `Food preference: ${this.foodPreference || 'Not specified'}`,
    `Additional requirements: ${this.customerMessage || 'None'}`
  ].join('\n');

  const enquiryUrl =
    `https://wa.me/[YOUR_EXISTING_PRIVATE_NUMBER]?text=${encodeURIComponent(message)}`;

  window.open(enquiryUrl, '_blank', 'noopener,noreferrer');
}
}
