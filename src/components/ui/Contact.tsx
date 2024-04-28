export default function () {
    return (
      <div>
        <div className="flex justify-between md:cols-1 bg-black text-white grid grid-cols-1 md:grid-cols-2">
          <div className="px-2 md:px-6 md:mx-10 my-5">
            <h1 className="text-3xl font-bold p-5 text-purple-400">Contact Us</h1>
            <div className="text-lg px-5 pt-2">
              <h3>Vinay </h3>
              <h3>9356862180</h3>
            </div>
            <div className="text-lg px-5 pt-2">
              <h3>Ayush </h3>
              <h3>6261508081</h3>
            </div>
          </div>
          <div className="px-2 md:px-6 md:mx-10">
            <h1 className="text-3xl font-bold p-5 text-purple-400">Get Direction</h1>
            <h3 className=" p-5">Dr. Vishnuvardhana Road Post, RNS Farms Rd, Channasandra, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098</h3>
            <h3 className="font-bold px-5">Contact</h3>
            <h3 className=" px-5">080 2861 1880</h3>
            
          </div>
        </div>
        <div className="flex justify-center text-purple-500 underline text-xl p-8 bg-black"><a className="texl-4xl py-2" href="https://devfolio.co/code-of-conduct" target="_blank">Terms & Conditions</a></div>
      </div>
    );
  }