import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import CategoryLabel from "../../components/CategoryLabel";
import { useEffect } from "react";

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  let codeBlock;

  useEffect(() => {
    codeBlock = document.querySelector("pre");
    if (codeBlock?.innerHTML)
      codeBlock.innerHTML =
        codeBlock.innerHTML +
        "<Image class='clipboard' src='/images/clipboard.png' alt='clipboard-icon'/>";
  }, []);

  return (
    <Layout title={title}>
      <Link href="/blog">Go Back</Link>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-5xl mb-7">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <Image
          width={300}
          height={300}
          blurDataURL={cover_image}
          src={cover_image}
          alt="Fronta blog cover"
          className="w-full rounded"
        />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            {/* <Image
              placeholder="blur"
              width={300}
              height={300}
              blurDataURL={author_image}
              src={author_image}
              alt=""
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            /> */}
            <h4>{author}</h4>
          </div>
          <div className="mr-4">{date}</div>
        </div>

        <div className="blog-text mt-2">
          <div
            onClick={() => {
              navigator.clipboard.writeText(codeBlock.innerText);
            }}
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
          {console.log("marked(content)", marked(content))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
