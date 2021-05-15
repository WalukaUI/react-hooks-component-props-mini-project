
function About({
    link="https://via.placeholder.com/215",
    text
}
    ){
    return(
        <aside>
           <img src={link}  alt={"blog logo"}></img> 
           <p>{text}</p>
        </aside>
    )
}

export default About