import { render } from '../../utils/test-utils';
import CustomTable from './CustomTable';

let _headers = [];
let _items = [];

beforeEach(() => {
    _headers = ['Nombre'];
    _items = [];
});

test('Verify correct renderization of CustomTable Component', () => {
    const { asFragment } = render(<CustomTable headers={_headers} items={_items} itemsLoading={false} />);
    expect(asFragment()).toMatchSnapshot();
})