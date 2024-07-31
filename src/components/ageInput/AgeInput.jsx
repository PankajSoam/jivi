import React, { useState, useRef, useEffect, useContext } from 'react';
import WidgetWrapper from '../../hocComponents/widgetWrapper/WidgetWrapper';
import { vitalsFormContext } from '../../App';

const AgeInput = ({primaryCtaHandler}) => {
  const [selectedAge, setSelectedAge] = useState(1);
  const ageRef = useRef();

  const vitals = useContext(vitalsFormContext)

  useEffect(() => {
    if (ageRef.current) {
      ageRef.current.scrollTo(0, (selectedAge - 1) * 60);
    }
  }, [selectedAge]);


  const getFontClass = (selectedNumber,currentNumber)=>{
    if(selectedNumber-currentNumber==1 || selectedNumber-currentNumber==-1 ){
      return 'text-6xl font-extrabold'
    }
  }

  const handleScroll = (e) => {
    const offsetTop = e.target.scrollTop;
    const itemHeight = 60; 
    const age = Math.round(offsetTop / itemHeight) + 1; 
    setSelectedAge(age);
  };

  const handleNextClick = ()=>{
    primaryCtaHandler()
    vitals?.onChangeHandler({
      age: selectedAge
    })
  }



  const ages = Array.from({ length: 100 }, (_, i) => i + 1);

  return ( <WidgetWrapper title="Details" primaryBtn={{label:"Next", onClick:handleNextClick}} >
          <div className="text-3xl font-extrabold mb-12">What is your age?</div>
          <div className="flex flex-col items-center justify-center">
            <div
              className="relative h-80 w-40 text-center overflow-hidden"
            >
              <div
                className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 pointer-events-none border-blue-400 rounded-2xl border-8"
                style={{ height: '144px' }} // This is the height of one item
              >
                <div
                  className="bg-blue-500 font-extrabold text-8xl  text-white text-3xl flex items-center justify-center h-full rounded-md p-2"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {selectedAge}
                </div>
              </div>
              <div
                className="overflow-y-scroll h-full w-full no-scrollbar"
                onScroll={handleScroll}
                ref={ageRef}
                style={{ scrollSnapType: 'y mandatory', paddingTop: '120px', paddingBottom: '120px' }}
              >
                {ages.map((age) => (
                  <div
                    key={age}
                    className={`py-4 flex items-center justify-center ${
                      age === selectedAge ? 'opacity-0 my-9' : ''
                    } ${getFontClass(selectedAge,age)} text-gray-500`}
                    style={{ scrollSnapAlign: 'center', height: '60px', transition: 'opacity 0.3s ease' }}
                  >
                    {age}
                  </div>
                ))}
              </div>
            </div>
          </div>
    </WidgetWrapper>
  );
};

export default AgeInput;