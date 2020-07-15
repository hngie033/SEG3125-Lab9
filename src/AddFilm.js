import React, {Component} from 'react'

class AddFilm extends Component{
    state = {
        name: null,
        violence: null,
        sex: null,
        profanity: null,
        image: null,
        imdB: null
    }
    handleChange = (e) => {
        this.setState({
            name: document.getElementById("title").value + " (" + document.getElementById("year").value + ")",
            violence: document.getElementById("violence").checked,
            sex: document.getElementById("sex").checked,
            profanity: document.getElementById("profanity").checked,
            image: document.getElementById("image").value,
            imdB: document.getElementById("imdB").value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        var title = document.forms["newReview"]["title"].value;
        if(title == ""){
            document.getElementById("titleError").innerHTML = "*PLEASE ENTER A FILM TITLE.";
        }else{
            document.getElementById("titleError").innerHTML = "";
        }
        var year = document.forms["newReview"]["year"].value;
	    var yearFormat = /^\d{4}$/;
	    if(!(year.match(yearFormat))){
		    document.getElementById("yearError").innerHTML = "*PLEASE ENTER A YEAR.";
	    }else{
		    document.getElementById("yearError").innerHTML = "";
	    }
        var image = document.forms["newReview"]["image"].value;
        if(image == ""){
            document.getElementById("imageError").innerHTML = "*PLEASE ENTER A VALID IMAGE URL.";
        }else{
            document.getElementById("imageError").innerHTML = "";
        }
        var imdB = document.forms["newReview"]["imdB"].value;
        if(imdB == ""){
            document.getElementById("imdBError").innerHTML = "*PLEASE ENTER A VALID IMDB URL.";
        }else{
            document.getElementById("imdBError").innerHTML = "";
        }
        var explain = document.forms["newReview"]["explain"].value;
        if(explain == ""){
            document.getElementById("explainError").innerHTML = "*PLEASE EXPLAIN THE VIOLENCE, SEX, OR PROFANITY, OR LACK THEREOF, IN THE FILM.";
        }else{
            document.getElementById("explainError").innerHTML = "";
        }
        if(title != "" && year.match(yearFormat) && image != null && imdB != null && explain != ""){
            this.props.addFilm(this.state);
            console.log(explain);
            document.getElementById("title").value = "";
            document.getElementById("year").value = "";
            document.getElementById("image").value = "";
            document.getElementById("imdB").value = "";
            document.getElementById("violence").checked = false;
            document.getElementById("sex").checked = false;
            document.getElementById("profanity").checked = false;
            document.getElementById("explain").value = "";
            document.getElementById("newSubmitted").innerHTML = "THANK YOU FOR YOUR SUBMISSION! IT WILL BE REVIEWED BY OUR MODERATORS SHORTLY.";
        }else{
            document.getElementById("newSubmitted").innerHTML = "";
        }
    }
    render(){
        return(
            <div id="review">
                <h4><img src="images/icons8-hand-with-pen-50.png"></img> Review a film</h4>
                <form name="newReview" onSubmit={this.handleSubmit}>
                    <h5>What is the title of the film?</h5>
                    <input type="text" id="title" onChange={this.handleChange} title="Please enter the film title as accurately as possible."/>
                    <w id="titleError"></w><br/><br/>
                    <h5>What year was the film first released?</h5>
                    <input type="text" id="year" onChange={this.handleChange} title="Please enter the year in which the film was first released."/>
                    <w id="yearError"></w><br/><br/>
                    <h5>Please provide a URL to the theatrical poster</h5>
                    <input type="text" id="image" onChange={this.handleChange} title="Please enter a valid image URL."/>
                    <w id="imageError"></w><br/><br/>
                    <h5>Please provide a URL to the imdB page</h5>
                    <input type="text" id="imdB" onChange={this.handleChange} title="Please enter a valid imdB URL."/>
                    <w id="imdBError"></w><br/><br/>
                    <h5>Which of the following does this film contain?</h5>
                    <input type="checkbox" id="violence" onChange={this.handleChange} name="violence" value="violence" title="Violence: any harsh fighting or significant display of internals from any living organism."/>
                    <label for="violence" title="Violence: any harsh fighting or significant display of internals from any living organism."> Violence</label><br/>
                    <input type="checkbox" id="sex" onChange={this.handleChange} name="sex" value="sex" title="Sex: any nudity or depiction, simulation, or explicit description of sexual intercourse."/>
                    <label for="sex" title="Sex: any nudity or depiction, simulation, or explicit description of sexual intercourse."> Sex</label><br/>
                    <input type="checkbox" id="profanity" onChange={this.handleChange} name="profanity" value="profanity" title="Profanity: any explicit language or significant curse."/>
                    <label for="profanity" title="Profanity: any explicit language or significant curse."> Profanity</label><br/><br/>
                    <h5>Please explain why you checked the boxes above:</h5>
                    <textarea id="explain" name="explanation" rows="4" cols="50" title="Please explain how the film contains or does not contain violence, sex, or profanity."></textarea>
                    <w id="explainError"></w><br/><br/>
                    <button class="button">Submit</button>
                    <p class="text-primary" id="newSubmitted"></p><br/>
                </form>
            </div>
        )
    }
}

export default AddFilm