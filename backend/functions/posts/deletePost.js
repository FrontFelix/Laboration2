const postModel = require('../../models/posts/postModel')

async function DeletePost() {
    await postModel.deleteOne({ postTitle: 'First post' }); 
}

module.exports = DeletePost



