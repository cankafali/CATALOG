import { useState } from 'react'
import ProductCard from './components/ProductCard'

function App() {
  const [arama, setArama] = useState("");

  const urunler = [
    { id: 1, isim: "kulaklık", fiyat: 1200, gorsel: "https://picsum.photos/id/10/300" },
    { id: 2, isim: "klavye", fiyat: 1500, gorsel: "https://picsum.photos/id/20/300" },
    { id: 3, isim: "kmouse", fiyat: 1600, gorsel: "https://picsum.photos/id/30/300" },
    { id: 4, isim: "pc", fiyat: 2200, gorsel: "https://picsum.photos/id/40/300" }
  ]

  const filtrelenmisUrunler = urunler.filter((u) => (
    u.isim.toLocaleLowerCase('tr').includes(arama.toLocaleLowerCase('tr'))
  ));

  return (
    <div className="min-h-screen bg-gray-100 p-8  space-y-6">

      <div>
        <input className="w-full max-w-sm rounded-lg border border-gray-300 bg-white px-3 py-2"
          type='text'
          value={arama}
          onChange={(e) => {
            setArama(e.target.value);
          }}
        />
        <p>Aranan: {arama}</p>
      </div>
      {filtrelenmisUrunler.length === 0 && <p>Ürün bulunamadı</p>}
      <div className='flex flex-wrap gap-6'>
        {filtrelenmisUrunler.map(
          (u) => (
            <ProductCard key={u.id} isim={u.isim} fiyat={u.fiyat} link={u.gorsel} />
          )
        )}
      </div>
    </div>
  )
}

export default App