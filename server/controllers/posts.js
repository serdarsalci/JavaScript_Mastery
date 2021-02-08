import PostMessage from '../models/PostMessage.js'
import asyncHandler from 'express-async-handler'

export const getPosts = asyncHandler(async (req, res) => {
	const postMessages = await PostMessage.find()
	res.status(200).json(postMessages)
})

export const createPost = asyncHandler(async (req, res) => {
	const post = req.body
	const newPost = new PostMessage(post)
	try {
		await newPost.save()
		res.status(201).json(newPost)
	} catch (error) {
		res.status(409).json({ message: error.message })
		throw new Error('post not created')
	}
})
