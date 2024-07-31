import { PiGenderNeuterFill } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";

const SelectDropDown = ({options, value, onSelect,toggleDropDown, dropDownVisible}) => {
    return <div className="">
        <div className="bg-greyflex p-4 bg-gray-100 rounded-lg justify-between flex items-center" onClick={()=>toggleDropDown()}>
            <div className="flex">
                <PiGenderNeuterFill style={{ height: '24px', width: '24px' }}/>
                <p className="ml-2">{value}</p>
            </div>
            <FaChevronDown />
        </div>
        {dropDownVisible&&<div>
            {options?.length && options.map((option,index)=>{
                return <p className="p-2 bg-gray-300" 
                key={`${option+index}`}
                onClick={()=>{
                    toggleDropDown()
                    onSelect(option)}}>
                    {option}</p>
            })}
            </div>}

        
    </div>
}
export default SelectDropDown