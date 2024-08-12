const knex = require('../Knex');


module.exports.GetUsers = async (req, res) => {
    try {
        const user = await knex('users').select("*");
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ error: 'Users Tidak Ditemukan' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'gagal mendapatkan user' });
    }
}

module.exports.Updateuser = async (req, res) => {
    try {
        const id = req.query.id;
        const name = req.query.name;

        if (!id) {
            return res.status(400).json({ error: 'Sertakan id!' });
        }
        if (!name) {
            return res.status(400).json({ error: 'Sertakan nama!' });
        }

        const updated = await knex('users')
            .where('id', id)
            .update({ name });

        if (updated) {
            return res.status(200).json({ message: `berhasil mengubah ${name}` });
        } else {
            return res.status(404).json({ error: 'User tidak ditemukan' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error saaat mengupdate user' });
    }
}

module.exports.Adduser = async (req, res) => {
    try {
        const name = req.query.name;
   
        if (!name) {
            return res.status(400).json({ error: 'Sertakan nama!' }); 
        }   
        await knex('users').insert({ name });   
        return res.status(200).json({ message: `Berhasil menambahkan user ${name}` });
    } catch (error) {
        console.error(error);   
        return res.status(500).json({ error: 'Error menambahkan User' });
    }
}
