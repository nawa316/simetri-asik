export default function App() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex basis-1/2">
        <img
          src="./assets/side-image.png"
          className="flex object-cover w-full lg:h-full h-56"
          alt="ini gambar hape dan keranjang"
        />
      </div>

      <div className="p-8 flex flex-col gap-5 justify-center lg:basis-1/2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium">Log in to Exclusive</h1>
          <p>Enter your details below</p>
        </div>

        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password"/>
        </div>

        <div className="flex flex-row items-center justify-between">
          <button className="bg-red-600 px-6 py-2 text-neutral-50">Log in</button>
          <p className="text-red-600">Forget password</p>
        </div>
      </div>
    </section>
  );
}
