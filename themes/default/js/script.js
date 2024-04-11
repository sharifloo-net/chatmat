const leftPanelItems = document.getElementsByClassName('left-panel-item'),
    usernameRightHeader = document.getElementById('username-right-header'),
    onlineStatusRightHeader = document.getElementById('online-status-right-header');
rightHeaderItemSeparator = document.getElementById('right-header-item-separator');

rightHeaderItemSeparator.style.display = 'none';

document.getElementById('left-panel').onclick = (e) => {
    if (e.target.className === 'left-offline' || e.target.className === 'left-online')
        return false;
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
    e.target.classList.add('active');
    usernameRightHeader.innerHTML = e.target.firstElementChild.lastElementChild.innerHTML;
    onlineStatusRightHeader.classList.remove('left-offline', 'left-online');
    if (usernameRightHeader.innerHTML !== 'Public') {
        if (rightHeaderItemSeparator.style.display === 'none')
            rightHeaderItemSeparator.style.display = 'inherit';
        if (e.target.innerHTML.includes('offline')) {
            onlineStatusRightHeader.innerHTML = 'offline';
            onlineStatusRightHeader.classList.add('left-offline');
        } else {
            onlineStatusRightHeader.innerHTML = 'online';
            onlineStatusRightHeader.classList.add('left-online');
        }
    } else {
        onlineStatusRightHeader.innerHTML = '';
        rightHeaderItemSeparator.style.display = 'none';
    }
    if (!e.target.innerHTML.includes('Public')) {
        if (e.target.lastElementChild.className.includes('left-offline'))
            e.target.lastElementChild.style.color = '#9DB2BF';
    }
}