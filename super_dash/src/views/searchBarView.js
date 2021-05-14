import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, FormControl, Button} from 'react-bootstrap'
import { ImSearch } from 'react-icons/im';
import '../css/searchBar.css';

function SearchBarView(props) {
    
    // OBS: Navbar can be removed.
    return (
        <div>
                <Form inline>
                    <FormControl id={"search-field"}  onChange={e=>props.onText(e)} onKeyDown={e=>props.buttonSearch(e)} type="search" placeholder="Google Search" className="form-control mr-sm-2" />
                    <Button id={"search-button"} onClick={()=>props.gSearch()}>
                        <ImSearch id={"icon"}/>
                    </Button>
                </Form>
        </div>

    );
}
export default SearchBarView;