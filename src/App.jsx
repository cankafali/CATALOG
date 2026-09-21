import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex gap-6">

      <ProductCard isim="kulaklık" fiyat="1200" link="https://picsum.photos/id/10/300" />
      <ProductCard isim="klavye" fiyat="200" link="https://picsum.photos/id/20/300" />
    </div>
  )
}

export default App