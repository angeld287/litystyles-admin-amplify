import { API, graphqlOperation } from 'aws-amplify';

export const getList = async (queryId, query) => {
    var list = [];

    try {
        const gresult = await API.graphql(graphqlOperation(query));
        list = gresult.data[queryId].items
    } catch (e) {
        list = [e];
    }

    return list;
}