import { Etapa } from "./etapa/Etapa";

export interface Obra {
    id: number;
    lote: string;
    direccion: string | null;
    clienteId: number | null;
    total: number;
    subtotal: number;
    descuento: number;
    medida: number | null;
    createdAt: Date;
    updatedAt: Date;
    etapas: Etapa[];
}