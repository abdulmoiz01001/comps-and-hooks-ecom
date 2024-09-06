import React ,  {useState} from 'react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  description: string;
  specifications?: { [key: string]: string };
  reviews?: { user: string; comment: string; rating: number }[];
  colors?: string[];
  sizes?: string[];
}

interface DetailedProductCardCompProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const DetailedProductCardComp: React.FC<DetailedProductCardCompProps> = () => {
  const [largeImage, setLargeImage] = useState("https://dummyimage.com/800x400");

  // Array of thumbnail image URLs
  const thumbnails = [
    "https://dummyimage.com/400x400",
    "https://dummyimage.com/400x400",
    "https://dummyimage.com/400x400"
  ];
  return (
   <>
   <section  className="text-gray-600 lg:max-h-[100vh] xl:max-h-[100vh] body-font overflow-hidden">
  <div className="container  px-5 py-24 mx-auto">
    <div className=" mx-auto flex  lg:flex-nowrap">
  
 <section className="w-[50%]  text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="  flex -m-4">
          {/* Thumbnails */}
          <div className="w-[200px]  p-4 flex flex-col space-y-4">
            {thumbnails.map((src, index) => (
              <img
                key={index}
                alt="gallery"
                className="w-full h-32 object-cover object-center rounded cursor-pointer"
                src={src}
                onClick={() => setLargeImage(src)}
              />
            ))}
          </div>
          {/* Large Image */}
          <div className="w-full  p-4">
            <img
              alt="gallery"
              className="w-full h-[350px] object-cover object-center rounded"
              src={largeImage}
            />
          </div>
        </div>
      </div>
    </section>

      <div className=" w-[50%]  lg:pl-10 pt-20 lg:py-6  lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-base">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
        </p>
        <div className="flex  items-center  justify-start pb-5 border-b-2 border-gray-100 mb-5  sm:flex-row">
          <div className="flex items-center h-10   sm:mb-0">
            <span className="mr-3 text-xs sm:text-sm md:text-base">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-4 h-4 sm:w-6 sm:h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-4 h-4 sm:w-6 sm:h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-4 h-4 sm:w-6 sm:h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6  items-center">
            <span className="mr-3 text-xs sm:text-sm md:text-base">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs sm:text-base md:text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className='w-full flex justify-between items-center' >
            <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 lg:mt-0">
            Add to Cart
          </button>
            </div>
          <button className="flex ml-2 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 lg:mt-0">
            Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  );
};

export default DetailedProductCardComp;
