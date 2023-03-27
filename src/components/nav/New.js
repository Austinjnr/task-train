import Create from "./Create"

function New() {
    return (  
        <section className='nav-text'> 
            <div className="card text-center mb-3" style = {{width: "50rem", margin: "0 auto"}}>
                <div className="card-body">
                    <Create />
                </div>
            </div>
        </section>
    );
}

export default New;