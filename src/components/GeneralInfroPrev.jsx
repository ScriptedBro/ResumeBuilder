function GeneralInfoPrev({name, email, phone, preview, setPreview}){
    return(
        <>
            {preview && <div className="section">
                <h2 className="section-title">General Information</h2>
                <div className="space-y-1">
                    <p><span className="muted">Name:</span> {name || '—'}</p>
                    <p><span className="muted">Email:</span> {email || '—'}</p>
                    <p><span className="muted">Phone:</span> {phone || '—'}</p>
                </div>
                <div className="pt-3">
                    <button className="btn-secondary" onClick={()=>setPreview(false)}>Edit</button>
                </div>

            </div>}
        </>
    )
}
export default GeneralInfoPrev;