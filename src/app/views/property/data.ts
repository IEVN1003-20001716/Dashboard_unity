export type PropertyType = {
  id: string
  icon: string
  image: string
  name: string
  propertyType: string
  location: string
  beds: number
  bath: number
  flor: number
  size: number
  price: number
  country: string
  type: 'Rent' | 'Sold' | 'Sale'
  variant: string
  save?: boolean
}

export const propertyData: PropertyType[] = [
  {
    id: '101',
    name: 'Dvilla Residences Batu',
    location: '4604 , Philli Lane Kiowa',
    image: 'assets/images/properties/p-1.jpg',
    icon: 'solar:home-bold-duotone',
    beds: 5,
    bath: 4,
    size: 1400,
    flor: 3,
    price: 8930,
    propertyType: 'Residences',
    country: 'France',
    type: 'Rent',
    variant: 'success',
    save: true,
  },
  {
    id: '102',
    name: 'PIK Villa House',
    location: '127, Boulevard Cockeysville',
    image: 'assets/images/properties/p-2.jpg',
    icon: 'solar:home-bold-duotone',
    beds: 6,
    bath: 5,
    size: 1700,
    flor: 3,
    price: 60691,
    propertyType: 'Villas',
    country: 'Bermuda',
    type: 'Sold',
    variant: 'danger',
  },
  {
    id: '103',
    name: 'Tungis Luxury',
    location: '900 , Creside WI 54913',
    image: 'assets/images/properties/p-3.jpg',
    icon: 'solar:home-bold-duotone',
    beds: 4,
    bath: 3,
    size: 1200,
    flor: 2,
    price: 70245,
    propertyType: 'Bungalow',
    country: 'Australia',
    type: 'Sale',
    variant: 'warning',
    save: true,
  },
  {
    id: '104',
    name: 'Luxury Apartment',
    location: '223 , Creside Santa Maria',
    image: 'assets/images/properties/p-4.jpg',
    icon: 'solar:buildings-3-bold-duotone',
    beds: 2,
    bath: 2,
    size: 900,
    flor: 1,
    price: 5825,
    propertyType: 'Apartment',
    country: 'France',
    type: 'Rent',
    variant: 'success',
    save: false,
  },
  {
    id: '105',
    name: 'Weekend Villa MBH',
    location: '980, Jim Rosa Lane Dublin',
    image: 'assets/images/properties/p-5.jpg',
    icon: 'solar:home-bold-duotone',
    beds: 5,
    bath: 5,
    size: 1900,
    flor: 2,
    price: 90674,
    propertyType: 'Villas',
    country: 'U.S.A',
    type: 'Sale',
    variant: 'warning',
    save: false,
  },
  {
    id: '106',
    name: 'Luxury Penthouse',
    location: 'Sumner Street Los Angeles',
    image: 'assets/images/properties/p-6.jpg',
    icon: 'solar:home-bold-duotone',
    beds: 7,
    bath: 6,
    size: 2000,
    flor: 1,
    price: 10500,
    propertyType: 'Penthouse',
    country: 'Greenland',
    type: 'Rent',
    variant: 'success',
    save: true,
  },
  {
    id: '107',
    name: 'Ojiag Duplex House',
    location: '24 Hanover, New York',
    image: 'assets/images/properties/p-7.jpg',
    icon: 'solar:buildings-3-bold-duotone',
    beds: 3,
    bath: 3,
    size: 1300,
    flor: 2,
    price: 75341,
    propertyType: 'Apartment',
    country: 'France',
    type: 'Sold',
    variant: 'danger',
  },
  {
    id: '108',
    name: 'Luxury Bungalow Villas',
    location: 'Khale Florence, SC 219',
    image: 'assets/images/properties/p-8.jpg',
    icon: 'solar:home-bold-duotone',
    beds: 4,
    bath: 3,
    size: 1200,
    flor: 1,
    price: 54230,
    propertyType: 'Bungalow',
    country: 'France',
    type: 'Sale',
    variant: 'warning',
    save: false,
  },
  {
    id: '109',
    name: 'Duplex Bungalow',
    location: '25, Willison Street Becker',
    image: 'assets/images/properties/p-9.jpg',
    icon: 'solar:home-bold-duotone',
    beds: 3,
    bath: 3,
    size: 1800,
    flor: 3,
    price: 14564,
    propertyType: 'Residences',
    country: 'Canada',
    type: 'Rent',
    variant: 'success',
    save: false,
  },
  {
    id: '110',
    name: 'Woodis B. Apartment',
    location: 'Bungalow Road Niobrara',
    image: 'assets/images/properties/p-10.jpg',
    icon: 'solar:buildings-3-bold-duotone',
    beds: 4,
    bath: 3,
    size: 1700,
    flor: 6,
    price: 34341,
    propertyType: 'Apartment',
    country: 'U.S.A',
    type: 'Sold',
    variant: 'danger',
  },
]
