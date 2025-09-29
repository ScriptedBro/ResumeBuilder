import {useState} from 'react';
import ExperiencePrev from './ExperiencePrev';

function Experience({company, setCompany, position, setPosition, mainTasks, setMainTasks, startDateOfWork, setStartDateOfWork, endDateOfWork, setEndDateOfWork}){
    const [preview, setPreview] = useState(false);
    return(
        <>
        {!preview && <div className="section">
            <h2 className="section-title">Experience</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                    <div>
                                        <label className="label">Company Name</label>
                                        <input className="input" type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                                    </div>
                                    <div>
                                        <label className="label">Position Title</label>
                                        <input className="input" type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
                                    </div>
                                    <div>
                                        <label className="label">Main Tasks</label>
                                        <textarea className="textarea" value={mainTasks} onChange={(e) => setMainTasks(e.target.value)} />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="label">Start Date of Work</label>
                                            <input className="input" type="date" value={startDateOfWork} onChange={(e) => setStartDateOfWork(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="label">End Date of Work</label>
                                            <input className="input" type="date" value={endDateOfWork} onChange={(e) => setEndDateOfWork(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <button className="btn-primary" type="submit" onClick={()=>{setPreview(true)}}>Submit</button>
                                    </div>
                                </form>
                            </div>}
        {preview && <ExperiencePrev company={company} position={position} mainTasks={mainTasks} startDateOfWork={startDateOfWork} endDateOfWork={endDateOfWork} setPreview={setPreview}/>}
        </>
    )
}

export default Experience;