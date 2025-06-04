import './style/createblog.css'

export default function Createblog () {

    function onsub (e) {
        e.preventDefault()
    }

    return (
        <>
        <div className="createblog-block">
            <form onSubmit={onsub} className="theform">
            <div><h1>Create a blog</h1></div>

                <div className="filein">
                    Enter img : 
                    <input type="file" name="file" id="file" />
                </div>

                <div className="theheading ">
                    <input type="text" name="heading" placeholder='Heading' id="heading" />
                </div>

                <div className="para">
                    <textarea name="para" placeholder='' id="para"></textarea> 
                </div>

                <div className="btn">
                    <button>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}