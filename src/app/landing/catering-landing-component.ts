import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexMarkers,
  ApexTooltip,
  ApexLegend,
  ChartComponent
} from 'ng-apexcharts';

export type CateringChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis?: ApexYAxis;
  plotOptions?: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  stroke?: ApexStroke;
  markers?: ApexMarkers;
  tooltip?: ApexTooltip;
  legend?: ApexLegend;
  colors?: string[];
};

@Component({
  selector: 'app-catering-landing',
  standalone: true,
  imports: [FormsModule,ChartComponent],
  templateUrl: './catering-landing-component.html',
  styleUrl: './catering-landing-component.scss',
})
export class CateringLandingComponent {
  // Enquiry form fields
  eventType = '';
  eventDate = '';
  guestCount = '';
  eventLocation = '';
  foodPreference = '';
  customerName = '';
  customerMessage = '';

  // Selected menu categories
  selectedMenus: string[] = [];

  // Footer year
  readonly currentYear = new Date().getFullYear();

  // Preserve your existing working contact URLs here.
  readonly whatsappUrl = 'https://wa.me/+916471144100?text=Hi%20Saffron%20Catering';
  readonly phoneUrl = 'tel:+916471144100';
  readonly instagramUrl =
    'https://www.instagram.com/mayilie_kavidhaigal/';

  // Catering services
  readonly services = [
    {
      icon: 'bi-heart',
      title: 'Wedding Catering',
      description:
        'Complete food service for weddings, receptions and traditional celebrations.',
    },
    {
      icon: 'bi-cake2',
      title: 'Birthday Functions',
      description:
        'Fresh and delicious food for birthday parties and family celebrations.',
    },
    {
      icon: 'bi-house-heart',
      title: 'Family Functions',
      description:
        'Homestyle meals and catering for family gatherings and special occasions.',
    },
    {
      icon: 'bi-people',
      title: 'Marriage & Reception',
      description:
        'Thoughtfully prepared menus for marriage functions and reception events.',
    },
    {
      icon: 'bi-stars',
      title: 'Special Occasions',
      description:
        'Flexible catering options for parties, celebrations and other important moments.',
    },
  ];

  // Menu categories
  readonly menuItems = [
    {
      icon: 'bi-flower1',
      title: 'Vegetarian Meals',
      description:
        'Freshly prepared vegetarian dishes and traditional South Indian meals.',
    },
    {
      icon: 'bi-fire',
      title: 'Non-Vegetarian',
      description:
        'Flavorful non-vegetarian dishes prepared fresh for your guests.',
    },
    {
      icon: 'bi-egg-fried',
      title: 'Traditional Meals',
      description:
        'Classic dishes prepared with familiar flavours for special occasions.',
    },
    {
      icon: 'bi-basket2',
      title: 'Starters & Snacks',
      description:
        'Tasty snacks and starters to welcome your guests and begin the celebration.',
    },
    {
      icon: 'bi-cake',
      title: 'Desserts',
      description:
        'Sweet treats and desserts to give your celebration a memorable finish.',
    },
  ];

