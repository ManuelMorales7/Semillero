import { jobList } from "./jobList.js";

const main = document.getElementById('main');
const jobListing = document.getElementById('jobListing');

jobList.forEach(job =>{
    const leftContainer = document.createElement('aside');
    leftContainer.classList.add('leftContainer');

    const rightContainer = document.createElement('aside');
    rightContainer.classList.add('rightContainer');

    const writtenInfo = document.createElement('div');
    writtenInfo.classList.add('writtenInfo');
    leftContainer.append(writtenInfo);

    const jobCard = document.createElement('article');
    jobCard.classList.add('jobCard');
    jobCard.append(leftContainer, rightContainer);
    jobCard.tags1 = job.tags1;
    jobCard.tags2 = job.tags2;

    main.append(jobCard);
    
    const logoImg = document.createElement('img');
    logoImg.classList.add('logoImg');
    logoImg.src = job.image;
    leftContainer.append(logoImg);

    const tittle = document.createElement('h3');
    tittle.textContent = job.logoName;
    writtenInfo.append(tittle);

    const tags1 = tags(job.tags1, 1);
    const tagContainer = document.createElement('div');
    tagContainer.classList.add('tagContainer');
    tags1.forEach(tag =>{
        tagContainer.append(tag);
    });
    writtenInfo.append(tagContainer);

    const tags2 = tags(job.tags2, 2);
    const tag2Container = document.createElement('div');
    tag2Container.classList.add('tag2Container');
    tags2.forEach(tag =>{
        tag2Container.append(tag);
    });

    rightContainer.append(tag2Container);

    const jobTittle = document.createElement('h2');
    jobTittle.textContent = job.title;
    writtenInfo.append(jobTittle);

    const specifics = document.createElement('span');
    specifics.textContent = job.specifics;
    specifics.classList.add('specifics');
    writtenInfo.append(specifics);

})

function tags(tags, type){
    if(type == 1){
        let array = [];
        tags.forEach(tag =>{
            let tag1 = document.createElement('span');
            tag1.classList.add('tags1');
            tag1.textContent = tag;
            array.push(tag1);
        });
        return array;
    }else{
        let array = [];
        tags.forEach(tag =>{
            let tag2 = document.createElement('button');
            tag2.classList.add('tags2');
            tag2.textContent = tag;
            tag2.dataset.tag = tag;
            tag2.addEventListener('click', clickTag);
                array.push(tag2); 
        });
        return array;
    }
}

const tagsArray = [];

function clickTag(){
    let keyWordContainer = document.querySelector('#keyWordContainer');
    this.classList.toggle('selected');
    if(this.classList.contains('selected')){
        let groupedTags = document.querySelectorAll(`.tags2[data-tagt="${this.dataset.tag}"]`);
        groupedTags.forEach(tag => tag.classList.add('selected'));
        tagsArray.push(this.dataset.tag);
        keyWordContainer.classList.add('active');
    }else{
        let groupedTags = document.querySelectorAll(`.tags2[data-tag="${this.dataset.tag}"]`);
        groupedTags.forEach(tag => tag.classList.remove('selected'));
        tagsArray.splice(tagsArray.findIndex(tag => tag === this.dataset.tag), 1);
    }

    displayTagsArray(tagsArray);
    jobCardFilter();
}


function jobCardFilter(){
    const cards = document.querySelectorAll('.jobCard');
    cards.forEach(card => {
        if(
            tagsArray.length === 0 || card.tags2.some(tag =>{
               {return tagsArray.some(selectedTag => selectedTag === tag)};
            })
        ){
            card.classList.remove('hide');
        }else{
            card.classList.add('hide');
        }
        
    });
}


function displayTagsArray(tagsArray){
    const filteredWordsContainer = document.getElementById('filteredWords');
    let htmlCreator = '';
    tagsArray.forEach((tag,i) =>{
        console.log(tag, i);
        htmlCreator += "<label class='filtered'>" +tag+ "</label>";
    });
    filteredWordsContainer.innerHTML = htmlCreator;
}

displayTagsArray(tagsArray);