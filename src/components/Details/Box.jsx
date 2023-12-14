const Box = ({img,title,children}) => {
    return ( 
        <div>
            <img src={img} alt=""/>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
     );
}
 
export default Box;