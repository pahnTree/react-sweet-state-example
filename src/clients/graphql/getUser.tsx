import { graphql, useLazyLoadQuery } from 'react-relay';

import { getUserQuery } from './__generated__/getUserQuery.graphql'

const query = graphql`
  query getUserQuery {
    user {
      username
      email
    }
  }
`;

export const useGetUserQuery = () => useLazyLoadQuery<getUserQuery>(query, {});
