import { AddressObject, Thumbnails, TrackingEvent } from '../types';

export type LetterSizes = '8.5x11' | '8.5x14';

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
