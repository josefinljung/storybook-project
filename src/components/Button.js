import PropTypes from "prop-types"

function Button ({label, backgroundColor = "lightgreen", size="sm", width="200px", handleClick}) {
    let scale = 1
    if (size === "md") scale = 3.75
    if (size === "lg") scale = 5.5
    const style = {
        backgroundColor,
        width,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    }
    return (
        <button onClick={handleClick} style={style}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    width: PropTypes.oneOf(["250px", "300px", "500px"]),
    onClick: PropTypes.func,
}

export default Button


// import PropTypes from "prop-types"

// function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
//   let scale = 1
//   if (size === "sm") scale = 0.75
//   if (size === "lg") scale = 1.5
//   const style = {
//     backgroundColor,
//     padding: `${scale * 0.5}rem ${scale * 1}rem`,
//     border: "none",
//   }
//   return (
//     <button onClick={handleClick} style={style}>
//       {label}
//     </button>
//   )
// }

// Button.propTypes = {
//   label: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   handleClick: PropTypes.func,
// }

// export default Button