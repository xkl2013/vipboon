const video_list_models = require('../models/dance_video.server.model');





function getFoo() {
  return new Promise(function(resolve, reject) {
    resolve('1111');
  });
}
const g = function*() {
  try {
    const data = yield getFoo();
  } catch (e) {
    console.log(e);
  }
};
function run(generator) {
  var it = generator();
  function go(result) {
    console.log(result);
    if (result.done) {
      return result.value;
    }
    return result.value.then(
      function(value) {
        return go(it.next(value));
      },
      function(err) {
        return go(it.next(err));
      }
    );
  }
  go(it.next());
}

class Video_list {
  static initInstance() {
    if (!this.instance) {
      this.instance = new Video_list();
    }
    return this.instance;
  }

  static get(req) {
      return video_list_models.findAll();
     
  }
}
module.exports = Video_list;
