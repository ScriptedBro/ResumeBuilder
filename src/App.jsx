import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import PracticalInfo from './components/PracticalInfo';
import Experience from './components/Experience';
import Resume from './components/Resume';


function App(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [startDateOfStudy, setStartDateOfStudy] = useState('');
  const [endDateOfStudy, setEndDateOfStudy] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [startDateOfWork, setStartDateOfWork] = useState('');
  const [endDateOfWork, setEndDateOfWork] = useState('');

  const [preview, setPreview] = useState(false);
  return (
    <>
    {!preview && <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-50">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Resume Builder</h1>
          <p className="mt-2 text-center text-blue-100">Create and preview your resume details with a clean layout.</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="space-y-6">
            <GeneralInfo name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}/>
            
            <PracticalInfo school={school} setSchool={setSchool} study={study} setStudy={setStudy} startDateOfStudy={startDateOfStudy} setStartDateOfStudy={setStartDateOfStudy} endDateOfStudy={endDateOfStudy} setEndDateOfStudy={setEndDateOfStudy}/>
          </div>

          <div className="space-y-6">
            <Experience company={company} setCompany={setCompany} position={position} setPosition={setPosition} mainTasks={mainTasks} setMainTasks={setMainTasks} startDateOfWork={startDateOfWork} setStartDateOfWork={setStartDateOfWork} endDateOfWork={endDateOfWork} setEndDateOfWork={setEndDateOfWork}/>

            <button className="btn-primary" onClick={()=>setPreview(true)}>General Preview</button>
          </div>
        </div>
      </main>
    </div>}
    {preview && <Resume name={name} email={email} phone={phone} school={school} study={study} startDateOfStudy={startDateOfStudy} endDateOfStudy={endDateOfStudy} company={company} position={position} mainTasks={mainTasks} startDateOfWork={startDateOfWork} endDateOfWork={endDateOfWork} setPreview={setPreview}/>}
    </>
  )
}

export default App;