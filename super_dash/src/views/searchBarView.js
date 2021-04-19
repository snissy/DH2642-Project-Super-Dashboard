import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, FormControl, Button} from 'react-bootstrap'
import { ImSearch } from 'react-icons/im';

function SearchBarView(props) {
    
    // OBS: Navbar can be removed.
    return (
        <div>
                <Form inline>
                    <FormControl onChange={e=>props.onText(e)} onKeyDown={e=>props.buttonSearch(e)} type="search" placeholder="Google Search" className=" mr-sm-2" />
                    <Button onClick={()=>props.gSearch()}>
                        <ImSearch />
                    </Button>
                </Form>
        </div>

    );
}
export default SearchBarView;