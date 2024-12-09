import Image from 'next/image'
import HomeProducts1 from './components/HomeProducts1'
import VMenu from './components/VMenu'
import FlashSales from './components/FlashSales'

export default function Home() {
  return (
    <>
    <div className="flex">
      {/* Left Menu */}
      <div className="flex-none w-1/4 bg-gray-200 p-4" style={{height:"370px"}}>
        <VMenu/>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-4" style={{height:"370px"}}>
        <img src="img/voucher.png"  style={{height:"344px"}}/>
      </div>
    </div>
    <div>
      <FlashSales/>
    </div>
    </>
  )
}
