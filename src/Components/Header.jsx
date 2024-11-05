import equityedge from '../assets/pictures/equityedge.png'
export default function Header() {
    return (
        <div className="">
            <header className="fixed bg-white top-0 left-0 h-28 pt-6 items-center justify-items-center w-full p-4 font-dmSans font-medium text-xl shadow-md">
                <nav className="flex items-center flex-1 space-x-10">
                    <img src={equityedge} alt="equityedge" className="w-44" />    
                    <ul className="flex space-x-8">
                        <li className="text-green-500"><a href="#home">Home</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#affiliate">Affiliate</a></li>
                        <li><a href="#mindset">Mindset</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className="flex space-x-4">
                        <button className="btn-primary">Get Funded</button>
                        <button className="btn-secondary">Sign In</button>
                    </div>
                </nav>
            </header>       
        </div>
    );
}