
const BookNowForm = () => {
  return (
    <section className="bg-white shadow-md">
      <div className=" bg-gray-800 py-2 font-bold flex items-center justify-between text-white px-2">
        <h1>Book This Tour</h1>
        <div><span className="text-orange-500">$79</span> Per Person</div>
      </div>

      {/* booking form */}
      <form action="" className="px-4">
          <div>
            <input type="text" placeholder="Full Name" className="focus:ring-1 rounded-2xl h-[36px] bg-orange-100 w-full" />
          </div>

        <button type="submit">BooK Now</button>
      </form>
    </section>
  )
}

export default BookNowForm