import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useTranslations} from 'next-intl';


interface Props {
  expandedData: any[];
  w: string;
}

export default function Expand({ expandedData, w }: Props) {
  const t = useTranslations('AboutUs');
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {expandedData.length > 0 ? (
        expandedData.map((data: any) => (
          <Accordion
            key={data.id}
            expanded={expanded === `panel${data.id}`}
            onChange={handleChange(`panel${data.id}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              style={{ height: "5rem" }}
            >
              <Typography
                className="text-[1rem]  font-primary_font"
                sx={{ width: w, flexShrink: 0 }}
              >
              {t(`${data.title}`)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-[1rem]  font-primary_font"
                variant="body1"
                component="div"
                dangerouslySetInnerHTML={{ __html: t(`${data.description}`) }}
              />
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Skeleton
          variant="rectangular"
          className={`lg:w-[100%] w-96 lg:h-[17rem] h-[17rem]`}
        />
      )}
    </div>
  );
}
