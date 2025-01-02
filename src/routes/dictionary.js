import express from 'express';

const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log('req', req)
    try {
        console.log('dictionary');
        
        res.json([])   
    } catch (err) {
        next(err);
    }
})

export { router as dictionaryRouter };