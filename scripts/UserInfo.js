
export default class UserInfo {

    constructor({ nameSelector, workSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._workSelector = document.querySelector(workSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            work: this._workSelector.textContent
        };
    }


    setUserInfo({ name, work }) {
        if (name) this._nameElement.textContent = name;
        if (work) this._workSelector.textContent = work;
    }
}