const leftPanelItems = document.getElementsByClassName('left-panel-item'),
    rightHeader = document.getElementById('right-header'),
    usernameRightHeader = document.getElementById('username-right-header'),
    onlineStatusRightHeader = document.getElementById('online-status-right-header');
rightHeaderItemSeparator = document.getElementById('right-header-item-separator');

rightHeaderItemSeparator.style.display = 'none';

document.getElementById('left-panel').onclick = (e) => {
    for (let i = leftPanelItems.length - 1; i >= 0; i--) {
        if (leftPanelItems[i].classList.contains('active')) {
            leftPanelItems[i].classList.remove('active');
            if (i !== 0) {
                if (leftPanelItems[i].lastElementChild.className.includes('left-offline'))
                    leftPanelItems[i].lastElementChild.style.color = '#445069';
            }
            break;
        }
    }

    let publicIcon = document.querySelector('.left-panel-item').querySelector('svg'); // For removing or adding public svg icon to #right-header;

    e.target.closest('.left-panel-item').classList.add('active');
    usernameRightHeader.innerHTML = e.target.closest('.left-panel-item').querySelector('.username-text').innerHTML;
    onlineStatusRightHeader.classList.remove('left-offline', 'left-online');
    if (usernameRightHeader.innerHTML !== 'Public') {
        if (rightHeader.querySelector('svg'))
            rightHeader.removeChild(rightHeader.querySelector('svg'));
        if (rightHeaderItemSeparator.style.display === 'none')
            rightHeaderItemSeparator.style.display = 'inherit';
        if (e.target.closest('.left-panel-item').innerHTML.includes('offline')) {
            onlineStatusRightHeader.innerHTML = 'offline';
            onlineStatusRightHeader.classList.add('left-offline');
        } else {
            onlineStatusRightHeader.innerHTML = 'online';
            onlineStatusRightHeader.classList.add('left-online');
        }
    } else {
        if (!rightHeader.querySelector('svg'))
            rightHeader.prepend(publicIcon.cloneNode(true));
        onlineStatusRightHeader.innerHTML = '';
        rightHeaderItemSeparator.style.display = 'none';

    }
    if (!e.target.closest('.left-panel-item').innerHTML.includes('Public')) {
        if (e.target.closest('.left-panel-item').querySelector('.left-online-status').className.includes('left-offline'))
            e.target.closest('.left-panel-item').querySelector('.left-online-status').style.color = '#9DB2BF';
    }
}

const contextMenus = document.querySelectorAll('.context-menu'),
    rightPanelMenu = document.getElementById('right-panel-menu'),
    leftPanelMenu = document.getElementById('left-panel-menu'),
    hideContextMenus = () => contextMenus.forEach((menu) => menu.style.display = 'none'),
    openMenuAt = (x, y, panel) => {
        if (panel === 'left') {
            leftPanelMenu.style.display = 'inherit';
            leftPanelMenu.style.left = `${x}px`;
            leftPanelMenu.style.top = `${y}px`;
        } else if (panel === 'right') {
            rightPanelMenu.style.display = 'inherit';
            rightPanelMenu.style.left = `${x}px`;
            rightPanelMenu.style.top = `${y}px`;
        } else return false;
    };

window.oncontextmenu = (e) => {
    if (e.target.closest('#bottom-section')) {
        hideContextMenus();
    } else {
        e.preventDefault();
        if (!e.target.closest('.context-menu')) {
            hideContextMenus();
            if (e.target.closest('#top-section'))
                openMenuAt(e.clientX, e.clientY, 'right');
            else if (e.target.closest('#left-panel') && !e.target.closest('#public-left-panel-item'))
                openMenuAt(e.clientX, e.clientY, 'left');
        }
    }
}

window.onclick = (e) => {
    if (!e.target.closest('.context-menu')) hideContextMenus();
};