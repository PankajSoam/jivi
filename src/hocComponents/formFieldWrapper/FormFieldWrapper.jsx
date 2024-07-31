const FromFieldWrapper = ({children, label, required, showError, className})=>{
    return <div className={className}>
        <div className="font-semibold text-sm mb-2">{label}{required&&<span className="text-red-600">*</span>}</div>
        <div>
            {children}
        </div>
        {showError && <div className="text-red-600 text-xs">This Field is required</div>}
    </div>
}
export default FromFieldWrapper