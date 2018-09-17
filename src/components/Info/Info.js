import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  card : {
    maxWidth: 600,
    margin: '20px auto',
    padding: '20px'
  }
});

const Info = ({classes}) => {
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardHeader
          title="Main Information"
        />
        <CardContent>
          <Typography >
            My name Vitaliy Yeremenko. I am 22 years old Front-end developer with 2 years experience.
            Now i am  a 5th year student. My main hobbies is self-improvement, travelling, sport, chess.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          title="Skills"
        />
        <CardContent>
          <Typography >
            HTML5/CSS3 , SASS, Gulp,Webpack, Js, Vue.js, React/Redux ,Node.js
            PHP,LARAVEL,SQL ,Webpack, gulp, Git
          </Typography>
        </CardContent>
      </Card>
       <Card className={classes.card}>
        <CardHeader
          title="Code and project examples"
        />
        <CardContent>
          <Typography paragraph>
            <a href="http://fovb.com.ua/">http://fovb.com.ua/</a> - Landing
          </Typography>
           <Typography paragraph>
            <a href="http://readingarch.com.ua/">http://readingarch.com.ua/</a>  - Landing
           </Typography>
           <Typography paragraph>
            <a href="http://adly.co.il">http://adly.co.il</a>  - Bulletin Board
           </Typography>
           <Typography paragraph>
            <a href="http://vinohotelpineta.com/">http://vinohotelpineta.com/</a> - Hotel web site with admin panel
          </Typography>
          <Typography paragraph>
            <a href="https://github.com/Vitaliyeremenko/Notes">React code example</a>
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default withStyles(styles)(Info);
