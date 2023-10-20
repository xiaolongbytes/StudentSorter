import type { AppProps } from 'next/app';

import Navbar from '@/common/components/Navbar';
// import '@/common/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}
