// // // routes/video.js
// // const express = require('express');
// // const { addVideo, getAllVideos } = require('../controllers/video');
// // const { videoUpload } = require('../middlewares/videoUpload');

// // const router = express.Router();

// // router.post('/upload', videoUpload.single('video'), addVideo);
// // router.get('/videos', getAllVideos);

// // module.exports = router;

// const express = require('express');
// const { addVideo, getAllVideos } = require('../controllers/video');
// const { videoUpload } = require('../middlewares/videoUpload');

// const router = express.Router();

// // POST route to upload a video
// router.post('/upload', videoUpload.single('video'), addVideo);

// // GET route to fetch all videos
// router.get('/videos', getAllVideos);

// module.exports = router;


const express = require('express');
const router = express.Router();
const Video = require('../models/VideoModel');
const { videoUpload } = require('../middlewares/videoUpload');

// POST route to upload a video
router.post('/upload', videoUpload.single('video'), async (req, res) => {
    const { title, description } = req.body;
    const videoPath = req.file.path;

    const video = new Video({
        title,
        description,
        filename: req.file.filename,
        videoUrl: videoPath,
    });

    try {
        await video.save();
        res.status(200).json({
            message: 'Video Uploaded Successfully',
            video
        });
    } catch (error) {
        res.status(400).json({
            message: 'Video upload failed',
            error
        });
    }
});

// GET route to fetch all videos
router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find({});
        res.status(200).json({
            videos
        });
    } catch (error) {
        res.status(400).json({
            message: 'Videos fetch failed',
            error
        });
    }
});

module.exports = router;