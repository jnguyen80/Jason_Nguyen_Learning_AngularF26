import { Monkey } from './monkey';

export interface MonkeyApi {
  ID: number;
  CommonName: string;
  Family: string;
  Region: string;
  Status: string;
}

export function toMonkey(item: MonkeyApi): Monkey {
  return {
    id: item.ID,
    name: item.CommonName,
    family: item.Family,
    region: item.Region,
    status: item.Status as Monkey['status'],
  };
}
