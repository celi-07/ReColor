import { createContext, useState } from 'react'

export const CheckoutContext = createContext()

export const CheckoutProvider = ({ children }) => {
  const [checkoutItems, setCheckoutItems] = useState([])
  const [checkoutCount, setCheckoutCount] = useState(1)

  const addItem = (product) => {
    setCheckoutItems(prev => {
      const existing = prev.find(item => item.id === product.id)

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, checked: true, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prev, { ...product, checked: true, quantity: 1 }]
      }
    })
  }

  const removeItem = (id) => {
    setCheckoutItems(prev => prev.filter(item => item.id !== id))
  }

  const toggleItem = (id) => {
    setCheckoutItems(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item))
  }

  const updateQuantity = (id, increment) => {
    const quantity = checkoutItems.find(item => item.id === id)?.quantity

    if (!quantity) return

    if (quantity === 1 && !increment) {
      removeItem(id)
      return
    }

    setCheckoutItems(prev => prev.map(product => 
      product.id === id ? 
        { ...product, quantity: product.quantity + (increment ? 1 : -1) } : 
        product
    ))
  }

  const toggleAllItems = () => {
    const allChecked = checkoutItems.every(item => item.checked)
    setCheckoutItems(prev => prev.map(item => ({ ...item, checked: !allChecked })))
  }

  const uncheckAllItems = () => {
    setCheckoutItems(prev => prev.map(item => ({ ...item, checked: false })))
  }

  const allSelected = () => {
    return checkoutItems.every(item => item.checked)
  }

  const clearItems = () => {
    setCheckoutItems([])
  }

  const addCount = () => {
    setCheckoutCount(prev => prev + 1)
  }

  return (
    <CheckoutContext.Provider value={{ addCount, checkoutCount, checkoutItems, allSelected, addItem, removeItem, toggleItem, updateQuantity, clearItems, toggleAllItems, uncheckAllItems }}>
      {children}
    </CheckoutContext.Provider>
  )
}