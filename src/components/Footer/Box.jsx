const Box = ({title,children}) => {
    return ( 
        <div className="footer-box">
            <p>{title}</p>
            <div>
                {children}
            </div>
        </div>
     );
}
 
export default Box;