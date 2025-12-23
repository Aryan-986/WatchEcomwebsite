import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      // Reset selection when switching products
      setSelectedModel('');
    }
  }, [productId, products]);

  // Check if admin has added models. If yes, user MUST select one to enable the button.
  const hasModels = productData?.models && productData.models.length > 0;
  const isButtonDisabled = hasModels && !selectedModel;

  const discount =
    productData?.oldPrice && productData.oldPrice > productData.price
      ? Math.round(((productData.oldPrice - productData.price) / productData.oldPrice) * 100)
      : null;

  return productData ? (
    <div className="border-t-2 pt-32 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* --- Product Images --- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2">
            {productData.image.map((item, index) => (
              <div
                key={index}
                onClick={() => setImage(item)}
                className="aspect-square w-[24%] sm:w-full sm:mb-3 cursor-pointer relative rounded-md overflow-hidden border border-gray-300"
              >
                <img src={item} alt="" className="object-cover w-full h-full hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
          <div className="w-full sm:w-[80%] aspect-square relative rounded-md overflow-hidden border border-gray-300">
            <img src={image} alt="" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* --- Product Info --- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="mt-5 flex items-center gap-3">
            {productData.oldPrice && (
              <span className="text-gray-500 line-through text-lg">{currency}{productData.oldPrice}</span>
            )}
            <span className="text-3xl font-medium text-red-600">{currency}{productData.price}</span>
            {discount && <span className="text-green-600 text-lg font-semibold">{discount}% OFF</span>}
          </div>

          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* --- Model Selection (Conditional) --- */}
          {hasModels && (
            <div className="my-6">
              <p className="block mb-2 font-semibold text-gray-700">Select Model <span className="text-red-500">*</span></p>
              <div className="flex gap-2 flex-wrap">
                {productData.models.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedModel(item)}
                    className={`px-4 py-2 text-sm rounded-md border transition-all ${
                        selectedModel === item ? 'bg-black text-white border-black' : 'bg-white border-gray-300 hover:border-black'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* --- Color Selection --- */}
          {productData.colors && productData.colors.length > 0 && (
            <div className="my-4">
              <p className="block mb-2 font-semibold text-gray-700">Select Color</p>
              <div className="flex gap-2 flex-wrap">
                {productData.colors.map((color, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border text-sm ${selectedColor === color ? 'bg-black text-white border-black' : 'bg-gray-100'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* --- Add to Cart Button --- */}
          <button
            onClick={() => addToCart(productData._id, selectedModel)}
            disabled={isButtonDisabled}
            className={`px-8 py-3 text-sm mt-4 transition-all ${
                isButtonDisabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-black text-white active:bg-gray-700 hover:opacity-90'
            }`}
          >
            {isButtonDisabled ? "PLEASE SELECT A MODEL" : "ADD TO CART"}
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Products Available on Nepliz Store.</p>
            <p>Cash on delivery is available on this product.</p>
          </div>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;