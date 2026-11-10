// export interface Monkey {
//   id: number;
//   name: string;
//   species: string;
//   monkeyType: "Gorilla" | "Baboon" | "Orangutan" | "Chimpanzee";
//   hasCoolTricks?: boolean;
// }

export interface Monkey {
  id: number;
  name: string;
  family: string;
  region: string;
  status: 'Critically Endangered' | 'Endangered' | 'Vulnerable' | 'Near Threatened' | 'Least Concern';
  hasCoolTricks?: boolean;
}
