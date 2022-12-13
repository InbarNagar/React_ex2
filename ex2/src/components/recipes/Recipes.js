import Recipe from "../recipe/Recipe";
// list : {Recipe}


function Recipes(props) {
    const isDoneList = props.list.filter(el=>el.isDone)
    const isNotDoneList = props.list.filter(el=>!el.isDone)

    return (
        <div className="Recipes">
            <h2>To Prepare</h2>
            {isNotDoneList.map(el=>{
                return (
                    <Recipe image={el.image} title={el.title} description={el.description} isDone={el.isDone} id={el.id} key={el.id} buttonClickCb={props.toggleIsDone}></Recipe>
                )
            })}
            <h2>To Eat</h2>
            {isDoneList.map(el=>{
                return (
                    <Recipe image={el.image} title={el.title} description={el.description} isDone={el.isDone} id={el.id} key={el.id} buttonClickCb={props.toggleIsDone}></Recipe>
                )
            })}
        </div>
    );
}
//            

export default Recipes;
