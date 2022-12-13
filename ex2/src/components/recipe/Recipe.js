import './recipe.css'
/**
 * title : string
 * description : string
 * image : {url:string, alt:str}
 * isDone : boolean
 * buttonClickCb : function
 */
function Recipe({ image, title, description, id, isDone, buttonClickCb }) {
    const textButton = isDone ? "EAT" : "PREPARE"
    return (
        <div className="Recipe">
            <img className='img' src={image.url} alt={image.alt} />
            <div>{title}</div>
            <div>{description}</div>
            <div>{id}</div>
            <button onClick={() => {
                buttonClickCb(id)
            }}>{textButton}</button>
        </div>
    );
}

export default Recipe;