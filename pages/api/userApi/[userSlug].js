import users from '../../users'

const slugHandle = (req, res) => {
    const { userSlug } = req.query

    const user = users.find((items) => {
        return (
            items.slug === userSlug
        )
    })

    res.status(200).json(user)
}

export default slugHandle