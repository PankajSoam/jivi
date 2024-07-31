import { createContext, useState } from 'react'
import VitalsForm from './containers/vitalsForm/VitalsForm'
import { initialVitalValues } from './constants/vitalsFormConstants'

export const vitalsFormContext = createContext()

function App() {
  const [vitalValues,setVitalValues] = useState(initialVitalValues)

  
  const updateVitalValues = (updatedValues)=>{
    const newVitalValues = {
                              ...vitalValues,
                              ...updatedValues
                            }
    setVitalValues(newVitalValues)
  }
  return (

      <div className=''>
        <vitalsFormContext.Provider value={{
                                            vitalValues,
                                            onChangeHandler:updateVitalValues
                                          }}>
          <VitalsForm/>
        </vitalsFormContext.Provider>
      </div>
  )
}

export default App
