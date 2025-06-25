export interface Car {
  id: string;
  name: string;
  brand: string;
  basePrice: number;
  images: {
    main: string;
    gallery: string[];
  };
  colors: {
    name: string;
    code: string;
    images: string[];
  }[];
  variants: {
    name: string;
    engine: string;
    transmission: string;
    fuelType: string;
    priceModifier: number;
  }[];
  years: number[];
  specifications: {
    engine: string;
    power: string;
    torque: string;
    fuelType: string;
    transmission: string;
    seatingCapacity: number;
    mileage: string;
  };
  features: string[];
}

export interface CartItem {
  car: Car;
  selectedColor: string;
  selectedVariant: string;
  selectedYear: number;
  quantity: number;
  totalPrice: number;
}

export interface Filters {
  brand: string;
  priceRange: [number, number];
  fuelType: string;
  transmission: string;
}