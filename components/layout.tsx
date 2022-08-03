import Head from 'next/head'

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>Agricola Callidus</title>
            </Head>
            <main>
                { children }
            </main>
        </>
    );
}