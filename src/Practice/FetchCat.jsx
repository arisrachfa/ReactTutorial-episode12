import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Cat from './CustomHook/Cat';

const FetchCat = () => {
    // membuat func untuk memanggil React-Query dengan nama client, untuk wraping
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
            },
        },
    });

  return (
    <div className='App'>
        <QueryClientProvider client={client}>
            <Cat />
        </QueryClientProvider>
    </div>
  )
}

export default FetchCat