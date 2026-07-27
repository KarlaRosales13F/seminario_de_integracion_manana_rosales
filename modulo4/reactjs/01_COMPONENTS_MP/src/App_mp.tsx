// src/App.tsx

import DigitalCounter from './01_useState_mp/DigitalCounter_mp'
import SafeCounter from './01_useState_mp/SafeCounter_mp'
import TaskManager from './01_useState_mp/TaskManager_mp'
import UserProfileForm from './01_useState_mp/UserProfile_mp'
import DocumentTitle from './02_useEffect_mp/DocumentTitle_mp'
import FetchUsers from './02_useEffect_mp/FetchUsers_mp'
import FetchUser from './02_useEffect_mp/FetchUsers_mp'
import InlineEditor from './03_useRef_mp/InlineEditor_mp'
import AutoFocusForm from './03_useRef_mp/AutoFocusForm_mp'
import FruitList from './components_mp/FruitList_mp'
import ProductCard from './components_mp/ProductCard_mp'
import WelcomeBanner from './components_mp/WelcomeBanner_mp'


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO: number = 11

const recompensas = [
  { name: 'Descuento 10%', emoji: '', calories: 200 },
  { name: 'Cafe gratis',  emoji: '', calories: 100 },
  { name: 'Envio gratis', emoji: '', calories: 350 },
]

const catalogo = [
  { id: 1, name: 'Descuento 15%',       price: 300 },
  { id: 2, name: 'Cena para dos',       price: 1000 },
  { id: 3, name: 'Producto sorpresa',   price: 500, outOfStock: true },
  { id: 4, name: 'Membresia VIP',       price: 2000 },
]

export default function App() {
  const content =
    /* PASO ===  1 ? <WelcomeBanner /> :
    PASO ===  2 ? <UserGreeting name="María López" occupation="Cliente Oro" /> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="María" timeOfDay="afternoon" /> :
    PASO === 11 ? <h1>Loyaltee funciona</h1> : */
    /*PASO ===  6 ? <FruitList fruits={recompensas} title="Recompensas disponibles" /> :
    /* PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) : 
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="María López"
        role="Cliente VIP"
        department="Fidelizacion"
        status="active"
        joinedYear={2022}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen de puntos"
        rows={[
          { label: 'Puntos acumulados', value: '1250' },
          { label: 'Puntos canjeados',  value: '300' },
          { label: 'Saldo',             value: '950', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? <ProductCard title="Descuento 20%" description="Valido en proxima compra" highlighted /> : 
    PASO === 12 ? <ProductCatalogList products={catalogo} title="Recompensas disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="María López"
        email="maria@loyaltee.com"
        role="admin"
        isActive={true}
        skills={['Canjes', 'Puntos', 'Membresias']}
        bio="Cliente fidelizada con 3 años en el programa Loyaltee."
      />
    ) :
     */

    // HOOK useState
    PASO === 1 ? <WelcomeBanner /> :
    PASO === 6 ? <FruitList fruits={recompensas} title="Recompensas disponibles" /> :
    PASO === 11 ? <ProductCard title="Descuento 20%" description="Valido en proxima compra" highlighted /> :
    PASO === 20 ? <DigitalCounter 
    initialValue={100} step={50} label="Contador de puntos" /> :

    PASO === 21 ? <SafeCounter/> :

    PASO === 22 ? <UserProfileForm /> :
    PASO === 23 ? <TaskManager /> :
    
    //Hook useEffect
    PASO === 30 ? <DocumentTitle /> :
    PASO === 31 ? <FetchUser /> :
    PASO === 32 ? <FetchUsers /> :
    //Hook useRef
    PASO === 40 ? <AutoFocusForm/> :
    PASO === 41 ? <InlineEditor/> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
