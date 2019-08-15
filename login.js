import MuiThemeProvider from 'marerial-ui/styles/muiThemeProvider';
import AppBar from 'material-Ui/AppBar';
import RaisedButtom from 'Material-ui/RaisedButton';
import textField, { TextField } from 'material-ui/TextField';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
class Login Extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:''
            password:''
         }
        }
        RenderToLayer() {
            return (
                <div>
                    <muiThemeProvider>
                        <div>
                            <AppBar
                            title="login"
                            />
                            <TextField
                            hintText="Enter your Ussername"
                            floatingLabelText="Username"
                            onChange={(event,newValue) =>
                            this.setState({username:newValue})}
                            />
                            <br/>
                            <raisedButton lavel="Submit" primary={true} style= 
                            {style} onClick={(event) =>this.handleClick(event)}/>
                        </div>
                    </muiThemeProvider>
                </div>
            );
        }
    }
const style= {
    margin: 15,
};
export default Login;