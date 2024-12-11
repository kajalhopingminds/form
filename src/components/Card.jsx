import React from 'react'
import photo from '../photo.jpeg';
import book2 from '../book2.webp';
const Card = () => {

    const cardData = [
        {
            id: 1,
            bookName: "Famous Book",
            price: "Rs 300",
            image: photo,
            buttonData: "Buy Now"
        },
        {
            id: 2,
            bookName: "Famous Book 2",
            price: "Rs 500",
            image:book2,
            buttonData: "Buy Now"
        },
        {
            id: 3,
            bookName: "Famous Book 2",
            price: "Rs 500",
            image:book2,
            buttonData: "Buy Now"
        }
    ]

    return (
        <div className='my-10'>
            <h1 className='text-[60px] text-center text-[#0A97B0]'>Featured Books </h1>

            <div className='m-20 text-center flex '>
                {
                    cardData.map((item) => {
                        return (
                            <div key={item.id} className='w-[30%] bg-[#ffffff] rounded-md shadow-md shadow-gray-500 mx-5'>
                                <img src={item.image} alt='card' className='h-[30vh] w-[40vw]' />
                                <h3 className='pt-5 pb-2 text-2xl text-[#AA5486]'>{item.bookName}</h3>
                                <p className='text-[F26B0F]'>{`Price ${item.price}`}</p>
                                <button className='border border-black py-2 px-8 my-4 b bg-[#8174A0] text-[#ffffff]'>{item.buttonData}</button>
                            </div>
                        );

                    })
                }

            </div>
        </div>
    )
}

export default Card