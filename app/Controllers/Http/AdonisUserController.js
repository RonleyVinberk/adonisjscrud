'use strict'

//
const AdonisUsers = use('App/Models/AdonisUsers')

class AdonisUserController {
    async index ({view}) {
        const adonisuser = await AdonisUsers.all()
        return view.render('index', {adonisuser: adonisuser.toJSON()})
    }

    async create({view}) {
        return view.render('form')
    }

    async store({session, request, response}) {
        const user = new AdonisUsers();

        user.nama_lengkap = request.input('nama_lengkap')
        user.jenis_kelamin = request.input('jenis_kelamin')
        await user.save()

        // Flash success message to session
        session.flash({notification_store: 'Data saved!'})

        return response.redirect('/adonisuser')
    }

    async destroy({params, session, response}) {
        const user = await AdonisUsers.find(params.id)
        await user.delete()

        // Flash success message to session
        session.flash({notification_delete: 'Data deleted!' })

        return response.redirect('/adonisuser')
    }

    async edit ({params, view}) {
        const user = await AdonisUsers.find(params.id)
        return view.render('detail', {user: user.toJSON()})
    }

    async update({request, params, session, response}) {
        const user = await AdonisUsers.find(params.id)

        user.id = request.input('id')
        user.nama_lengkap = request.input('nama_lengkap')
        user.jenis_kelamin = request.input('jenis_kelamin')
        await user.save()

        // Flash success message to session
        session.flash({notification_update: 'Data updated!'})

        return response.redirect('/adonisuser')
    }
}

module.exports = AdonisUserController
