import { Vidz } from "./constants.js"
import { Subscription } from "./constants.js"
import { SidebarLinks } from "./constants.js"

const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const videoContainer = document.querySelector('.video-container')
const subscriptionList = document.querySelector('.subscribed-list')
const sidebarLinks = document.querySelector('.sidebar-links')



menu.addEventListener("click",function(){
    sidebar.classList.toggle('remove-sidebar')
    container.classList.toggle('expand-contianer')
})


const renderVidz = ( content )=> {
    let renderedContent = ""
    for( let item of content ){
        renderedContent += `<div class="video-list">
        <a href=""><iframe width="560" class="thumb" height="315" src=${item.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
        <div class="nav-flex">
        <a href="#"><img src=${item.profile} /></a>
        <div class="video-info">
            <a href="">${item.title}</a>
            <p>${item.channel}</p>
            <p>58k view &bull; 2 weeks ago</p>
        </div>
        </div>
        </div>`
    }

    return renderedContent

}

const renderSubscriptions = ( content ) => {
    let renderedContent = ""
    for( let item of content ){
        renderedContent += `
            <a href="#">
                <img src=${item.profile} />
                <p>
                    ${item.channel}
                </p>
            </a>
        `
    }

    return renderedContent
}

const renderSidebarLinks = ( content ) => {
    let renderedContent = ""
    for( let item of content ){
        renderedContent += `
            <a href="#">
                <img src=${item.icon} />
                <p>
                    ${item.tab}
                </p>
            </a>
        `
    }
    renderedContent += '<hr />'

    return renderedContent
}

sidebarLinks.innerHTML = renderSidebarLinks( SidebarLinks )
subscriptionList.innerHTML += renderSubscriptions( Subscription )
videoContainer.innerHTML = renderVidz( Vidz )