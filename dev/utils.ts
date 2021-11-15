import { AddressObject } from '../src/types';

export const testAddress: AddressObject = {
  AddressLine1: '470 James St',
  AddressLine2: '',
  City: 'New Haven',
  Name: 'Brian Kiernan',
  State: 'CT',
  Zip: '06513',
};

export const testBack = `
  <div>Test back with hey now {{back}} variable.</div>
`;

export const testFront = `
  <div>Test front with hey now {{front}} variable.</div>
`;

export type TestVPayload = { back: string; front: string };
