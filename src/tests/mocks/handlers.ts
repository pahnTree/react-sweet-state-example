import { graphql } from "msw";

export const handlers = [
  graphql.query('getUserQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          username: 'mock-username',
          email: 'mock@mock.com'
        }
      })
    )
  })
]

export default handlers;
