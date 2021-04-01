import { db } from 'src/lib/db'

export const addUser = ({ input }) => {
  console.log('addUserHere', input)
  return db.user.create({
    data: input,
  })
}
