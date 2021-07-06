/**
 * @name HideServer
 * @version 1.0.0
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
			function createIDelm() {  
			  var elements = document.querySelectorAll('.panels-j1Uci_');
			  
			  if (elements.length) {
				elements[0].id = 'menus';
			  }
			}
			function createDIVelm(){
				var find = document.createElement("div");
				find.setAttribute("class", "container-hs62");
				var elements = document.getElementById("menus");
				elements.prepend(find);
			}
			createIDelm();
			createDIVelm();
            var showhideBtn = document.getElementsByClassName('container-hs62')[0];
            var servers = document.getElementsByClassName('wrapper-3NnKdC')[0]
            var serversBtn = document.createElement('span');
            var btnStyle = document.createElement('style');
            btnStyle.id = 'HideSidebarStyles'
            btnStyle.innerHTML = `
            .hide-servers-btn {
                color: #8e9297; 
                display: flex; 
                justify-content: center;
                background-color: #2f3136;
                margin: 6px 10px;
                padding: 5px 3px;
                border-radius: 7px;
                font-weight: 500;
            }
            .hide-servers-btn:hover{
                cursor: pointer;
                color: #fff;
                background-color: #393c43;
            }`;

            document.getElementsByTagName('head')[0].appendChild(btnStyle);
            serversBtn.innerHTML = '<<<'
            serversBtn.classList.add('hide-servers-btn')
            serversBtn.id = 'HideSideBarBtn'
            serversBtn.addEventListener('click', function () {
                if (servers.style.display === "" || servers.style.display === "flex") {
                    servers.style.display = "none"
                    serversBtn.innerHTML = '<<<'
                }
                else {
                    servers.style.display = "flex"
                    serversBtn.innerHTML = '>>>'
                }
            })
            showhideBtn.insertBefore(serversBtn, showhideBtn.firstElementChild);
        }
        stop() {
            let btn = document.getElementById('HideSideBarBtn')
            let btnStyle = document.getElementById('HideSidebarStyles')
            btnStyle.remove()
            btn.remove()
        }
    })
})();