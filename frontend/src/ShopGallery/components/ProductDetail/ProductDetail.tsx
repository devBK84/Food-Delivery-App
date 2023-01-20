import React from "react";
import "../../../App.css"
import {useParams} from "react-router-dom";
import useProduct from "../../hooks/useProduct";

import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProductDetail() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const params = useParams()

    const id: string | undefined = params.id

    const {product} = useProduct(id)

    if (!product) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader

                title="Fresh Bio Milk 1l"
                subheader="2,49€"
            />
            <CardMedia
                component="img"
                height="194"
                image="![](../../../static/img/weidemilch@1x.png)"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Fresh whole milk in
                    sustainable reusable glass bottle, not homogenized, gently
                    heated and therefore durable for up to 7 days.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        {product.name}
                        {product.id}
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. iquid is absorbed,

                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );

}