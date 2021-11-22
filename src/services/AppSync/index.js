import { API, graphqlOperation } from 'aws-amplify';

export const getList = async (queryId, query, variables) => {
    var list = [];
    const _variables = variables === undefined ? {} : variables;

    try {
        const gresult = await API.graphql(graphqlOperation(query, _variables));
        list = gresult.data[queryId];
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

export const createUpdateItem = async (queryId, query, _input) => {
    var createObject = {}
    try {
        const create = await API.graphql(graphqlOperation(query, { input: _input }));
        createObject = create.data[queryId];
    } catch (e) {
        console.log("Error en el metodo 'createUpdateItem' de AppSync: ", e);
        createObject = false;
    }
    return createObject
}