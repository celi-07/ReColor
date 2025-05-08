import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckoutContext } from '../context/CheckoutContext'
import { DATA_BANK_TRANSFER, DATA_EWALLET } from '../constants/DATA_PAYMENT.jsx'
import ChaChing from '../assets/sound/ChaChing.mp3'
import PopUpCheckout from '../components/PopUpCheckout.jsx'

const CheckoutPage = ({ width }) => {
  const { addCount, allSelected, checkoutItems, clearItems, updateQuantity, toggleItem, toggleAllItems } = useContext(CheckoutContext)
  
  const navigate = useNavigate()
  
  const [usePoints, setUsePoints] = useState(false)
  const [choosePayment, setChoosePayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('GoPay')
  const [popupStatus, setPopupStatus] = useState(null)

  // Calculate totals for selected products only
  const selectedProducts = checkoutItems.filter(product => product.checked)
  const subtotal = selectedProducts.reduce((sum, product) => sum + (product.priceInt * product.quantity), 0)
  const shipping = selectedProducts.length > 0 ? 10000.00 : 0
  const insurance = selectedProducts.length > 0 ? 8000.00 : 0
  const voucher = selectedProducts.length > 0 ? -10000.00 : 0
  const total = subtotal + shipping + insurance + voucher - (usePoints ? 23480 : 0)

  const audio = new Audio(ChaChing)

  const handleCheckout = () => {
    setPopupStatus('loading')
    
    setTimeout(() => {
      setPopupStatus('success')
      audio.currentTime = 0
      audio.play().catch(() => {})
    }, 2000)
  }

  const handleClosePopup = () => {
    setPopupStatus(null)
    addCount()
    clearItems()
    navigate('/')
    window.scrollTo(0, 0)
  }

  const PaymentOption = ({ name, IconComponent }) => (
    <div 
      className="bg-pink-50 rounded-3xl p-5 mb-4 flex justify-between items-center cursor-pointer hover:bg-pink-100 transition-colors"
      onClick={() => {
        setChoosePayment(false)
        setPaymentMethod(name)
      }}
    >
      <div className="flex items-center">
        <div className='mr-4'>
          <IconComponent />
        </div>
        <span className="text-teal-600 text-xl font-medium">{name}</span>
      </div>
      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )

  return (
    <div className="min-h-screen bg-lightPink p-6 font-maurenTrial">
      {/* Header with back button and icons */}
      <div className="flex justify-between items-center mb-12">
        <button className="text-turqoise flex items-center font-medium" onClick={() => navigate(-1)}>
          <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          BACK
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 font-maurenTrial">
        {/* Products Column */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium text-turqoise">PRODUCTS</h2>
            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="selectAll" 
                className="w-5 h-5 border-turqoise accent-turqoise" 
                checked={allSelected()}
                onChange={toggleAllItems}
              />
              <label htmlFor="selectAll" className="ml-2 text-turqoise">
                Select All Items
              </label>
            </div>
          </div>
          
          <div className="space-y-6">
            {checkoutItems.map(product => (
              <div key={product.id} className="flex items-center">
                <div className="flex items-center mr-2">
                  <input 
                    type="checkbox" 
                    id={`product-${product.id}`} 
                    className="w-5 h-5 border-turqoise accent-turqoise" 
                    checked={product.checked}
                    onChange={() => toggleItem(product.id)}
                  />
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-turqoise font-medium">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                  <p className="text-turqoise mt-2 font-focus">{product.price.toLocaleString()}</p>
                  
                  <div className="flex items-center mt-2">
                    <button 
                      className="w-6 h-6 border border-turqoise text-turqoise flex items-center justify-center"
                      onClick={() => updateQuantity(product.id, false)}
                    >
                      -
                    </button>
                    <span className="mx-3 font-focus">{product.quantity}</span>
                    <button 
                      className="w-6 h-6 border border-turqoise text-turqoise flex items-center justify-center"
                      onClick={() => updateQuantity(product.id, true)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!choosePayment ? (
          <div className="md:w-1/2">
            <div className="border border-turqoise rounded-3xl p-6 bg-white">
              <h2 className="text-2xl font-medium text-turqoise mb-8">SUMMARY</h2>
              
              {/* Selected Items Summary */}
              <div className="mb-6">
                <h3 className="text-turqoise font-medium mb-3 flex items-center gap-1">SELECTED ITEMS (<h3 className='font-focus'>{selectedProducts.length}</h3>)</h3>
                <div className="text-sm text-gray-600 mb-4">
                  {selectedProducts.length === 0 ? (
                    <p className='font-focus'>No items selected</p>
                  ) : (
                    selectedProducts.map(product => (
                      <div key={product.id} className="flex justify-between mb-1 font-focus pr-4">
                        <span>{product.name} (x{product.quantity})</span>
                        <span>Rp {(product.priceInt * product.quantity).toLocaleString()}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
              
              {/* Shipment Section */}
              <div className="mb-6">
                <h3 className="text-turqoise font-medium mb-3">SHIPMENT</h3>
                <div className="border border-turqoise rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-gray-500">Address</h4>
                    <p className="text-sm font-focus">Jalan K. H. Juanda No.1, Kelurahan Paledang, Kecamatan Kota Bogor Tengah, Kota Bogor, Propinsi Jawa Barat</p>
                  </div>
                  <svg className="w-5 h-5 text-turqoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Voucher Section */}
              <div className="mb-6">
                <h3 className="text-turqoise font-medium mb-3">VOUCHER</h3>
                <div className="border border-turqoise rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">1 Voucher Applied</h4>
                    <p className="text-sm text-turqoise font-focus">You saved Rp 10,000</p>
                  </div>
                  <svg className="w-5 h-5 text-turqoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Payment Section */}
              <div className="mb-6">
                <h3 className="text-turqoise font-medium mb-3">PAYMENT</h3>
                <div className="space-y-2">
                  <div className="flex justify-between pr-4">
                    <span>Products</span>
                    <span className='font-focus'>Rp {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pr-4">
                    <span>Shipment</span>
                    <span className='font-focus'>Rp {shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pr-4">
                    <span>Insurance</span>
                    <span className='font-focus'>Rp {insurance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pr-4">
                    <span>Voucher</span>
                    <span className="text-red-500 font-focus">-Rp {Math.abs(voucher).toLocaleString()}</span>
                  </div>
                  {usePoints && (
                    <div className="flex justify-between pr-4">
                      <span>Points</span>
                      <span className="text-red-500 font-focus">-Rp 23,480</span>
                    </div>
                  )}
                  <div className="border border-turqoise rounded-xl p-3 flex justify-between mt-3 pr-4">
                    <span>Total</span>
                    <span className='font-focus'>Rp {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Payment Options */}
              <div className="mb-6" onClick={() => setChoosePayment(true)}>
                <div className="border border-turqoise rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-turqoise">Payment Options</h4>
                    <p className="text-sm font-focus">{paymentMethod}</p>
                  </div>
                  <svg className="w-5 h-5 text-turqoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Use Points */}
              <div className="mb-8 flex items-start">
                <input 
                  type="checkbox" 
                  id="usePoints" 
                  className="w-5 h-5 border-turqoise accent-turqoise" 
                  checked={usePoints}
                  onChange={() => setUsePoints(!usePoints)}
                  disabled={selectedProducts.length === 0}
                />
                <label htmlFor="usePoints" className="ml-2 flex-1">
                  <span className="text-turqoise font-medium">Use Points</span>
                  <span className="text-sm ml-2 font-focusItalic">You have 23,480 pt</span>
                </label>
              </div>
              
              {/* Checkout Button */}
              <button 
                className={`${
                  selectedProducts.length > 0 
                    ? 'bg-turqoise hover:bg-teal-700' 
                    : 'bg-gray-400 cursor-not-allowed'
                } text-white py-3 px-6 rounded-md w-full transition`}
                onClick={handleCheckout}
                disabled={selectedProducts.length === 0}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        ) : (
          <div className="min-h-screen bg-turqoise p-8 rounded-3xl md:w-1/2">
            <div className="max-w-md mx-auto py-8">
              {/* E-Wallet Section */}
              <h2 className="text-4xl font-bold text-white mb-6">E-WALLET</h2>
              <div className="mb-12">
                {DATA_EWALLET.map(wallet => (
                  <PaymentOption 
                    key={wallet.id} 
                    name={wallet.name} 
                    IconComponent={wallet.iconComponent} 
                  />
                ))}
              </div>

              {/* Bank Transfer Section */}
              <h2 className="text-4xl font-bold text-white mb-6">BANK TRANSFER</h2>
              <div>
                {DATA_BANK_TRANSFER.map(bank => (
                  <PaymentOption 
                    key={bank.id} 
                    name={bank.name} 
                    IconComponent={bank.iconComponent} 
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Popup */}
      <PopUpCheckout
        isOpen={popupStatus !== null}
        onClose={handleClosePopup}
        status={popupStatus}
        paymentMethod={paymentMethod}
      />
    </div>
  )
}

export default CheckoutPage