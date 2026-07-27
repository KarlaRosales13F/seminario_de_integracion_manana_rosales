// Concepto puro
type Recompensa = {
  id: number;
  nombre: string;
  puntosCosto: number;
  disponible: boolean;
  stock: number; 
};


const catalogo: Recompensa[] = [
  { id: 1, nombre: "Descuento 10%",  puntosCosto: 200,  disponible: true, stock: 50 },
  { id: 2, nombre: "Café gratis",   puntosCosto: 100,  disponible: true, stock: 30 },
  { id: 3, nombre: "Envío gratis", puntosCosto: 350,  disponible: false, stock: 10 },
  {id: 4, nombre: "Producto sorpresa", puntosCosto: 500, disponible: true, stock: 15 },
  {id: 5, nombre: "Cena para dos", puntosCosto: 1000, disponible: false, stock: 5 }
];


// TypeScript sabe que cada "r" es de tipo Recompensa
const disponibles: Recompensa[] = catalogo.filter((r) => r.disponible);
const nombres: string[] = catalogo.map((r) => r.nombre);
const masBarata: Recompensa | undefined = catalogo.reduce((min, r) =>
  r.puntosCosto < min.puntosCosto ? r : min
);

console.log(nombres);                  // ["Descuento 10%", "Café gratis", "Envío gratis", ...]
console.log(masBarata?.nombre);       // "Café gratis"
console.log(disponibles.length);      // 3
console.log(catalogo)
console.log(catalogo[4].stock)
