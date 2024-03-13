import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';

interface Props {
  title: string;
  description: string;
  bgColor: string;
}

function DocumentCard(props: Props) {
  const { title, bgColor, description } = props;

  return (
    <Card style={{ backgroundImage: bgColor }}>
      <CardContent>
        <Typography className="text-white font-bold" sx={{ textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <p className="text-white text-[12px] mt-2 w-full h-[72px] truncate-4">{description}</p>
      </CardContent>
      <CardActions>
        <div className="w-full flex justify-between items-center">
          <Button variant="contained" size="small" style={{ backgroundImage: bgColor }}>
            Start <FontAwesomeIcon className="ms-2" icon={faCirclePlay} />
          </Button>
          <Chip className="!text-white" variant="outlined" style={{ backgroundImage: bgColor }} label="03/02/2024" />
        </div>
      </CardActions>
    </Card>
  );
}

export default DocumentCard;
