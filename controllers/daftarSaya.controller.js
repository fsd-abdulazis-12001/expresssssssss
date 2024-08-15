const knex = require('../Knex');


module.exports.GetListDaftarSaya = async (req, res) => {
    try {
        const listDaftarSaya = await knex('listdaftarsaya').select("*");
        if (listDaftarSaya) {
            return res.status(200).json(listDaftarSaya);
        } else {
            return res.status(404).json({ error: 'List Daftar Kamu Tidak Ditemukan' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'gagal mendapatkan List Daftar Kamu' });
    }
}

module.exports.AddListDaftarSaya = async (req, res) => {
    console.log(req.body)
    const { idf, title, image, neweps, top10 } = req.body;

   
    if (!idf || !title) {
        return res.status(400).json({ error: 'idf and title are required fields' });
    }

    try {
        
        const existingRecord = await knex('listdaftarsaya').where({ idf }).first();

        if (existingRecord) {
            return res.status(400).json({ error: 'Sudah Ada di list kamu!' });
        }
        const newListDaftarSaya = await knex('listdaftarsaya').insert({
            idf,
            image,
            neweps,
            top10,
            title
        }).returning('*'); 
        return res.status(201).json(newListDaftarSaya);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error});
    }
};

module.exports.RemoveListDaftarSaya = async (req, res) => {
    const { idf } = req.params;
    try {
        const deletedListDaftarSaya = await knex('listdaftarsaya')
            .where('idf', idf)
            .del()
            .returning('*');
        if (deletedListDaftarSaya.length > 0) {
            return res.status(200).json(deletedListDaftarSaya);
        } else {
            return res.status(404).json({ error: 'List Daftar Kamu Tidak Ditemukan' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
}
module.exports.PatchListDaftarSaya = async (req, res) => {
    const { idf } = req.params;
    const { image } = req.body;

    if (!image) {
        return res.status(400).json({ error: 'Image field is required' });
    }

    try {
        const updatedListDaftarSaya = await knex('listdaftarsaya')
            .where('idf', idf)
            .update({ image })
            .returning('*');
        
        if (updatedListDaftarSaya.length > 0) {
            return res.status(200).json(updatedListDaftarSaya[0]);
        } else {
            return res.status(404).json({ error: 'List Daftar Kamu Tidak Ditemukan' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Gagal mengupdate List Daftar Kamu' });
    }
}