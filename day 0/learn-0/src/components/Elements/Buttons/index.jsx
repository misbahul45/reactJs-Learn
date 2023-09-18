function Button(props){
    const {classname="bg-cyan-700", content="Button"}=props
    return(
      <button className={`${classname} text-white font-sans font-bold ms-2 px-6 py-2 shadow-lg rounded-lg`}>{content}</button>
    ) 
  }
  export default Button;