import { render } from '../../utils/test-utils';
import CardsList from './index';

let _items = [];

beforeEach(() => {
    _items = [
        { title: 'The Shawshank Redemption', id: 1995 },
        { title: 'The Godfather', id: 1972 },
        { title: 'The Godfather: Part II', id: 1974 },
        { title: 'The Dark Knight', id: 2008 },
        { title: '12 Angry Men', id: 1957 },
        { title: "Schindler's List", id: 1993 },
        { title: 'Pulp Fiction', id: 1994 },
    ]
});

test('Verify correct renderization of CardsList Component', () => {
    const { asFragment } = render(<CardsList items={_items} />);
    expect(asFragment()).toMatchSnapshot();
})