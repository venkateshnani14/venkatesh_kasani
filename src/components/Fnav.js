export const FloatingNavbar = ({updateOptionsFromChild,selectedOption}) => {
    return (
       <div>
        {/* the options should be configurable customized to each page. */}
        {/* MAKE THESE A COMPONENT AND REUSE IT FOR BETTER CODE */}
        <div className="flex flex-col items-end">
        <div className="flex items-center">
            <span className="bg-white px-2 py-1 text-xs h-full text-black rounded cursor-pointer" onClick={() => {
              updateOptionsFromChild(!selectedOption,"issue");
            }}>
              Report an issue
            </span>
            <img src="/images/flag.png" className="ml-2 h-12 w-12 md:h-15 md:w-15" />
        </div>
        </div>

        <div className="flex flex-col items-end">
        <div className="flex items-center">
          <span className="bg-white px-2 py-1 text-xs h-full text-black rounded cursor-pointer" onClick={() => updateOptionsFromChild(!selectedOption,"feedback")}>
            Share feedback
          </span>
          <img src="/images/feedback.png" className="ml-2 h-12 w-12 md:h-15 md:w-15"/>
        </div>
        </div>

        <div className="flex flex-col items-end">
        <div className="flex items-center">
          <span className="bg-white px-2 py-1 text-xs h-full text-black rounded cursor-pointer" onClick={() => updateOptionsFromChild(!selectedOption,"suggestion")}>
            Give suggestion
          </span>
          <img src="/images/suggestions.png" className="ml-2 h-12 w-12 md:h-15 md:w-15"/>
        </div>
        </div>

        <div className="flex flex-col items-end">
        <div className="flex items-center">
          <span className="bg-white px-2 py-1 text-xs h-full text-black rounded cursor-pointer" onClick={() => updateOptionsFromChild(!selectedOption,"contact")}>
            Contact us
          </span>
          <img src="/images/chat.png" className="ml-2 h-12 w-12 md:h-15 md:w-15" />
        </div>
        </div>
      </div>
    )
}
export const HorizontalFnav = () => {
  return(
    <div className="flex">
        <img src="/images/chat.png" className="h-14 w-14" />
        <img src="/images/suggestions.png" className=" h-14 w-14"/>
        <img src="/images/feedback.png" className="h-14 w-14"/>
        <img src="/images/flag.png" className="h-14 w-14" />
      </div>
  )
}