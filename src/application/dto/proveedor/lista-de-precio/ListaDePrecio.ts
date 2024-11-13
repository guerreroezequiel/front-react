import { Proveedor } from "../Proveedor";

export interface ListaDePrecio {
    id: string;
    nombre: string;
    proveedorId: string;
    proveedor: Proveedor;
}

