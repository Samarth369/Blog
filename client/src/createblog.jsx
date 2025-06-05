import './style/createblog.css'

export default function Createblog () {

    function onsub (e) {
        e.preventDefault()
        const formdata = new FormData(e.target)
        fetch('http://localhost:1000/createblog' , {
            method: 'POST',
            body: formdata
        })
        
        e.target[0].value = null
        e.target[1].value = null
        e.target[2].value = null
    }

    return (
        <>
        <div className="createblog-block">
            <form onSubmit={onsub} className="theform" enctype="multipart/form-data">
            <div><h1>Create a blog</h1></div>

                <div className="filein">
                    Enter img : 
                    <input type="file" name="file" id="file" />
                </div>

                <div className="theheading ">
                    <input type="text" name="Heading" placeholder='Here is the Blog title' id="heading" />
                </div>

                <div className="para">
                    <textarea name="para" placeholder='Here gos you Blogs' id="para"></textarea> 
                </div>

                <div className="btn">
                    <button>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}