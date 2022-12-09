import Head from "next/head";

interface IMetaProps {
  title: string;
  description: string
}

export const Meta = ({title, description}:IMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
    </Head>
  )
}