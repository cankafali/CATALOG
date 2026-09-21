function ProductCard() {
    return (
        <div className="w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div>
                <img
                    src="https://picsum.photos/300"
                    alt="Ürün görseli"
                    className="h-60 w-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-3 p-4">
                <div>
                    <p className="font-medium text-gray-700">Kablosuz Kulaklık</p>
                    <p className="text-lg font-bold text-gray-900">1.299 TL</p>
                </div>
                <button className="w-full rounded-lg bg-gray-900 py-2 text-white hover:bg-gray-700">
                    Sepete Ekle
                </button>
            </div>
        </div>
    )
}

export default ProductCard