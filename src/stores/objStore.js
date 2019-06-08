import { observable, action, computed } from 'mobx';

class objStore {
    @observable objects = [];

    @action
    put = (obj) => {
        this.objects.push(obj);
        return;
    }

    @action
    remove = (index) => {
        this.objects = this.objects.splice(index, 1);
        return;
    }

    @action
    move = ({index, x, y}) => {
        this.objects[index].x = x;
        this.objects[index].y = y;
    }

    @action
    resize = ({index, width, height, x, y}) => {
        this.objects[index].width = width;
        this.objects[index].height = height;
        this.objects[index].x = x;
        this.objects[index].y = y;
    }

    @action
    get = (index) => {
        return this.objects[index];
    }    
}

export default objStore;