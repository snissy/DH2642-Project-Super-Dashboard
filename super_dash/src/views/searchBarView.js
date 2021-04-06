import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'

function SearchBarView(props) {
    return (
        <div>
            <Navbar className="bg-light justify-content-between">
                <Form inline>
                    <FormControl onChange={e=> props.onText(e)} type="text" placeholder="Google Search" className=" mr-sm-2" />
                    <Button onClick={()=>props.onSearch()}>
                        <span class="material-icons md-8 iconAlign buttonTopRight">search</span> 
                    </Button>
                </Form>
            </Navbar>
        </div>

    );
}
export default SearchBarView;