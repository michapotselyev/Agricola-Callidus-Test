import { ReactElement, useEffect, useRef } from 'react';
import Layout from '../components/layout';
import { NextPageWithLayout } from './_app';

async function loadMap(container: HTMLDivElement) {
    const { initialize } = await import('../map/mapping');
    return initialize(container);
}

const Home: NextPageWithLayout = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let asyncCleanup: Promise<(() => void)>
        if (mapRef.current) {
            asyncCleanup = loadMap(mapRef.current);
        }
        return () => {
            asyncCleanup && asyncCleanup.then((cleanup) => cleanup())
        }
    }, [mapRef]);
    return (
        <div className='container' id='viewMap' ref={mapRef}></div>
         
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (<Layout>{page}</Layout>);
}

export default Home;