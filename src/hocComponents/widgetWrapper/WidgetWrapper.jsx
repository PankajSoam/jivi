const WidgetWrapper = ({children, title, primaryBtn,secondaryBtn}) => {
    return <div >
        <div className="h-10 px-6 py-2 font-bold text-base border-b-2 flex items-center ">
            {title}
        </div>
        <div className="p-6">
        {children}

        </div>
        
<div className="flex gap-4 w-full p-6 justify-center">
    {secondaryBtn && (
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md w-2/5 h-[70px]"
            onClick={()=>secondaryBtn?.onClick()}
        >
          {secondaryBtn?.label}
        </button>
      )}
      {primaryBtn && (
        <button
          className={`${primaryBtn?.disabled ? 'bg-gray-300' :'bg-blue-500' }  text-white px-4 py-2 rounded-md h-[70px] ${secondaryBtn? 'w-2/5' :'w-full'}`}
            onClick={()=>{ 
                if(primaryBtn.disabled){
                    return
                }
                primaryBtn?.onClick()
            }}
        >
          {primaryBtn?.label}
        </button>
      )}
      
    </div>

        </div>
}
export default WidgetWrapper