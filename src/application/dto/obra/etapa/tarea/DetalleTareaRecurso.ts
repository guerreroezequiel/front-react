export interface DetalleTareaRecurso {
    id: number;
    nombre: string;
    descripcion: string;
    tareaId: number;
    articuloId: number | null;
    articuloNombre: string | null;
    cantidad: number | null;
    precioUnitario: number | null;
    total: number | null;
    subtotal: number | null;
    descuento: number | null;
    uniMedId: string | null;
    rubroId: string | null;
    tipoId: string | null;
    marcaId: string | null;
    presentacionId: string | null;
    uniMedPack: string | null;
    canPack: number | null;
    rendimiento: number | null;
    createdAt: Date;
    updatedAt: Date;
}