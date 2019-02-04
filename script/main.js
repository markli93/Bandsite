var exisitingComment =[ 
    {
       name:'Micheal Lyons',
       date:'12/18/2018',
       text:'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
   {
       name:'Gary Wong',
       date:'12/12/2018',
       text:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
   },
   {
       name:'Theodore Duncan',
       date:'11/15/2018',
       text:'TheodorHow can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
   }
];


function appendchild(){
for(i = 0;i < exisitingComment.length; i++){
    var Container = document.createElement('div');
    Container.classList.add('comment__Container');
    var logo= document.createElement('div');
    logo.classList.add('comment__logo');
    var header__container = document.createElement('div');
    header__container.classList.add('comment__username--container')
    var usernme__container =document.createElement('div');
    usernme__container.classList.add('comment__username--spacing');
    var Name = document.createElement('div');
    Name.innerText = exisitingComment[i].name;
    Name.classList.add('comment__username');
    var date = document.createElement('div');
    date.innerText = exisitingComment[i].date;
    var comment = document.createElement('div');
    comment.innerText= exisitingComment[i].text;
    comment.classList.add('comment__text');
    usernme__container.appendChild(Name);
    usernme__container.appendChild(date);
    header__container.appendChild(logo);
    header__container.appendChild(usernme__container);
    Container.appendChild(header__container);
    Container.appendChild(comment);
    document.getElementById('outputComment').appendChild(Container);
}
}

appendchild();

function dates() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1; 
    var year = date.getFullYear();
    if(day<10) {
        day='0'+day;
} 

    if(month<10) {
        month='0'+month;
} 

date = month+'/'+day+'/'+year;

return date;
}

var form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var newComment={
        name: event.target.userInput.value,
        date: dates(),
        text: event.target.inputComment.value
    }
    exisitingComment.unshift(newComment);
    document.getElementById('outputComment').innerHTML ='';
    document.getElementById('userInput').value='';
    document.getElementById('inputComment').value='';
    appendchild();
});