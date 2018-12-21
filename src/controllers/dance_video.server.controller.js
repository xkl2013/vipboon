const Dance_video_servies = require('../servies/dance_video.server.servies');
module.exports = {
  getList: function(req, res, next) {
    Dance_video_servies.get(req).then((data)=>{
        return res.json(data)
    })
  },
};
