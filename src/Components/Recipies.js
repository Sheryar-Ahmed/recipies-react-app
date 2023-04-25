import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PanoramaHorizontalSelectIcon from '@mui/icons-material/PanoramaHorizontalSelect';
import classes from './recipies.module.css';
import { CircularProgress } from '@mui/material';


export default function Recipies(props) {

  return (
    <div className={classes.maindiv}>
      <Card sx={{ maxWidth: 255 }}>
        {props.loading ? <CircularProgress style={{ marginTop: '3rem', marginLeft: '6rem' }} /> : <CardMedia
          component="img"
          height="200px"
          image={props.photo}
          alt="green iguana"
          style={{ width: '255px' }}
        />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <PanoramaHorizontalSelectIcon htmlColor='' />
          <span style={{ marginLeft: '3rem' }}>INGREDIENTS</span>
        </CardActions>
        <div className={classes.over}>
          <ul>{props.ingredients.map((ingred) => <li>{ingred.text}</li>)}</ul>
        </div>
      </Card>
    </div>
  );
}



































// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

// export default function Recipies(props) {
//     const [expanded, setExpanded] = useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     return (
//         <div style={{ margin: '4rem'}}>
//             <Card sx={{ width: 345 }} >
//                 <CardHeader
//                     title={props.title}
//                 />
//                 <CardMedia
//                     component="img"
//                     height="194"
//                     image={props.photo}
//                     alt="Ingredients"
//                 />
//                 <CardActions disableSpacing>
//                     <div style={{ color: 'brown' }}><span style={{ fontWeight: '600' }}>INGREDIENTS</span></div>
//                     <ExpandMore
//                         expand={expanded}
//                         onClick={handleExpandClick}
//                         aria-expanded={expanded}
//                         aria-label="show more"
//                     >
//                         <ExpandMoreIcon />
//                     </ExpandMore>
//                 </CardActions>
//                 <Collapse in={expanded} timeout="auto" unmountOnExit>
//                     <CardContent>
//                         <ul >{props.ingredients.map((ingred) => <li style={{ margin: '0', padding: '0', fontWeight: '600', fontSize: '1.5rem' }}>{ingred.text}</li>)}</ul>

//                     </CardContent>
//                 </Collapse>
//             </Card>
//         </div>
//     );
// }