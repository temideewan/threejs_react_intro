import PropTypes from "prop-types"
import state from "../store"
import { getContrastingColor } from "../config/helpers"
import { useSnapshot } from "valtio"
import { useState } from "react"

const CustomButton = ({title, type, customStyles,handleClick}) => {
  const snap = useSnapshot(state);
  const [isHovered, setIsHovered] = useState(false);
  const generateStyle = (type) => {
    if(type == 'filled') {
      return {
        backgroundColor: snap.color,
        color: isHovered? '#fff': getContrastingColor(snap.color),
      }
    } else if(type == 'outlined') {
      return { 
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color
      }
    }
  }
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles} ${type == 'filled' && 'myButton'}`}
      style={ generateStyle(type)}
      onClick={handleClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </button>
  )
}

CustomButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['filled', 'outlined']),
  customStyles: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}

export default CustomButton
