import { DetalleTareaRecurso } from "./DetalleTareaRecurso";

export interface Tarea {
    id: number;
    nombre: string;
    descripcion: string;
    etapaId: number;
    createdAt: Date;
    updatedAt: Date;
    recursos: DetalleTareaRecurso[];

}