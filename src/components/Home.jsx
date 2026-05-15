export default function Home(){
    return(
        <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Discover the Best Products Online
            </h2>
            <p className="mt-6 text-lg text-indigo-100">
              Shop top-quality electronics, fashion, accessories, and more with
              amazing deals and fast delivery.
            </p>
{/* 
            <button className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Shop Now
            </button> */}
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
              alt="shopping"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    )
}