  // Gallery images
  readonly galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
      alt: 'A colourful spread of freshly prepared dishes',
      label: 'Made for sharing',
      className: 'gallery-image-tall',
    },
    {
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85',
      alt: 'A fresh vegetarian dish with seasonal ingredients',
      label: 'Fresh and vibrant',
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85',
      alt: 'A beautifully prepared meal for a gathering',
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

  // Why choose Saffron Catering?
  readonly promises = [
    {
      icon: 'bi-patch-check',
      title: 'Quality ingredients',
      description:
        'We choose fresh, quality ingredients for food that tastes as good as it looks.',
    },
    {
      icon: 'bi-shield-check',
      title: 'Hygienic preparation',
      description:
        'Thoughtful food handling and clean preparation at every step.',
    },
    {
      icon: 'bi-sliders',
      title: 'Custom menus',
      description:
        'Menus tailored to your occasion, preferences and number of guests.',
    },
    {
      icon: 'bi-heart',
      title: 'Reliable service',
      description:
        'Friendly service and careful planning for your special occasion.',
    },
    {
      icon: 'bi-clock',
      title: 'On-time service',
      description:
        'We plan ahead to help your celebration run smoothly.',
    },
  ];

  readonly cateringPackages = [
  {
    name: 'Family Celebration',
    subtitle: 'For intimate gatherings',
    icon: 'bi-house-heart',
    guests: 'Up to 50 guests',
    highlights: [
      'Customizable food menu',
      'Traditional meal options',
      'Freshly prepared dishes',
      'Friendly catering service',
    ],
    featured: false,
    eventType: 'Family Function',
  },
  {
    name: 'Birthday & Special Events',
    subtitle: 'For memorable celebrations',
    icon: 'bi-balloon-heart',
    guests: '50–150 guests',
    highlights: [
      'Vegetarian and non-vegetarian options',
      'Starters and main course',
      'Dessert options',
      'Menu tailored to your event',
    ],
    featured: true,
    eventType: 'Birthday',
  },
  {
    name: 'Wedding Celebration',
    subtitle: 'For your special day',
    icon: 'bi-stars',
    guests: '150+ guests',
    highlights: [
      'Traditional wedding menus',
      'Custom meal combinations',
      'Guest-count-based planning',
      'Coordinated catering service',
    ],
    featured: false,
    eventType: 'Wedding',
  },
];

monthlyEnquiriesChart: CateringChartOptions = {
  series: [
    {
      name: 'Enquiries',
      data: [18, 25, 21, 32, 28, 39],
    },
  ],
  chart: {
    type: 'bar',
    height: 320,
    toolbar: { show: false },
    fontFamily: 'inherit',
    foreColor: '#73766c',
  },
  colors: ['#173f32'],
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: '45%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    title: { text: 'Enquiries' },
  },
  grid: {
    borderColor: '#e4dfd2',
    strokeDashArray: 4,
  },
  tooltip: {
    theme: 'light',
  },
};


  /**
   * Check whether a menu category is selected.
   */
  isMenuSelected(menu: string): boolean {
    return this.selectedMenus.includes(menu);
  }

  /**
   * Select or deselect a menu category.
   */
  selectMenu(menu: string): void {
    if (this.isMenuSelected(menu)) {
      this.selectedMenus = this.selectedMenus.filter(
        (selected) => selected !== menu
      );
    } else {
      this.selectedMenus = [...this.selectedMenus, menu];
    }
  }

  /**
   * Select an event type and scroll to the enquiry form.
   */
  selectEvent(event: string): void {
    const eventMap: Record<string, string> = {
      'Wedding Catering': 'Wedding',
      'Birthday Functions': 'Birthday',
      'Family Functions': 'Family Function',
      'Marriage & Reception': 'Marriage & Reception',
      'Special Occasions': 'Other Special Occasion',
    };

    this.eventType = eventMap[event] || event;

    document.getElementById('enquiry-title')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  /**
   * Smoothly scroll to the enquiry form.
   */
  scrollToEnquiry(event: Event): void {
    event.preventDefault();

    document.getElementById('enquiry-title')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  /**
   * Build the enquiry message and open WhatsApp.
   */
  submitEnquiry(): void {
    const whatsappBaseUrl = this.whatsappUrl.split('?')[0];

    // Check that a valid WhatsApp link has been configured.
    if (
      !whatsappBaseUrl.startsWith('https://wa.me/') ||
      whatsappBaseUrl.endsWith('/')
    ) {
      alert(
        'Please configure your existing WhatsApp URL in catering-landing-component.ts.'
      );
      return;
    }

    const message = [
      'Hi Saffron Catering!',
      '',
      'I would like to enquire about your catering services.',
      '',
      `Name: ${this.customerName.trim() || 'Not provided'}`,
      `Event: ${this.eventType || 'Not specified'}`,
      `Event date: ${this.eventDate || 'Not specified'}`,
      `Number of guests: ${this.guestCount || 'Not specified'}`,
      `Event location: ${this.eventLocation.trim() || 'Not specified'}`,
      `Food preference: ${this.foodPreference || 'Not specified'}`,
      `Selected menus: ${
        this.selectedMenus.length > 0
          ? this.selectedMenus.join(', ')
          : 'Not selected'
      }`,
      `Additional requirements: ${
        this.customerMessage.trim() || 'None'
      }`,
      '',
      'Please share your menu options and pricing.',
    ].join('\n');

    const enquiryUrl =
      `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

    window.open(enquiryUrl, '_blank', 'noopener,noreferrer');
  }


/**
 * Select a catering package and scroll to the enquiry form.
 */
selectPackage(eventType: string): void {
  this.eventType = eventType;

  // Scroll to the enquiry form heading.
  document.getElementById('enquiry-title')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

}

