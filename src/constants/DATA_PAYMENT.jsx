export const DATA_EWALLET = [
    { 
      id: 'gopay', 
      name: 'GoPay', 
      iconComponent: () => (
        <div className="w-8 h-8 bg-blue-400 rounded-md flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="#00AED6">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
        </div>
      )
    },
    { 
      id: 'ovo', 
      name: 'OVO', 
      iconComponent: () => (
        <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-purple-700 rounded-full border-2 border-white"></div>
        </div>
      )
    },
    { 
      id: 'dana', 
      name: 'DANA', 
      iconComponent: () => (
        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="#0081FF">
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
          </svg>
        </div>
      )
    }
  ]

export const DATA_BANK_TRANSFER = [
    { 
      id: 'bca', 
      name: 'BCA', 
      iconComponent: () => (
        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
          <div className="text-blue-800 font-bold text-xs">BCA</div>
        </div>
      )
    },
    { 
      id: 'mandiri', 
      name: 'MANDIRI', 
      iconComponent: () => (
        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
          <div className="text-yellow-500 font-bold text-xs">MDR</div>
        </div>
      )
    },
    { 
      id: 'bri', 
      name: 'BRI', 
      iconComponent: () => (
        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
          <div className="text-blue-600 font-bold text-xs">BRI</div>
        </div>
      )
    },
    { 
      id: 'cimb', 
      name: 'CIMB', 
      iconComponent: () => (
        <div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
          <div className="text-red-600 font-bold text-xs">CIMB</div>
        </div>
      )
    },
    { 
      id: 'bni', 
      name: 'BNI', 
      iconComponent: () => (
        <div className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center">
          <div className="text-orange-500 font-bold text-xs">BNI</div>
        </div>
      )
    }
  ]