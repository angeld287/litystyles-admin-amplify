import { API, graphqlOperation } from 'aws-amplify';

export const getList = async (queryId, query) => {
    var list = [];

    try {
        const gresult = await API.graphql(graphqlOperation(query));
        list = gresult.data[queryId].items;
    } catch (e) {
        list = [e];
    }

    return list;
}

export const getItemById = async (queryId, query, id) => {
    var list = [];
    try {
        const gresult = await API.graphql(graphqlOperation(query, { id: id }));
        list = gresult.data[queryId];
    } catch (e) {
        console.log(e);
        list = false;
    }
    return list;
}

export const createItem = async (queryId, query, _input) => {
    var createObject = {}
    try {
        const create = await API.graphql(graphqlOperation(query, { input: _input }));
        createObject = create.data[queryId];
    } catch (e) {
        console.log(e);
        createObject = false;
    }
    return createObject
}