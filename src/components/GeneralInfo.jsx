import {useState} from 'react';
import GeneralInfoPrev from './GeneralInfroPrev';
function GeneralInfo({name,setName,email, setEmail,phone, setPhone}){
    const [preview, setPreview] = useState(false);
    return(
    <div className="section">
      {!preview && <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <h2 className="section-title">General Information</h2>
        <div>
          <label htmlFor="Name" className="label">Name</label>
          <input className="input" type="text" name="name" onInput={(e)=>setName(e.target.value)} value={name} placeholder="Jane Doe" />
        </div>

        <div>
          <label htmlFor="Email" className="label">Email</label>
          <input className="input" type="email" name="email" onInput={(e)=>setEmail(e.target.value)} value={email} placeholder="jane@example.com"/>
        </div>

        <div>
          <label htmlFor="Phone" className="label">Phone</label>
          <input className="input" type="tel" name="phone" onInput={(e)=>setPhone(e.target.value)} value={phone} placeholder="(+233) 555-123-456" />
        </div>

        <div className="pt-2">
          <button className="btn-primary" type="submit" onClick={()=>setPreview(true)}>Submit</button>
        </div>
        </form>}
        {preview && <GeneralInfoPrev name={name} email={email} phone={phone} preview={preview} setPreview={setPreview} />}
      </div>
    )
}

export default GeneralInfo;