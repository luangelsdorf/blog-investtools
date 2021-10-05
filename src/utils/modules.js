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

export const getExerpt = (string) => string.split(' ').slice(0, 20).join(' ').replace(/(<([^>]+)>)/gi, "");

export async function getLayoutContent() {
  const resHeader = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cabecalho`);
  const header = await resHeader.json();

  const resFooter = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/site`);
  const footer = await resFooter.json();

  return { header, footer }
}