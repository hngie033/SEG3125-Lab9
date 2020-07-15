import React from 'react'

const Films = ({films, deleteFilm}) => {
    const filmList = films.length ? (
        films.map(film =>{
            return(
                <div>
                    <a href={film.imdB} target="_blank"><img src={ film.image }/><br/></a>
                    <a href={film.imdB} target="_blank" class="notranslate">{film.name}</a>
                    <img src='./images/61848.png' onClick={() => {deleteFilm(film.name)}} title="Delete this entry."/><br/><br/>
                </div>
            )
        })
    ) : (
        <w>ERROR: Empty film catalogue.</w>
    )
    const violenceList = films.length ? (
        films.map(film =>{
            if(!film.violence == true){
                return(
                    <div>
                        <a href={film.imdB} target="_blank"><img src={ film.image }/><br/></a>
                        <a href={film.imdB} target="_blank" class="notranslate">{film.name}</a>
                        <img src='./images/61848.png' onClick={() => {deleteFilm(film.name)}} title="Delete this entry."/><br/><br/>
                    </div>
                )
            }
        })
    ) : (
        <w>ERROR: Empty film catalogue.</w>
    )
    const sexList = films.length ? (
        films.map(film =>{
            if(!film.sex == true){
                return(
                    <div>
                        <a href={film.imdB} target="_blank"><img src={ film.image }/><br/></a>
                        <a href={film.imdB} target="_blank" class="notranslate">{film.name}</a>
                        <img src='./images/61848.png' onClick={() => {deleteFilm(film.name)}} title="Delete this entry."/><br/><br/>
                    </div>
                )
            }
        })
    ) : (
        <w>ERROR: Empty film catalogue.</w>
    )
    const profanityList = films.length ? (
        films.map(film =>{
            if(!film.profanity == true){
                return(
                    <div>
                        <a href={film.imdB} target="_blank"><img src={ film.image }/><br/></a>
                        <a href={film.imdB} target="_blank" class="notranslate">{film.name}</a>
                        <img src='./images/61848.png' onClick={() => {deleteFilm(film.name)}} title="Delete this entry."/><br/><br/>
                    </div>
                )
            }
        })
    ) : (
        <w>ERROR: Empty film catalogue.</w>
    )
    return(
        <div className="films collection">
            <div id="accordion">
                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseAll"><h5>All films</h5></a>
                    </div>
                    <div id="collapseAll" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            {filmList}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseViolence"><h5>Films without violence</h5></a>
                    </div>
                    <div id="collapseViolence" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <b>Violence:</b> any harsh fighting or significant display of internals from any living organism.<br/><br/>
                            {violenceList}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseSex"><h5>Films without sex</h5></a>
                    </div>
                    <div id="collapseSex" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <b>Sex:</b> any nudity or depiction, simulation, or explicit description of sexual intercourse.<br/><br/>
                            {sexList}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseProfanity"><h5>Films without profanity</h5></a>
                    </div>
                    <div id="collapseProfanity" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <b>Profanity:</b> any explicit language or significant curse.<br/><br/>
                            {profanityList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Films;