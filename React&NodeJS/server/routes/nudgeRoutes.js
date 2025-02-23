const express = require('express');
const NUDGES = require('../models/Nudges');

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        
        try {
            const allNudges = await NUDGES.find({});
            // const allNudges = await NUDGES.find({req.body.userId});
            res.status(200).json(allNudges);
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        res.status(500).json(error);
    }

})

router.route('/').post(async (req, res) => {
    try {
        
        // const userId = req.params;

        const { name, description, city, state, category, data } = req.body;

        // const user = await USERS.findOne({userId});
        // if (!user) {
        //   return res.status(404).json({ error: 'User not found' });
        // }

        const nudge = await NUDGES.create({
            userId,
            ...req.body
        })
    
        res.status(200).json(nudge);

    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;































// app.post('/users/:userId/nudges', (req, res) => {
// app.post('/nudges', async (req, res) => {
//         try {
//             // const { userId } = req.params;
//             const { name, description, city, state, category, data } = req.body;
    
//             // const user = users.find((user) => user.id === userId);
//             // if (!user) {
//             //   return res.status(404).json({ error: 'User not found' });
//             // }
    
//             const nudge = await NUDGES.create({
//                 ...req.body
//             })
    
//             res.status(200).json(nudge);
    
//         } catch (error) {
//             res.status(500).json(error);
//         }
//     });