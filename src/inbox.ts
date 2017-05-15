import debounce from './debounce';
import Fluid from './fluid';
import { $, $$ } from './query';

const currentEmail : string = document.title.replace('Inbox – ', '').trim();
const currentId: string = `inbox:${currentEmail}`;
const unreadClass : string = '.ss';
const appContainer : string = '#Nr';
const container : HTMLElement = $(appContainer);

function otherUnreads(): number {
    let count = 0;
    for (var i = 0; i < localStorage.length; i++) {
        const key: string = localStorage.key(i);
        if (key.indexOf('inbox:') > -1 && key !== currentId) {
            count += parseInt(localStorage.getItem(key), 10) || 0;
        }
    }
    return count;
}

function getAllUnreads(): void {
    const localUnread: number = $$(unreadClass).length;
    const otherUnread : number = otherUnreads();
    const totalUnread: number = localUnread + otherUnread;

    localStorage.setItem(currentId, $$(unreadClass).length.toString());
    Fluid.dockBadge = totalUnread > 0 ? totalUnread.toString() : '';
}

const observer : MutationObserver = new MutationObserver(function () {
    debounce(getAllUnreads, 1000)();
});

const observerConfig = {
    attributes: true,
    childList: true,
    characterData: true
};

getAllUnreads();
observer.observe(container, observerConfig);
