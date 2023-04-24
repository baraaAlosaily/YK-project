import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react'

interface Props{
    expandedData:any[]
}

export default function Expand({expandedData}:Props) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <div>
        {
            expandedData.length>0&&expandedData.map((data:any)=>(
            <Accordion key={data.id} expanded={expanded === `panel${data.id}`} onChange={handleChange(`panel${data.id}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className='text-[1rem] lg:text-xl font-primary_font' sx={{ width: '33%', flexShrink: 0 }}>{data.attributes.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='text-[1rem] lg:text-xl font-primary_font'>
                    {data.attributes.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
        }
  </div>
  )
}
