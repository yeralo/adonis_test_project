'use strict'

/* Seleccionamos modelo */
const Job = use('App/Models/Job')

class JobController {
    /* Solo acceso a view, temporalmente cuando alguien visita se crea un job */
    async home({view}) {
        const job = new Job;
        job.title = 'My job title';
        job.title = 'https://www.google.es';
        job.title = 'My job description';
        
        await job.save();

        /* fetch a job */
        const jobs = await Job.all();

        /* devolvemos el job en formato jason a la vista index */
        return view.render('index', { jobs: jobs.toJSON() })
    }
}

module.exports = JobController
