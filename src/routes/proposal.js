import express from 'express'

const router = express.Router();

router.get('/', async () => {
    console.log('Hello world')
})


export { router as proposalRouter };