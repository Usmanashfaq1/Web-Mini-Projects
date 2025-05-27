// event propagation in react

const PropagationBox= ()=>
{

    // function must be passed in onClick handler not called ! in it
    // this default bubbling propagation of event in react
    // child to parent
    return(
        <div onClick={()=>alert("div clicked!")}>
            <button onClick={(e)=>{
                e.stopPropagation(); // here stop propagation to parent
                alert("button clicked!");}}></button>
        </div>

    );

}

export default PropagationBox;


// | Term              | Description                                 |
// | ----------------- | ------------------------------------------- |
// | **Bubbling**      | Event goes from child → parent (default)    |
// | **Capturing**     | Event goes from parent → child (optional)   |
// | `stopPropagation` | Stops event from moving further in bubbling |
// | `onClickCapture`  | Used for capture phase in React             |
 

// instead of using bubbling
// one should use explicit propagation
// stop bubbling pass parent on click in child on click! done