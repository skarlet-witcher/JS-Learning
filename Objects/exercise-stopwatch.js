function StopWatch() {
    let duration;
    let startTime;
    let endTime;
    let running;
    this.start = function() {
        if(running) {
            throw Error('can not start twice');
        }
        running = true;
        startTime = new Date();

    }
    this.stop = function() {
        if(!running) {
            throw Error('can not end twice');
        }
        running = false;
        endTime = new Date();
        duration += (endTime.getSeconds() - startTime.getSeconds());
        
    }
    this.reset = function() {
        running = false;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}