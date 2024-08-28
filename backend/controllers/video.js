// // controllers/video.js
// const Video = require('../models/VideoModel');

// exports.addVideo = async (req, res) => {
//     const { title, description } = req.body;
//     const videoPath = req.file.path;

//     const video = new Video({
//         title,
//         description,
//         filename: req.file.filename,
//         videoUrl: videoPath,
//     });

//     try {
//         await video.save();
//         res.status(200).json({
//             message: 'Video Uploaded Successfully',
//             video
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: 'Video upload failed',
//             error
//         });
//     }
// };

// exports.getAllVideos = async (req, res) => {
//     try {
//         const videos = await Video.find({});
//         res.status(200).json({
//             videos
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: 'Videos fetch failed',
//             error
//         });
//     }
// };


// const express = require('express');
// const router = express.Router();
// const Video = require('../models/VideoModel');

// // POST route to add a video
// router.post('/addVideo', async (req, res) => {
//     const { title, description } = req.body;
//     const videoPath = req.file.path;

//     const video = new Video({
//         title,
//         description,
//         filename: req.file.filename,
//         videoUrl: videoPath,
//     });

//     try {
//         await video.save();
//         res.status(200).json({
//             message: 'Video Uploaded Successfully',
//             video
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: 'Video upload failed',
//             error
//         });
//     }
// });

// // GET route to fetch all videos
// router.get('/getAllVideos', async (req, res) => {
//     try {
//         const videos = await Video.find({});
//         res.status(200).json({
//             videos
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: 'Videos fetch failed',
//             error
//         });
//     }
// });

// module.exports = router;


