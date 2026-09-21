import ProductCard from './components/ProductCard'

function App() {

  const urunler = [
    { id: 1, isim: "kulaklık", fiyat: 1200, gorsel: "https://picsum.photos/id/10/300" },
    { id: 2, isim: "klavye", fiyat: 1500, gorsel: "https://picsum.photos/id/20/300" },
    { id: 3, isim: "kmouse", fiyat: 1600, gorsel: "https://picsum.photos/id/30/300" },
    { id: 4, isim: "pc", fiyat: 2200, gorsel: "https://picsum.photos/id/40/300" }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex gap-6">

      {urunler.map(
        (u) => (
          <ProductCard key={u.id} isim={u.isim} fiyat={u.fiyat} link={u.gorsel} />
        )
      )}
    </div>
  )
}

export default App