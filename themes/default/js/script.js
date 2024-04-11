let leftPanelItems = document.getElementsByClassName('left-panel-item'),
    rightHeader = document.getElementById('right-header'),
    usernameRightHeader = document.getElementById('username-right-header'),
    leftOffline = document.getElementById('left-offline'),
    leftOnline = document.getElementById('left-online');

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
    if (!e.target.innerHTML.includes('Public')) {
        if (e.target.lastElementChild.className.includes('left-offline'))
            e.target.lastElementChild.style.color = '#9DB2BF';
    }
}