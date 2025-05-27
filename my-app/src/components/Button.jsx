


//destrucing is very important concept js
const Button= ({onClick,children})=>
{

    
    
    return (
        <button onClick={onClick}>
           {children}
        </button>
    );
}

const Toolbar= ({onPlayMovie,onUploadImage})=>
{

    return (
        <div className="Toolbar">
    <Button onClick={onPlayMovie} >PlayMovie</Button>
    <br />
     <br />
    <Button onClick={onUploadImage} >UploadImage</Button>
    </div>
    );
    

}




export default Toolbar;