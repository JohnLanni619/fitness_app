import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    database: process.env.MONGODB_URI,
    session: {
        jwt: true
    }
})