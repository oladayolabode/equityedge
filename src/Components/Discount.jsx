import equity from "../assets/pictures/equity.png"
import React, { useState } from 'react'
export default function Discount () {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
    setInputValue(event.target.value);
};
    return (
        <div className="bg-white min-w-full mt-32 justify-items-center">       
            <div className="bg-green-500 w-[78rem] pt-4 pl-12 pr-8 pb-4 rounded-3xl font-dmSans mt-10">
                <p className="mb-4 font-bold text-2xl">Use OCT30 for 30% discount off all challenges for a LIMITED TIME ONLY!</p>
                <p className="mb-4 text-xl">Enter your email to get your DISCOUNT CODE & updates  on all Equity Edge giveaway and discounts!</p>
                <input 
                    className="w-[70rem] h-12 p-2 mb-4 rounded-md"
                    type="email" 
                    value={inputValue} 
                    onChange={handleChange} 
                    placeholder="Type your Email" 
                />
                <button className="border border-gray-800 p-2 rounded-md border-2 text-xl">CLAIM MY DISCOUNT</button>
            </div>
            <div className="flex mt-6 w-full justify-center font-dmSans justify-items-center">
                <div className="w-[50%]">
                    <p className="font-bold text-6xl">Are You a Trader?</p>
                    <p className="font-bold text-6xl mt-5">We Want You.</p>
                    <p className="text-xl mt-5">
                        <h3 className="mb-2">Prove your trading skills and unlock up to $100,000 on an Equity</h3>
                        <h3 className="mb-2">Edge account. Receive up to 90% of the profits from your</h3>
                        <h3 className="mb-12">simulated trades and scale up to $2,000,000 once you pass</h3>
                    </p>
                    <button className="btn-1">Start Challenge</button>
                    <button className="btn-2">Join Our Community</button>
                </div>
                <div>
                    <img src={equity} alt="equity" className="h-[35rem] w-[25rem]"/>
                </div>
            </div>
            <div className="flex bg-green-500 w-[78rem] h-44 border justify-center rounded-[3rem] items-center space-x-32 mt-16 font-dmSans">
                <div className="justify-items-center">
                    <p className="font-semibold text-5xl">$ 2M</p>
                    <p className="text-xl"> Scale your Equity Edge <br/>
                          Account up to                     
                    </p>
                </div>
                <div className="justify-items-center">
                    <p className="font-semibold text-5xl">90 %</p>
                    <p className="text-xl">Receive up to 90% of <br/>
                        your simulated profits
                    </p>
                </div>
                <div className="justify-items-center">
                    <p className="font-semibold text-5xl">180 +</p>
                    <p className="text-xl">Countries</p>
                </div>
                <div className="justify-items-center">
                    <p className="font-semibold text-5xl">48h</p>
                    <p className="text-xl">Avg payout <br/>
                        processing time
                    </p>
                </div>
            </div>
        </div> 
    )
}