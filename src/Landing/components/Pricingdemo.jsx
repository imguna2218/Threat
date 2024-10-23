import PricingTable from './pricing';

export const Pricing = () => {
  return (

    <div className="bg-black text-white  bg-gradient-to-b from-black via-[#5D2CA8] to-black py-[72px] sm:py-24 ">

      <div className="">
      <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Get A Deal</h2>

        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
For In deep testing</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 px-24 py-[72px] sm:py-24  ">
          <PricingTable/>
          

        </div>

      </div>


    </div>
  )
}
