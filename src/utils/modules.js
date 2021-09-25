export function getRelatedPosts(thisPost, allPosts) {
  let relatedPosts = [];
  allPosts.forEach(post => {
    post.categories.forEach(cat => {
      thisPost.categories.forEach(thisCat => {
        if (cat.name === thisCat.name && !relatedPosts.includes(post.title)) {
          relatedPosts.push(post.title);
        }
      })
    })
  })

  let thisIndex = relatedPosts.findIndex(post => post === thisPost.title);
  relatedPosts.splice(thisIndex, 1);

  const related = [];
  relatedPosts.forEach(rel => {
    allPosts.forEach(post => {
      if (rel === post.title) {
        related.push(post);
      }
    })
  })

  if (related.length > 2) {
    const relatedSorted = related.sort((a, b) => b.id - a.id);
    return relatedSorted.slice(0, 2);
  }

  else {
    const sorted = allPosts.sort((a, b) => b.id - a.id);
    return sorted.slice(0, 2);
  }
}