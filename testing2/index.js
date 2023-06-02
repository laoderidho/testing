const dataComment = require('./data.js');

const comment = (dataComment) => {
   let count = dataComment.length;

   for (let i = 0; i < dataComment.length; i++) {
    const getComment = dataComment[i];
    console.log(getComment.commentContent);

    if(getComment.replies && getComment.replies.length > 0) {
        count += comment(getComment.replies);
    }
}
return count;
};

console.log(`total comentar adalah ${comment(dataComment)}`);