import { AddressObject, Thumbnails, TrackingEvent } from '../types';
import { client, Path } from '../config';
import { DirectMailersError } from '../errors';

export const createPostcard = async <VPayload extends object>(
  params: PostcardCreateParams<VPayload>
) => {
  try {
    const { data } = await client.post<PostcardObject<VPayload>>(
      Path.postcard,
      params
    );

    return data;
  } catch (error) {
    throw new DirectMailersError(error);
  }
};

export type PostcardSizes = '4.25x6' | '6x9' | '5.5x11';

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
