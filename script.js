function Header(){
    return <div style = {{width : "100%",height : "100%"}}>
        <h1>Rushikesh Dhanawade</h1>
        <p>Software Developer</p>
        <div style = {{width : "120px",display : "flex",justifyContent : "space-between"}}>
        <a href = "#">LinkedIn</a>
        <a href = "#">Github</a>
        </div>
        <hr/>
    </div>
}
function Experience(){
    return <div>
        <h3>Experience</h3>
        <h4>Software Developer at XYZ</h4>
        <p>I work with amazon in transportation team, some more description Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam! Maxime officiis consequuntur libero eaque reprehenderit quisquam nam ab vitae totam id commodi laborum enim, sint ea odit quasi soluta!
            <br/>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident iusto ut praesentium modi. Incidunt atque voluptatem, dignissimos officiis reprehenderit est!</p>
             <hr/>
             <div>
        <h3>Educator at XYZ</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cum inventore aliquam, nulla eos dignissimos ipsum voluptas id, dolores suscipit totam nostrum perferendis alias, expedita quaerat distinctio asperiores! Nobis, 
            aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa ab qui autem nesciunt vel consequatur non totam, temporibus excepturi voluptatem iure impedit ut repellendus earum necessitatibus nemo eligendi, animi 
            debitis reiciendis suscipit. Unde iure obcaecati dolores, numquam quibusdam rerum facilis a quam quos ad ullam consectetur reiciendis deserunt similique.</p>
            <hr />
    </div>
    </div>

}
function Skills(){
    return <div>
        <h3>Skills</h3>
        <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Testing</li>
            <li>API Designing</li>
            <li>System Design</li>

        </ul>
        <hr />
    </div>

}
function Hobbies(){
    return <div>
        <h3>Hobbies</h3>
    <ol>
        <li>Table Tennis</li>
        <li>Reading Books</li>
        <li>Biography</li>
        <li>Teaching</li>

    </ol>
    </div>

}
function Resume(){
    return <div>
        <Header />
        <Experience />
        <Skills />
        <Hobbies />
        
    </div>
}
ReactDOM.render(<Resume/>,document.getElementById('root'))
