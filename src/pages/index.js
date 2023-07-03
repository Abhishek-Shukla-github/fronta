import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import matter from 'gray-matter';
import fs from 'fs'
import path from 'path'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  console.log("posts",posts)
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  )
}


export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    
    // console.log("markdownWithMeta",markdownWithMeta)
    
    const { data: frontmatter } = matter(markdownWithMeta);
    
    return {
        slug,
        frontmatter,
    };
});

return {
    props: {
      posts,
    },
  };
}