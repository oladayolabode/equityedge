import equity from "../assets/pictures/equity.png"
import scaling from "../assets/pictures/scaling.png"
import trading from "../assets/pictures/trading.png"
import payout from "../assets/pictures/payout.png"
import trade from "../assets/pictures/trade.png"
import mindset from "../assets/pictures/mindset.png"
import limitless from "../assets/pictures/limitless.png"
import rewarding from "../assets/pictures/rewarding.png"
import React, { useState } from 'react'
export default function Discount () {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
    setInputValue(event.target.value);
};
    return (
        <div className="min-w-full mt-32 bg-white justify-items-center">       
            <div className="bg-green-500 w-[78rem] pt-4 pl-12 pr-8 pb-4 rounded-3xl font-dmSans mt-10">
                <p className="mb-4 text-2xl font-bold">Use OCT30 for 30% discount off all challenges for a LIMITED TIME ONLY!</p>
                <p className="mb-4 text-xl">Enter your email to get your DISCOUNT CODE & updates  on all Equity Edge giveaway and discounts!</p>
                <input 
                    className="w-[70rem] h-12 p-2 mb-4 rounded-md"
                    type="email" 
                    value={inputValue} 
                    onChange={handleChange} 
                    placeholder="Type your Email" 
                />
                <button className="p-2 text-xl border border-2 border-gray-800 rounded-md">CLAIM MY DISCOUNT</button>
            </div>
            <div className="flex justify-center w-full mt-6 font-dmSans justify-items-center">
                <div className="w-[50%]">
                    <p className="text-6xl font-bold">Are You a Trader?</p>
                    <p className="mt-5 text-6xl font-bold">We Want You.</p>
                    <p className="mt-5 text-xl">
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
                    <p className="text-5xl font-semibold">$ 2M</p>
                    <p className="text-xl"> Scale your Equity Edge <br/>
                          Account up to                     
                    </p>
                </div>
                <div className="justify-items-center">
                    <p className="text-5xl font-semibold">90 %</p>
                    <p className="text-xl">Receive up to 90% of <br/>
                        your simulated profits
                    </p>
                </div>
                <div className="justify-items-center">
                    <p className="text-5xl font-semibold">180 +</p>
                    <p className="text-xl">Countries</p>
                </div>
                <div className="justify-items-center">
                    <p className="text-5xl font-semibold">48h</p>
                    <p className="text-xl">Avg payout <br/>
                        processing time
                    </p>
                </div>
            </div>
            <div className="mt-28 font-dmSans justify-items-center">
                <p className="text-3xl font-bold">
                    Get Funded In 3 Steps
                </p>
                <div className="flex mt-20 justify-items-center">
                    <div className="w-[400px] h-[495px] pt-8 pl-10 border border-green-400 rounded-2xl shadow-2xl shadow-green-200">
                        <p className="mb-8 text-5xl font-bold text-green-200">
                            01
                        </p>
                        <p className="mb-10 text-xl font-bold">
                            Take the challenge
                        </p>
                        <p className="pr-2 text-[19px]">
                            Show us that you can trade profitably and with discipline by reaching the profit targets set out in your 1 or 2 step challenge.
                        </p>
                    </div>
                    <div className="w-[400px] h-[495px] mx-8 pt-8 pl-10 border border-green-400 rounded-2xl shadow-2xl shadow-green-200">
                        <p className="mb-8 text-5xl font-bold text-green-200">
                            02
                        </p>
                        <p className="mb-10 text-xl font-bold">
                            Get Verified
                        </p>
                        <p className="pr-2 text-[19px]">
                            Once you have passed your Equity Edge challenge the next step is to verify your identity, also known as KYC (Know Your Customer).
                        </p>
                    </div>
                    <div className="w-[400px] h-[495px] pt-8 pl-10 border border-green-400 rounded-2xl shadow-2xl shadow-green-200">
                        <p className="mb-8 text-5xl font-bold text-green-200">
                            03
                        </p>
                        <p className="mb-10 text-xl font-bold">
                            Become a Funded Trader
                        </p>
                        <p className="pr-5 text-[19px]">
                            You will now get your live Equity Edge account details and start generating commissions from all of your simulated profits. You can also scale your Equity Edge account up to $2 million earning up to a 90% split on all net simulated profits that you generate via our scaling plan.
                        </p>
                    </div>
                </div>   
                <button className="h-12 px-4 py-2 mt-16 font-bold text-black bg-green-500 rounded-full w-44">Get Funded</button>            
            </div>
            <div className="mt-28 font-dmSans justify-items-center">
                <p className="text-3xl font-bold text-center">Why Should You Join EquityEdge</p>
                <div className="mt-10">
                    <div className="flex">
                        <div className="border border-green-400 w-[21rem] rounded-3xl px-6 h-96 mr-8 hover:bg-green-300">
                            <img src={scaling} alt="scaling" className="pt-2 rounded-full"/>
                            <p className="text-xl font-extrabold">Scaling Plan</p>
                            <p className="text-[18px] mt-3">
                                Climb the ladder with us! We boost account size, Maximum Loss and Maximum Daily Loss to a 14% Maximum Loss and a 7% Daily Loss limit. Upon reaching the VIP level at Equity Edge traders can trade up to $2,000,000.
                            </p>
                        </div>
                        <div className="border border-green-400 w-[21rem] rounded-3xl px-6 h-96 mr-8 hover:bg-green-300">
                            <img src={trading} alt="trading" className="pt-2 rounded-full"/>
                            <p className="text-xl font-extrabold">Trading Days</p>
                            <p className="text-[19px] mt-3">
                                No need to stress about time limits! We’ve got you covered with no minimum or maximum trading days. Take all the time you need – no pressure.
                            </p>
                        </div>
                        <div className="border border-green-400 w-[21rem] rounded-3xl px-6 h-96 mr-8 hover:bg-green-300">
                            <img src={payout} alt="payout" className="pt-2 rounded-full"/>
                            <p className="text-xl font-extrabold">Payout System</p>
                            <p className="text-[19px] mt-3">
                                Receive your earnings every 14 days up to a 90% profit split. Enjoy the flexibility of payouts through Bank transfer and Crypto.
                            </p>
                        </div>
                        <div className="border border-green-400 w-[21rem] rounded-3xl px-6 h-96 hover:bg-green-300">
                            <img src={trade} alt="trade" className="pt-2 rounded-full"/>
                            <p className="text-xl font-extrabold">Trade Your Way</p>
                            <p className="text-[19px] mt-3">
                                Utilize “EA”, hold positions during news, keep trades over the weekend, and trade with lot sizes as large as your leverage allows. Flexibility at your fingertips!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <div className="border border-green-400 w-[21rem] rounded-3xl px-6 h-96 mr-8 hover:bg-green-300">
                            <img src={mindset} alt="mindset" className="pt-2 rounded-full"/>
                            <p className="text-xl font-extrabold">Mindset Management</p>
                            <p className="text-[19px] mt-3">
                                Your mental health is important to us. Our mindset team is here for personalised, one-to-one support in order to assist you with your well-being and helping to improve your trading mindset.
                            </p>
                        </div>
                        <div className="border border-green-400 w-[21rem] rounded-3xl px-6 h-96 mr-8 hover:bg-green-300">
                            <img src={limitless} alt="limitless" className="pt-2 rounded-full"/>
                            <p className="text-xl font-extrabold">Limitless Potential</p>
                            <p className="text-[19px] mt-3">
                                Diverse opportunities with our 1-step and 2-step evaluation challenges, offering multiple paths for traders to showcase their skills and excel in a competitive environment.                                
                            </p>                        
                        </div>
                        <div className="border border-green-400 w-[21rem] rounded-3xl px-6 h-96 hover:bg-green-300">
                            <img src={rewarding} alt="rewarding" className="pt-2 rounded-full"/>
                            <p className="text-xl font-extrabold">Rewarding Monthly Competitions</p>
                            <p className="text-[19px] mt-3">
                                Join our monthly free trading competitions for a shot at winning complimentary evaluation accounts!
                            </p>
                        </div>
                    </div>
                </div>
                <button className="h-12 px-4 py-2 mt-16 font-bold text-black bg-green-500 rounded-full w-44">Get Funded</button> 
            </div>
        </div> 
    )
}