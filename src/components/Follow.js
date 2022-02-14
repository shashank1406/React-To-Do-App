import { useState } from "react"

const Follow = () => {
    const [bgColour, setBgColour] = useState("skyblue")
    const [value, setValue] = useState("follow")
    const[valueb2,setValueb2]= useState("unFollow")

    const onClickChange = () => {
        setBgColour(bgColour==="skyblue"?"blue":"skyblue")
        setValue(value==="follow"?"followed":"follow")
    }
    const onClickChangeb2 =()=>{
        setValue("follow")
        setBgColour("skyblue")
    }
   

    return (
        <div className="counterCss">

            <input type="button" value={value} onClick={onClickChange} style={{ borderColor: bgColour }} id="followButton" /><br/><br/>
           {value==="followed" && <input type="button" value={valueb2} onClick={onClickChangeb2} style={{ borderColor: bgColour }} id="unfollowButton" />}
        </div>
    )
}

export default Follow
