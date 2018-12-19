function buildPost(post){
    return `
    <div class="post>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>
    `;
}

export default function Blog(state){
    return state
        .posts
        .map(buildPost)
        .join('');
}