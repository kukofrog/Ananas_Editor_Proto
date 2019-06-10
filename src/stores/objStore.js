import { observable, action, computed } from 'mobx';

class objStore {
    @observable objects = [];
    @observable idx = null;
    @observable selectedObj = null;

    @action
    select = (index) => {
        this.idx = index;
        this.selectedObj = this.objects[this.idx];
    }

    @action
    put = (obj) => {
        this.objects.push(obj);
        return;
    }

    @action
    remove = (index) => {
        this.objects.splice(index, 1);
        return;
    }

    @action
    changeName = ({index, name}) => {
        this.objects[index].name = name;

        this.selectedObj = this.objects[this.idx];
        return;
    }

    @action
    move = ({index, x, y}) => {
        this.objects[index].x = x;
        this.objects[index].y = y;

        this.selectedObj = this.objects[this.idx];
        return;
    }

    @action
    changeX = ({index, x}) => {
        this.objects[index].x = x;

        this.selectedObj = this.objects[this.idx];
        return;
    }

    @action
    changeY = ({index, y}) => {
        this.objects[index].y = y;

        this.selectedObj = this.objects[this.idx];
        return;
    }

    @action
    resize = ({index, width, height, x, y}) => {
        this.objects[index].width = width;
        this.objects[index].height = height;
        this.objects[index].x = x;
        this.objects[index].y = y;

        this.selectedObj = this.objects[this.idx];
        return;
    }

    @action
    changeWidth = ({index, width}) => {
        this.objects[index].width = width;

        this.selectedObj = this.objects[this.idx];
        return;
    }

    @action
    changeHeight = ({index, height}) => {
        this.objects[index].height = height;

        this.selectedObj = this.objects[this.idx];
        return;
    }

    @action
    get = (index) => {
        return this.objects[index];
    }    
}

export default objStore;