"use client"
import React, { useState } from 'react'
import { NotionRenderer } from 'react-notion-x';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import { usePathname } from 'next/navigation';
import { Skeleton } from '@mui/material';

const getRenderedPage = async (id:string) => {
  const res = await fetch(`/api/getPartialPage?queryParam=${id}`);
  const data = await res.json();
  return data;
}


export default function Page() {
    const [recordMap, setRecordMap] = useState(null)
    const pathname = usePathname();
    const path=pathname?.toString().split('/')[2]

    console.log(path)

  React.useEffect(() => {
    const fetchAll = async () => {
      const recordMapLoc = await getRenderedPage(path as string);
      setRecordMap(recordMapLoc);
    }
    fetchAll()
  }, [])
  return (
    <div className='pt-16'>
            {recordMap?<NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />:<><Skeleton variant="rectangular" width="100%" height="60rem" /> </>}    
    </div>
  )
}
