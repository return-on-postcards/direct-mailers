export type AddressObject = {
  Name: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  State: string;
  Zip: string;
};

export type Thumbnails = {
  Small: string;
  Medium: string;
  Large: string;
};

export type TrackingEvent = {
  ScanTime: string;
  TrackingOperationCode: string;
  Description: string;
  City: string;
  State: string;
  Latitude: number;
  Longitude: number;
};
