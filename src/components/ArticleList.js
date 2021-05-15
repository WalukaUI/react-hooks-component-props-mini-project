import Article from "./Article"

let ArticleList = function ({ blogData }) {
  const Articles = blogData.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes} />
    )
  })

  // let blog1 = props.blogData[0]
  // let blog2 = props.blogData[1]
  // let blog3 = props.blogData[2]
  return (
    <main>
      {Articles}
      {/* <Article key={blog1.id} title={blog1.title} date={blog1.date} preview={blog1.preview}/>
      <Article key={blog2.id} title={blog2.title} date={blog2.date} preview={blog2.preview}/>
      <Article key={blog3.id} title={blog3.title} date={blog3.date} preview={blog3.preview}/> */}
    </main>
  )
}

export default ArticleList