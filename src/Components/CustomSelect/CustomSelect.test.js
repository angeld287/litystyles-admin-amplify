import { render } from '../../utils/test-utils';
import CustomSelect from './index';

let _items = [];

beforeEach(() => {
    _items = [
        { name: 'The Shawshank Redemption', id: 1995 },
        { name: 'The Godfather', id: 1972 },
        { name: 'The Godfather: Part II', id: 1974 },
        { name: 'The Dark Knight', id: 2008 },
        { name: '12 Angry Men', id: 1957 },
        { name: "Schindler's List", id: 1993 },
        { name: 'Pulp Fiction', id: 1994 },
    ]
});

test('Verify correct renderization of CustomSelect Component', () => {
    const { asFragment } = render(<CustomSelect items={_items} loading={false} />);
    expect(asFragment()).toMatchSnapshot();
})