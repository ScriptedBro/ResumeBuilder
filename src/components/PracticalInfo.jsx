import {useState} from 'react'; 
import PracticalInfoPrev from './PracticalInfoPrev';
function PracticalInfo({school, setSchool, study, setStudy, startDateOfStudy, setStartDateOfStudy, endDateOfStudy, setEndDateOfStudy}){
    const [preview, setPreview] = useState(false);
    return(
        <>
        {!preview && <div className="section">
            <h2 className="section-title">Practical Information</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                    <label className="label">School Name</label>
                    <input className="input" type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="University of Ghana" />
                </div>

                <div>
                    <label className="label">Field of Study</label>
                    <input className="input" type="text" value={study} onChange={(e) => setStudy(e.target.value)} placeholder="BSc Computer Science"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label className="label">Start Date of Study</label>
                        <input className="input" type="date" value={startDateOfStudy} onChange={(e) => setStartDateOfStudy(e.target.value)} />
                    </div>

                    <div>
                        <label className="label">End Date of Study</label>
                        <input className="input" type="date" value={endDateOfStudy} onChange={(e) => setEndDateOfStudy(e.target.value)} />
                    </div>
                </div>
                <div className="pt-2">
                    <button className="btn-primary" type="submit" onClick={()=>setPreview(true)}>Submit</button>
                </div>
            </form>
        </div>}

        {preview && <PracticalInfoPrev school={school} study={study} startDateOfStudy={startDateOfStudy} endDateOfStudy={endDateOfStudy} setPreview={setPreview}/>}
        </>
    )
}
export default PracticalInfo;