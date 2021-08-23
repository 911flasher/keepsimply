import Head from 'next/head';

export default function PageContainer({ title, description, children }) {
  return (
    <div className="container">
      <Head>
        <title>{title || 'KUPIBEST'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {description !== false && (
          <meta
            name="description"
            content={
              description ||
              'Quantum E-commerce made with Next.js open-source project.'
            }
          />
        )}
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <style jsx>{`
        main {
          display: flex;
          background-color: #fafafa;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-family: Roboto;
        }
      `}</style>
    </div>
  );
}
