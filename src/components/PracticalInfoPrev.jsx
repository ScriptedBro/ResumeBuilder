function PracticalInfoPrev({school, study, startDateOfStudy, endDateOfStudy, setPreview}){
    return(
        <div className="section">
            <h2 className="section-title">Practical Information</h2>
            <div className="space-y-1">
                <p><span className="muted">School Name:</span> {school || '—'}</p>
                <p><span className="muted">Field of Study:</span> {study || '—'}</p>
                <p><span className="muted">Start Date of Study:</span> {startDateOfStudy || '—'}</p>
                <p><span className="muted">End Date of Study:</span> {endDateOfStudy || '—'}</p>
            </div>
            <div className="pt-3">
                <button className="btn-secondary" onClick={()=>setPreview(false)}>Edit</button>
            </div>
        </div>
    )
}

export default PracticalInfoPrev;