function ExperiencePrev({company, position, mainTasks, startDateOfWork, endDateOfWork, setPreview}){
    return(
        <div className="section">
            <h2 className="section-title">Experience Preview</h2>
            <div className="space-y-1">
                <p><span className="muted">Company Name:</span> {company || '—'}</p>
                <p><span className="muted">Position Title:</span> {position || '—'}</p>
                <p><span className="muted">Main Tasks:</span> {mainTasks || '—'}</p>
                <p><span className="muted">Start Date of Work:</span> {startDateOfWork || '—'}</p>
                <p><span className="muted">End Date of Work:</span> {endDateOfWork || '—'}</p>
            </div>
            <div className="pt-3">
                <button className="btn-secondary" onClick={()=>setPreview(false)}>Edit</button>
            </div>
        </div>
    )
}

export default ExperiencePrev;