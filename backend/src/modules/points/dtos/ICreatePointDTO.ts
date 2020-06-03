export default interface ICreatePointDTO {
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  location: {
    [key: string]: number;
  };
  city: string;
  uf: string;
}
