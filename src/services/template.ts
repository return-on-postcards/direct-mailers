import { Thumbnails } from '../types';
import { PostcardSizes } from './postcard';

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
