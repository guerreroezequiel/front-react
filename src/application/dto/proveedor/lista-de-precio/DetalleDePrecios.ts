import { Articulo } from "../articulo/Articulo";
import { ListaDePrecio } from "./ListaDePrecio";

export interface DetalleDePrecios {
    id: string;
    listaDePrecioId: ListaDePrecio['id'];

    presentacion: {
        articuloId: Articulo['id'];
        canPack: number | null;
        uniMedPack: string | null;
        rendimiento: number | null;
        uniMedRendimiento: string | null;
    };
    precios: {
        precioCompra: number;
        markUp: number;
        precioVenta: number;
    };
    timestamps: {
        createdAt: Date;
        updatedAt: Date;
    };

    // Relaciones
    listaDePrecio?: ListaDePrecio;
    articulo?: Articulo;
}