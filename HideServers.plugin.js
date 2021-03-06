/**
 * @name HideServer
 * @version 1.0.2
 * @description Plugin to hide servers in discord
 * @author Klubuntu modifed Pieloaf
 * @authorId 546747585675657226
 * @website https://klubuntu.eu.org
 * @source https://github.com/Pieloaf/BetterDiscordPlugins/blob/main/HideServers.plugin.js
 * @updateUrl https://raw.githubusercontent.com/Pieloaf/BetterDiscordPlugins/main/HideServers.plugin.js
 */
module.exports = (_ => {
    return (class {
        start() {
            var serverList = document.getElementsByClassName('scroller-1Bvpku none-2Eo-qx scrollerBase-289Jih')[0];
            var sidebar = document.getElementsByClassName('wrapper-3NnKdC')[0]
            var sidebarBtn = document.createElement('span');
            var btnStyle = document.createElement('style');
            btnStyle.id = 'HideSidebarStyles'
            btnStyle.innerHTML = `
            .hide-sidebar-btn {
                color: #8e9297; 
                display: flex; 
                justify-content: center;
                background-color: #2f3136;
                margin: 6px 10px;
                padding: 5px 3px;
                border-radius: 7px;
                font-weight: 500;
            }
            .hide-sidebar-btn:hover{
                cursor: pointer;
                color: #fff;
                background-color: #393c43;
            }`;

            document.getElementsByTagName('head')[0].appendChild(btnStyle);
            sidebarBtn.innerHTML = '<<<'
            sidebarBtn.classList.add('hide-sidebar-btn')
            sidebarBtn.id = 'HideSideBarBtn'
            sidebarBtn.addEventListener('click', function () {
                if (sidebar.style.display === "" || sidebar.style.display === "flex") {
                    sidebar.style.display = "none"
                    sidebarBtn.innerHTML = '>>>'
                }
                else {
                    sidebar.style.display = "flex"
                    sidebarBtn.innerHTML = '<<<'
                }
            })
            serverList.insertBefore(sidebarBtn, serverList.firstElementChild.nextSibling);
        }
        stop() {
            let btn = document.getElementById('HideSideBarBtn')
            let btnStyle = document.getElementById('HideSidebarStyles')
            btnStyle.remove()
            btn.remove()
        }
    })
})();
