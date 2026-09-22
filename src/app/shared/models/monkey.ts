export interface Monkey {
  id: number;
  name: string;
  species: string;
  monkeyType: "Gorilla" | "Baboon" | "Orangutan" | "Chimpanzee";
  hasCoolTricks?: boolean;
}
