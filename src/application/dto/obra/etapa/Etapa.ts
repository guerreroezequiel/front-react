import { Tarea } from "./tarea/tarea";

export interface Etapa {
    id: number;
    nombre: string;
    descripcion: string;
    obraId: number;
    createdAt: Date;
    updatedAt: Date;
    tareas: Tarea[];
}
