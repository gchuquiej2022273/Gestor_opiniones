import Post from './post.model.js';

export const publicPost = async (req, res) => {

        const { title, contenido, categoria } = req.body;
        const post = new Post({ title, contenido, categoria });
        const userId = req.usuario._id;
        
        await post.save();
        

        res.status(200).json({
          post
        });
}