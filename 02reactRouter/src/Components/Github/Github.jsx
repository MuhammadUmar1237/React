import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div className="bg-gray-600 text-center m-4 p-4 text-white text-3xl">
            <img
                src={data.avatar_url}
                alt="GitHub avatar"
                width={200}
                className="mx-auto rounded-full"
            />
            <p className="mt-4">Github: {data.name || data.login}</p>
            <p className="mt-2 text-xl">{data.bio}</p>
            <p className="mt-4">
                Followers:{data.followers} | Repos: {data.public_repos}
            </p>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/MuhammadUmar1237')
    if (!response.ok) {
        throw new Response('GitHub user not found', { status: response.status })
    }
    return response.json()
}