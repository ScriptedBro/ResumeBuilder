function Resume({name, email, phone, school, study, startDateOfStudy, endDateOfStudy, company, position, mainTasks, startDateOfWork, endDateOfWork, setPreview}){
    return(
        <div className="min-h-screen bg-slate-100 py-10 px-4">
            <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-sm ring-1 ring-gray-200 print:ring-0 print:shadow-none print:rounded-none p-8 md:p-10">
                {/* Header */}
                <header className="border-b border-slate-200 pb-5 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{name || 'Your Name'}</h1>
                        <div className="text-sm text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
                            <span className="truncate max-w-[220px]" title={email}>{email || 'email@example.com'}</span>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <span>{phone || '(000) 000-0000'}</span>
                        </div>
                    </div>
                </header>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-[11px] font-semibold tracking-[0.15em] text-slate-700 uppercase">Education</h2>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1">
                        <div>
                            <p className="text-lg font-semibold text-slate-900 leading-tight">{school || 'School / University'}</p>
                            <p className="text-slate-700">{study || 'Degree / Field of Study'}</p>
                        </div>
                        <p className="text-sm text-slate-600 sm:text-right">
                            {(startDateOfStudy || 'Start') + ' — ' + (endDateOfStudy || 'End')}
                        </p>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-[11px] font-semibold tracking-[0.15em] text-slate-700 uppercase">Experience</h2>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1">
                        <div>
                            <p className="text-lg font-semibold text-slate-900 leading-tight">{company || 'Company'}</p>
                            <p className="text-slate-700">{position || 'Position Title'}</p>

                            {mainTasks ? (
                                <ul className="mt-3 space-y-1.5 text-slate-700 text-sm list-disc pl-5 marker:text-slate-400 whitespace-pre-line">
                                    {mainTasks.split('\n').filter(Boolean).map((line, idx) => (
                                        <li key={idx}>{line}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-3 text-sm text-slate-600">• Led initiatives and delivered measurable results</p>
                            )}
                        </div>
                        <p className="text-sm text-slate-600 sm:text-right">
                            {(startDateOfWork || 'Start') + ' — ' + (endDateOfWork || 'End')}
                        </p>
                    </div>
                </section>

                {/* Footer Actions */}
                <div className="pt-2 print:hidden">
                    <button className="btn-secondary" onClick={()=>setPreview(false)}>Edit</button>
                    <button className="btn-primary" onClick={()=>window.print()}>Print</button>
                </div>
            </div>
        </div>
    )
}

export default Resume;