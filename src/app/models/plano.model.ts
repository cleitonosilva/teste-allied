import { aparelho } from "./aparelhos.model";

export class Plano{
  sku: string;
  franquia: string;
  valor: string;
  ativo: boolean;
  aparelho? : aparelho;
}
