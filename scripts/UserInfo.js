
export default class UserInfo {

    constructor({ nameSelector, workSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._workSelector = document.querySelector(workSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            work: this._workSelector.textContent,
            avatar: this._avatarElement.src,
        };
    }


    setUserInfo({ name, work, avatar }) {
        if (name) this._nameElement.textContent = name;
        if (work) this._workSelector.textContent = work;
        if (avatar) this._avatarElement.src = avatar;
    }
}