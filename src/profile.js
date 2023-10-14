import React from 'react'

function profile() {
    return(
        <section className="">
            <div className="h-64 w-64 relative">
    <img src={Image} className="h-full w-full object-cover" alt="logo" />
  </div>

  <div className="absolute mb-16">
    <h1>Uncover and Exchange <br /> Incredible New NFTs</h1>
    <p>Find NFT of your choice and swap with <br /> <span className="flex justify-center">your existing NFT</span></p>
    <button className="text-[green] bg-[green]">Get started</button>
  </div>
        </section>
    )
}

export default profile;