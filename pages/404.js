import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

function PageNotFound() {
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])

    return (
        <div>
            <div className="not-found">
                <h1>Opss....</h1>
                <h2>That page cannot be found!!!!</h2>
                <p>Go back to <Link href="/"><a>Homepage</a></Link> </p>
            </div>
        </div>
    )
}

export default PageNotFound
