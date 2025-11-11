import type { ReactNode } from "react";

export interface AnimalCardProps {
  animalName: string;
  animalSpecies: string;
  animalImg: string;
  children?: ReactNode;
}