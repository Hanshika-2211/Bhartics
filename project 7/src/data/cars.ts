import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Model S Elite',
    brand: 'Tesla',
    basePrice: 1200000,
    images: {
      main: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://www.autoeasy.com/car-image/tesla/model-s/2017/hero/front_angle_view.webp',
        'https://www.autoeasy.com/car-image/tesla/model-s/2017/hero/drivers_side_profile_door_open.webp',
        'https://www.autoeasy.com/car-image/tesla/model-s/2017/hero/front_angle_low_wide_perspective.webp',
        'https://www.autoeasy.com/car-image/tesla/model-s/2017/hero/overhead_view.webp'
      ]
    },
    colors: [
      {
        name: 'Midnight Black',
        code: '#000000',
        images: [
          'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/93821/model-s-exterior-front-view.jpeg?q=80&q=80',
          'https://i.pinimg.com/736x/96/8f/1f/968f1ffc7d7e4f7ae3d22b197ffbead0.jpg'
        ]
      },
      {
        name: 'Pearl White',
        code: '#ffffff',
        images: [
          'https://imgcdn.oto.com/large/gallery/color/133/2221/tesla-model-s-color-705609.jpg',
          'https://imgcdn.oto.com/large/gallery/interior/133/2221/tesla-model-s-tachometer-598145.jpg'
        ]
      }
    ],
    variants: [
      {
        name: 'Standard Range',
        engine: '75 kWh Battery',
        transmission: 'Single Motor',
        fuelType: 'Electric',
        priceModifier: 0
      },
      {
        name: 'Long Range',
        engine: '100 kWh Battery',
        transmission: 'Dual Motor',
        fuelType: 'Electric',
        priceModifier: 200000
      }
    ],
    years: [2023, 2024],
    specifications: {
      engine: '75 kWh Battery',
      power: '402 HP',
      torque: '487 Nm',
      fuelType: 'Electric',
      transmission: 'Single Motor',
      seatingCapacity: 5,
      mileage: '405 km range'
    },
    features: ['Autopilot', 'Premium Audio', 'Glass Roof', 'Wireless Charging']
  },
  {
    id: '2',
    name: 'Civic Turbo',
    brand: 'Honda',
    basePrice: 850000,
    images: {
      main: 'https://imgcdn.oto.com/large/gallery/color/14/524/honda-civic-type-r-color-838867.jpg',
      gallery: [
        'https://imgcdn.oto.com/large/gallery/exterior/14/524/honda-civic-type-r-headlight-184420.jpg',
        'https://imgcdn.oto.com/large/gallery/exterior/14/524/honda-civic-type-r-tail-light-589903.jpg',
        'https://imgcdn.oto.com/large/gallery/interior/14/524/honda-civic-type-r-dashboard-view-828540.jpg'
      ]
    },
    colors: [
      {
        name: 'Sonic Gray',
        code: '#6b7280',
        images: [
          'https://imgcdn.oto.com/large/gallery/color/14/524/honda-civic-type-r-color-978755.jpg',
          'https://imgcdn.oto.com/large/gallery/interior/14/524/honda-civic-type-r-front-ac-vents-495817.jpg'
        ]
      },
      {
        name: 'Rallye Red',
        code: '#dc2626',
        images: [
          'https://imgcdn.oto.com/large/gallery/color/14/524/honda-civic-type-r-color-369915.jpg'
        ]
      }
    ],
    variants: [
      {
        name: 'LX',
        engine: '2.0L 4-Cylinder',
        transmission: 'CVT',
        fuelType: 'Petrol',
        priceModifier: 0
      },
      {
        name: 'Sport',
        engine: '1.5L Turbo',
        transmission: '6-Speed Manual',
        fuelType: 'Petrol',
        priceModifier: 150000
      }
    ],
    years: [2023, 2024],
    specifications: {
      engine: '2.0L 4-Cylinder',
      power: '158 HP',
      torque: '187 Nm',
      fuelType: 'Petrol',
      transmission: 'CVT',
      seatingCapacity: 5,
      mileage: '16.5 km/l'
    },
    features: ['Honda Sensing', 'Apple CarPlay', 'LED Headlights', 'Sunroof']
  },
  {
    id: '3',
    name: 'X5 M Sport',
    brand: 'BMW',
    basePrice: 2500000,
    images: {
      main: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fbmw%2Fx5-m%2Fbmw-x5-m-mineral-white-metallic.png%3Fv%3D1606378368&w=640&q=75',
      gallery: [
        'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://stimg.cardekho.com/images/carinteriorimages/630x420/BMW/X5/10490/1689853374371/steering-wheel-54.jpg?tr=w-664',
        'https://stimg.cardekho.com/images/carinteriorimages/630x420/BMW/X5/10490/1689853374371/ambient-lighting-view-181.jpg?tr=w-664'
      ]
    },
    colors: [
      {
        name: 'Alpine White',
        code: '#ffffff',
        images: [
          'https://stimg.cardekho.com/images/car-images/930x620/BMW/X5/10490/1689853560153/224_Mineral-White-metallic_d0cecc.jpg',
          'https://stimg.cardekho.com/images/carinteriorimages/630x420/BMW/X5/10490/1689853374371/steering-wheel-54.jpg?tr=w-664'
        ]
      },
      {
        name: 'Jet Black',
        code: '#000000',
        images: [
          'https://stimg.cardekho.com/images/car-images/930x620/BMW/X5/10490/1689853560153/225_Black-Sapphire-metallic_0d0d0d.jpg'
        ]
      }
    ],
    variants: [
      {
        name: 'xDrive40i',
        engine: '3.0L Turbo I6',
        transmission: '8-Speed Automatic',
        fuelType: 'Petrol',
        priceModifier: 0
      },
      {
        name: 'M50i',
        engine: '4.4L Twin-Turbo V8',
        transmission: '8-Speed Automatic',
        fuelType: 'Petrol',
        priceModifier: 800000
      }
    ],
    years: [2023, 2024],
    specifications: {
      engine: '3.0L Turbo I6',
      power: '335 HP',
      torque: '447 Nm',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic',
      seatingCapacity: 7,
      mileage: '12.5 km/l'
    },
    features: ['xDrive AWD', 'Panoramic Sunroof', 'Harman Kardon Audio', 'Gesture Control']
  },
  {
    id: '4',
    name: 'A-Class Sedan',
    brand: 'Mercedes',
    basePrice: 1800000,
    images: {
      main: 'https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/a-class/sedan-v177-fl-pi/modeloverview/08-2022/images/mercedes-benz-a-class-v177-696x392-08-2022.png',
      gallery: [
        'https://www.mercedes-benz.co.in/content/dam/india/passengercars/models/new-a-class/Exterior-Highloghts-Hotspots-Image.jpg/1740065138020.jpg?im=Crop,rect=(0,0,3302,1857);Resize=(1680,945)',
        'https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/a-class/sedan-v177-fl-pi/overview/equipment/08-2022/images/mercedes-benz-a-class-v177-equipment-multimedia-simple-hotspot-3302x1858-08-2022.jpg/1740016942880.jpg?im=Crop,rect=(0,0,3302,1857);Resize=(1680,945)',
        'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/A-Class-Limousine/10868/1690455053374/wheel-42.jpg?tr=w-664'
      ]
    },
    colors: [
      {
        name: 'Polar White',
        code: '#ffffff',
        images: [
          'https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/A-Class-Limousine/11361/1718348534222/224_White_b3b4b8.jpg',
          'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/A-Class-Limousine/10868/1690455053374/wheel-42.jpg?tr=w-664'
        ]
      },
      {
        name: 'Night Black',
        code: '#000000',
        images: [
          'https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/A-Class-Limousine/11361/1718348534222/225_Cosmos-Black_02050c.jpg'
        ]
      }
    ],
    variants: [
      {
        name: 'A200',
        engine: '1.3L Turbo',
        transmission: '7G-DCT',
        fuelType: 'Petrol',
        priceModifier: 0
      },
      {
        name: 'A200d',
        engine: '2.0L Diesel',
        transmission: '7G-DCT',
        fuelType: 'Diesel',
        priceModifier: 100000
      }
    ],
    years: [2023, 2024],
    specifications: {
      engine: '1.3L Turbo',
      power: '163 HP',
      torque: '250 Nm',
      fuelType: 'Petrol',
      transmission: '7G-DCT',
      seatingCapacity: 5,
      mileage: '17.5 km/l'
    },
    features: ['MBUX Infotainment', 'LED High Performance', 'Parking Package', 'Smartphone Integration']
  },
  {
    id: '5',
    name: 'Fortuner Legender',
    brand: 'Toyota',
    basePrice: 1500000,
    images: {
      main: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner-Legender/10229/1749726924621/front-left-side-47.jpg?tr=w-664',
      gallery: [
        'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner-Legender/10229/1749726924621/front-left-side-47.jpg?tr=w-664',
        'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner-Legender/10229/1749010740042/window-line-158.jpg?tr=w-664',
        'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner-Legender/10229/1749010740042/grille-97.jpg?tr=w-664'
      ]
    },
    colors: [
      {
        name: 'Attitude Black',
        code: '#000000',
        images: [
          'data:image/jpeg;base64,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',
          'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner-Legender/10229/1749010740042/wheel-42.jpg?tr=w-664'
        ]
      },
      {
        name: 'Avant Garde Bronze',
        code: '#cd7f32',
        images: [
          'https://imgd.aeplcdn.com/370x208/n/bbtknta_1500715.jpg?q=80'
        ]
      }
    ],
    variants: [
      {
        name: '2.7 Petrol',
        engine: '2.7L 4-Cylinder',
        transmission: '6-Speed Automatic',
        fuelType: 'Petrol',
        priceModifier: 0
      },
      {
        name: '2.8 Diesel',
        engine: '2.8L Turbo Diesel',
        transmission: '6-Speed Automatic',
        fuelType: 'Diesel',
        priceModifier: 200000
      }
    ],
    years: [2023, 2024],
    specifications: {
      engine: '2.7L 4-Cylinder',
      power: '164 HP',
      torque: '245 Nm',
      fuelType: 'Petrol',
      transmission: '6-Speed Automatic',
      seatingCapacity: 7,
      mileage: '10.5 km/l'
    },
    features: ['4WD System', 'Hill Assist', 'Cruise Control', '9-inch Touchscreen']
  },
  {
    id: '6',
    name: 'Creta SX',
    brand: 'Hyundai',
    basePrice: 750000,
    images: {
      main: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1744281746048/front-view-118.jpg?imwidth=420&impolicy=resize',
      gallery: [
        'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1744607863052/front-left-side-47.jpg?imwidth=420&impolicy=resize',
        'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1744281746048/rear-view-119.jpg?imwidth=420&impolicy=resize',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/8667/1744281746048/exterior-image-178.jpg'
      ]
    },
    colors: [
      {
        name: 'Fiery Red',
        code: '#dc2626',
        images: [
          'https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta/11434/1707294369951/225_Fiery-Red_c10b0b.jpg',
          'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/8667/1744281746048/exterior-image-178.jpg'
        ]
      },
      {
        name: 'Polar White',
        code: '#ffffff',
        images: [
          'https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta/11434/1707294369951/227_Atlas-White_e2e3e5.jpg'
        ]
      }
    ],
    variants: [
      {
        name: '1.5 Petrol',
        engine: '1.5L 4-Cylinder',
        transmission: 'Manual',
        fuelType: 'Petrol',
        priceModifier: 0
      },
      {
        name: '1.5 Turbo',
        engine: '1.5L Turbo',
        transmission: '7-Speed DCT',
        fuelType: 'Petrol',
        priceModifier: 150000
      }
    ],
    years: [2023, 2024],
    specifications: {
      engine: '1.5L 4-Cylinder',
      power: '115 HP',
      torque: '144 Nm',
      fuelType: 'Petrol',
      transmission: 'Manual',
      seatingCapacity: 5,
      mileage: '17.4 km/l'
    },
    features: ['BlueLink Connected', 'Wireless Charging', 'Ventilated Seats', 'Panoramic Sunroof']
  }
];