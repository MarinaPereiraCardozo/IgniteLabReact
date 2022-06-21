import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:"https://api-sa-east-1.graphcms.com/v2/cl4orlco910s001xlge0w3o5y/master",
    cache: new InMemoryCache()
})