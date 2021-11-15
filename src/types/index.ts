export type AddressObject = {
  Name: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  State: string;
  Zip: string;
};

type PostcardSizes = '4.25x6' | '6x9' | '5.5x11';

export type PostcardCreateParams<VPayload> = {
  Description: string;
  Size: PostcardSizes;
  Front: string;
  Back: string;
  To: AddressObject;
  From: AddressObject;
  DryRun?: boolean;
  VariablePayload?: VPayload;
  WaitForRender?: boolean;
};

type Thumbnails = {
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

export type PostcardObject<VPayload> = {
  PrintRecord: string;
  Created: string;
  MailingDate: string;
  Canceled: boolean;
  Status: string;
  Description: string;
  Medium: 'Postcard';
  Size: string;
  Front: string;
  Back: string;
  VariablePayload: VPayload;
  Cost: number;
  DryRun: boolean;
  RenderedPdf: string;
  PostalCarrier: string;
  PostalClass: string;
  To: AddressObject;
  From: AddressObject;
  FrontThumbnails: Thumbnails;
  BackThumbnails: Thumbnails;
  TrackingEvents: TrackingEvent[];
  EstimatedDeliveryDate: string;
  ActualDeliveryDate: string | null;
};

export type PostcardWebhookBody<VPayload> = {
  Data: PostcardObject<VPayload>[];
  Event: 'NewPrintObject';
  Object: 'Postcard';
};

export type TemplateObject = {
  TemplateId: string;
  TemplateName: string;
  Created: string;
  CreatedBy: string;
  Medium: 'Postcard' | 'Letter';
  Size: PostcardSizes;
  Type: string;
  Data: string;
  PdfPreview: string;
  Thumbnails: Thumbnails;
  VariableFields: string[];
};

type LetterSizes = '8.5x11' | '8.5x14';

export type LetterObject<VPayload> = {
  PrintRecord: string;
  Created: string;
  MailngDate: string;
  Canceled: boolean;
  Status: string;
  Description: string;
  Medium: 'Letter';
  Size: LetterSizes;
  VariablePayload: VPayload;
  Cost: number;
  PdfPages: number;
  PrintPages: number;
  DryRun: boolean;
  Duplex: boolean;
  BlankFirstPage: boolean;
  RenderedPdf: string;
  PostalCarrier: string;
  PostalClass: 'First Class' | 'Marketing Mail';
  Data: string;
  To: AddressObject;
  From: AddressObject;
  Thumbnails: Thumbnails;
  TrackingEvents: TrackingEvent[];
  EstimatedDeliveryDate: string;
  ActualDeliveryDate: string;
};
